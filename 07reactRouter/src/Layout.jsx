import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

// Navbar, footer, sidebar → Parent Layout
// Page ka actual content (Home, About, etc.) → <Outlet /> me render hota hai

// Layout can be anything, this work can be also be done in the App.jsx

// Outlet kya krta hai jo iske ya niche cheezen hain unko fix rkhega aur baki cheezein ko change kr dega

// Header same rheaga footer same rhega, aur beech wali cheezen change hongi

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
