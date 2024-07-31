import { Outlet } from 'react-router-dom';
const RootView = () => {
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

export default RootView;
