import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import { removeUser } from '../../../store/reducers/user';
import { isAuthSelector } from '../../../store/reducers/user';
import { LogoType } from '../../ui/LogoType';
import { ButtonCart } from '../../ui/buttons/ButtonCart';
import { ButtonLogin } from '../../ui/buttons/ButtonLogin';
import { CurrentLocation } from './CurrentLocation';
import { MobileMenu } from './MobileMenu';
import style from './header.module.scss';

export function Header() {
  const navigate = useNavigate();
  const goBack = () => navigate('/');

  const { pathname } = useLocation();

  const isAuth = useSelector(isAuthSelector);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(removeUser());
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <header className={style.headerBlock}>
      <div className="container">
        <div className={style.header}>
          <Link className={style.header__logoLink} to={'/'}>
            <LogoType classNames={style.header__logo} />
          </Link>

          <CurrentLocation classNames={style.header__address} />

          <div className={cn(style.search, style.header__search)}>
            <Link className={style.search__link} to="search">
              <ReactSVG
                className={style.search__icon}
                src={process.env.PUBLIC_URL + '/images/header/search.svg'}
                wrapper="span"
              />
              <span className={style.search__name}>Search Food</span>
            </Link>

            {isAuth ? (
              <ButtonLogin classNames={style.search__login} handleClick={handleLogOut} title={'Logout'} />
            ) : (
              <ButtonLogin classNames={style.search__login} handleClick={handleLogin} title={'Login'} />
            )}

            {pathname !== '/cart' && (
              <Link to={'cart'}>
                <ButtonCart />
              </Link>
            )}
          </div>

          <MobileMenu handleLogOut={handleLogOut} />
        </div>
      </div>
    </header>
  );
}
