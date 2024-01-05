import { useAppSelector } from '../../hooks';

export function SignInError() {
  const error = useAppSelector((state) => state.error);

  if (error === null) {
    return null;
  }

  return (
    <div className="sign-in__error">
      <p>Please enter the correct email and password</p>
    </div>
  );
}
