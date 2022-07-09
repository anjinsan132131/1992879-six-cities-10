import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  quantity: number;
};

function App({quantity}: AppProps): JSX.Element {
  return <MainPage quantity={quantity}/>;
}

export default App;
