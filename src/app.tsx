import MainPage from './main-page';
import type { PromoInfo } from './main-page';

function App(props: PromoInfo) {
  return (
    <MainPage
      {...props}
    />
  );
}

export default App;
