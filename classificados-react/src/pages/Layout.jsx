import { Outlet } from "react-router-dom";
import CustomNavbar from "../componentes/NavBar";

const Layout = () => {
  return (
    <>
      <CustomNavbar />

      <Outlet />
    </>
  )
};

export default Layout;