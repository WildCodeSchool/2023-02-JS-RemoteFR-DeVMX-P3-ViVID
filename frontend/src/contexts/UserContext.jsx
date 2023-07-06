import { createContext, useMemo, useState } from "react";
import { PropTypes } from "prop-types";

const UserContext = createContext();

function ContextProvider({ children }) {
  const [users, setUsers] = useState();

  const contextValue = useMemo(() => ({ users, setUsers }), [users, setUsers]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
ContextProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

const UserExport = { UserContext, ContextProvider };

export default UserExport;
