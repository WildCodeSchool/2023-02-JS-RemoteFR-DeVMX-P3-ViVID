import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

function ContextProvider({ children }) {
  const [user, setUser] = useState();
  const contextValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

const UserExport = { UserContext, ContextProvider };

export default UserExport;
