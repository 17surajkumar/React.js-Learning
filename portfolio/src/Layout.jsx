import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

// Navbar, footer, sidebar → Parent Layout
// Page ka actual content (Home, About, etc.) → <Outlet /> me render hota hai
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;

/*

Why <Outlet /> is Useful...
 Keeps common layouts (like navbars, footers) in one place./Avoids duplicating code for each page.
 Makes nested routing easy to manage.


*/
