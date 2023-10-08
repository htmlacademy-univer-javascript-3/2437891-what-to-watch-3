import Main from './main';
import type { PromoInfo } from './main';

function App(props: PromoInfo) {
  return (
    <Main
      {...props}
    />
  );
}

export default App;
