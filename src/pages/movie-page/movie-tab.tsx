import { Dispatch, SetStateAction } from 'react';

export enum MovieTabEnum {
  Overview = 'Overview',
  Details = 'Details',
  Review = 'Review'
}

type MovieTabProps = {
  type: MovieTabEnum;
  onClick: Dispatch<SetStateAction<MovieTabEnum>>;
  isActive: boolean;
}

export function MovieTab({type, onClick, isActive}: MovieTabProps) {
  return (
    <li className={`film-nav__item ${isActive ? ' film-nav__item--active' : ''}`}>
      <div onClick={() => onClick(type)} className="film-nav__link">{type}</div>
    </li>
  );
}
