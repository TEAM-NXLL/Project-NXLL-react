import './App.css';
import { ScrollRestoration, Outlet, useLocation } from 'react-router-dom';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import Header from './components/Header';

function App() {
  const location = useLocation();
  return (
    <RecoilRoot>
      <ScrollRestoration />
      {location.pathname.includes('/admin') ? null : <Header />}
      <Outlet />
    </RecoilRoot>
  );
}

export default App;
