import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>React with Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;

// Jo ye UserContextProvider iske andar jo bhi components hai wo use data ko access kar sakte hain jo context api provide kar raha hai
