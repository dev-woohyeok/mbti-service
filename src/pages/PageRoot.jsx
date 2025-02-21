import { Outlet } from 'react-router';
import Footer from '~components/layouts/Footer';
import Header from '~components/layouts/Header';

function PageRoot() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default PageRoot;
