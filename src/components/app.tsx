import { Main } from '../pages/main/main';
import type { PromoInfo } from '../pages/main/main';

export function App(props: PromoInfo) {
  return (
    <Main
      {...props}
    />
  );
}
