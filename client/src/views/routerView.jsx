import { Outlet } from 'react-router-dom';
const RouterView = () => {
  return (
    <>
      {/* <NavbarMain /> */}
      <main className="h-100">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default RouterView;
