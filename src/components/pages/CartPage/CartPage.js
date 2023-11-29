import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { addProduct, clearCart, deleteOneProduct, removeProduct, setProductCount } from '../../../store/reducers/cart';
import { addedGoodsSelector, cartSelector, totalQuantitySelector } from '../../../store/reducers/cart';
import { isAuthSelector, setOrders } from '../../../store/reducers/user';
import { Popup } from '../../ui/Popup/Popup';
import { ButtonOrder } from '../../ui/buttons/ButtonOrder';
import { CardProduct } from './CardProduct';
import { Modal } from './Modal';
import style from './cartPage.module.scss';

let orderNumber = 0;

function Cart() {
  const { pathname } = useLocation();

  const [name, setName] = useState('');
  const [id, setId] = useState('');

  const [visiblePopup, setVisiblePopup] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);

  const popupRef = useRef(null);
  const modalRef = useRef(null);

  const addedGoods = useSelector(addedGoodsSelector);
  const cart = useSelector(cartSelector);
  const totalQuantity = useSelector(totalQuantitySelector);
  const isAuth = useSelector(isAuthSelector);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleClearCart = ({ restaurantId, restaurantName }) => {
    setName(restaurantName);
    setId(restaurantId);
    setVisiblePopup(true);
  };

  const handleRemoveProduct = ({ id, restaurantId }) => {
    dispatch(removeProduct({ id, restaurantId }));
  };

  const handleAddProduct = (product) => {
    dispatch(addProduct(product));
  };

  const handleDeleteProduct = (obj, count) => {
    const { id, restaurantId } = obj;
    if (count < 1) {
      dispatch(removeProduct({ id, restaurantId }));
    } else dispatch(deleteOneProduct({ id, restaurantId }));
  };

  const handleInputQuantity = (obj) => {
    dispatch(setProductCount(obj));
  };

  const handlePlaceAnOrder = (id, name) => {
    const list = cart[id];
    if (!isAuth) {
      navigate('/login');
    } else {
      setName(name);
      setId(id);
      orderNumber++;
      setVisibleModal(true);
      dispatch(setOrders({ list, name, orderNumber }));
    }
  };

  const handleClosePopup = () => {
    setVisiblePopup(false);
  };

  const handleClearOrder = () => {
    dispatch(clearCart({ restaurantId: id }));
    setVisiblePopup(false);
  };

  const handleCloseModal = () => {
    dispatch(clearCart({ restaurantId: id }));
    setVisibleModal(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (popupRef.current?.contains(e.target)) {
        setVisiblePopup(false);
      }
      return;
    };
    document.body.addEventListener('click', handleOutsideClick);

    return () => document.body.removeEventListener('click', handleOutsideClick);
  }, []);

  if (!totalQuantity) {
    return (
      <div className={style.cart}>
        <div className={cn(style.cart__container, 'container')}>
          <div className={style.cart__inner}>
            <div className={style.cart__empty}>
              <p className={style.cart__name}>Shopping cart is empty</p>

              <p className={style.cart__result}>Use the search to find everything you need.</p>

              <Link className={style.cart__linkSearch} to="/search">
                Go to search page
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={style.cart}>
      <div className={cn(style.cart__container, 'container')}>
        <div className={style.cart__inner}>
          {totalQuantity &&
            addedGoods.map((restaurant) => {
              const [restaurantId, info] = restaurant;
              const products = Object.values(info.items);

              const price = info.totalAmount;
              const quantity = info.totalCount;
              const restaurantName = products[0] && products[0].restaurantName;

              return (
                <div className={cn(style.cart__order, style.cart__order_border)} key={restaurantId}>
                  <div className={style.cart__top}>
                    <div className={style.cart__restaurantName}>{restaurantName}</div>
                    <div className={style.cart__clear}>
                      <button
                        className={style.cart__clearBtn}
                        onClick={() => handleClearCart({ restaurantId, restaurantName })}
                      >
                        <FontAwesomeIcon className={style.cart__clearIcon} icon={faTrashCan} size="lg" />
                        clear
                      </button>
                    </div>
                  </div>

                  <div className={style.cart__list}>
                    {quantity ? (
                      <>
                        {products.map(({ quantity, ...item }) => {
                          return (
                            <CardProduct
                              {...item}
                              handleAddProduct={(item) => handleAddProduct(item)}
                              handleDeleteProduct={(obj) => handleDeleteProduct(obj, quantity)}
                              handleInputCount={(obj) => handleInputQuantity(obj)}
                              handleRemoveProduct={(obj) => handleRemoveProduct(obj)}
                              key={item.id}
                              quantity={quantity}
                            />
                          );
                        })}
                        <div className={cn(style.cart__orderInfo, style.cart__orderInfo_border)}>
                          <p className={style.cart__result}>
                            Your order for the total amount &#36;{' '}
                            <span className={style.cart__result_color}>{price && price.toFixed(2)}</span> and{' '}
                            <span className={style.cart__result_color}>{quantity}</span> items
                          </p>
                          <ButtonOrder
                            name={'Place an order'}
                            onClick={() => handlePlaceAnOrder(restaurantId, restaurantName)}
                          />
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <Modal
        handleCloseModal={handleCloseModal}
        name={name}
        orderNumber={orderNumber}
        ref={modalRef}
        show={visibleModal}
      />
      <Popup
        handleClearOrder={handleClearOrder}
        handleClosePopup={handleClosePopup}
        name={name}
        ref={popupRef}
        show={visiblePopup}
      />
    </div>
  );
}
export default Cart;
