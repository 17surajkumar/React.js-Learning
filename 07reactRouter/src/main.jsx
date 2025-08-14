import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },

//       {
//         path: "about",
//         element: <About />,
//       },

//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Layout />}>
      {/*These are the children Route components which are placed inside Outlet
      while the things like header and footer are same for all the pages
      
      Using the Navlink inside the component like header and footer we can easliy go to any pages by applying <NavLink to="/" className={({ isActive })> Home </NavLink>
      */}

      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="github" element={<Github />} loader={githubInfoLoader} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);




/*
<Route path="/" element={<Layout />}>: This is the main rule. It says for every page on your site (starting with /), first show the <Layout /> component. The Layout component typically contains your website's header and footer, which stay the same on every page.


~  The routes inside are children of <Layout />. This means they will be displayed inside the Layout component, usually where an <Outlet /> component is placed.


~ <Route path="" element={<Home />} />: If the URL is just the base domain (e.g., www.example.com), show the <Home /> component inside the Layout.


~ <Route path="github" loader={githubInfoLoader} />: This is a route with a data loader. Before the <Github /> component is even shown, React Router will run the githubInfoLoader function to fetch data (like your GitHub followers). This makes the page load faster because the data is ready a bit earlier. It's like a chef starting to cook your meal before you even sit down at the table.

path="user/:userid" — this defines a dynamic route parameter named userid
When URL is /user/42, the route matches and sets params.userid = "42".


 */
