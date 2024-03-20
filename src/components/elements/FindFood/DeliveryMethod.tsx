import { FC } from 'react';

import { useAppSelector } from '../../../store';
import { deliveryTypeSelector } from '../../../store/slices/location/slice';
import { DeliveryType } from '../../../store/slices/location/types';
import { DeliveryTab } from '../../ui/buttons/DeliveryTab';
import style from './deliveryMethod.module.scss';

export type Button = {
  label: DeliveryType;
};

type DeliveryMethodProps = { handleDeliveryTypeChange: (label: DeliveryType) => void; list: Button[] };

export const DeliveryMethod: FC<DeliveryMethodProps> = ({ handleDeliveryTypeChange, list }) => {
  const deliveryType = useAppSelector(deliveryTypeSelector);

  const handleSelectItem = (label: DeliveryType) => {
    handleDeliveryTypeChange(label);
  };

  return (
    <div className={style.delivery}>
      {list.map(({ label }, i) => (
        <DeliveryTab
          active={deliveryType === label}
          handleClickItem={() => handleSelectItem(label)}
          key={`${label}_${i}`}
          label={label}
        />
      ))}
    </div>
  );
};
