import { FormEvent, useRef } from 'react';
import { Footer } from '../../components/footer';
import { Logo } from '../../components/logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { login } from '../../store/api-actions';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { SignInError } from './sign-in-error';

export function SignIn() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const status = useAppSelector((state) => state.authorizationStatus);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      dispatch(login({
        email: emailRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };

  if (status === AuthorizationStatus.Auth) {
    navigate(AppRoute.Main);
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="" className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={emailRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
            Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
            Password
              </label>
            </div>
          </div>
          <SignInError/>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
          Sign in
            </button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
}
