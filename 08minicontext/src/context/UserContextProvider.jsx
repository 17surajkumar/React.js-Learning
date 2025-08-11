import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({ children }) => {
  //{children} are the components which are going to use the
  // data provided by the context
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
