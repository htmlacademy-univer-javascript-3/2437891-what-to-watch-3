import { useEffect, useState } from 'react';
import { AppRoute, AuthorizationStatus } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks';
import { logout } from '../store/api-actions';
import { Link, useNavigate } from 'react-router-dom';
import { requireAuthorization, setMyFilmsCount } from '../store/actions';

export function UserBlock() {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const userInfo = useAppSelector((state) => state.userInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isLogout, setIsLogout] = useState(false);
  useEffect(() => () => {
    if (isLogout) {
      dispatch(logout());
    }
  }, [isLogout, dispatch]);

  const onLogout = () => {
    setIsLogout(true);
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    navigate(AppRoute.Main);
    dispatch(setMyFilmsCount(0));
  };

  if (authorizationStatus === AuthorizationStatus.Auth) {
    if (isLogout) {
      return (
        <div className='user-block'>
          <button onClick={() => navigate(AppRoute.SignIn)}>Sign in</button>
        </div>
      );
    }

    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <Link to={AppRoute.MyList}>
              <img src={userInfo?.avatarUrl} alt="User avatar" width={63} height={63}/>
            </Link>
          </div>
        </li>
        <li className="user-block__item">
          <button onClick={onLogout}>Sign out</button>
        </li>
      </ul>
    );
  }

  return (
    <div className='user-block'>
      <button onClick={() => navigate(AppRoute.SignIn)}>Sign in</button>
    </div>
  );
}
