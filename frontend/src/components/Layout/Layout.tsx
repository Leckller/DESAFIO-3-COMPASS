import { Outlet } from 'react-router-dom';
import Header from './Header';
import Main from './Main';

function Layout() {
  return (
    <div>

      <Header />
      <Outlet />
      <Main />

    </div>
  );
}

export default Layout;
