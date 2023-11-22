import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';

import style from './currentLocation.module.scss';

export function CurrentLocation({ classNames }) {
  return (
    <div className={cn(style.address, classNames)}>
      <p className={style.address__deliver}>Deliver to:</p>
      <FontAwesomeIcon className={style.address__icon} icon={faLocationDot} />
      <span className={style.address__location}>Current Location</span>
      <span className={cn(style.address__location, style.address__location_weight)}>
        Lakeshore Road East, Mississauga
      </span>
    </div>
  );
}
