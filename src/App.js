import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
//Components
import Header from "./Components/Header/Header";
import AccountsList from "./Components/AccountsList/AccountsList";
import AddAccount from "./Components/AddAccount/AddAccount";
import EditAccount from "./Components/EditAccount/EditAccount";

const App = () => {
  const [accounts, setAccounts] = useState([]);

  const addNewAccountToState = (newAcc) => {
    setAccounts(accounts.concat(newAcc));
  };

  const deleteAccount = (id) => {
    const newArray = accounts.filter((el) => el.id !== id);
    setAccounts(newArray);
  };

  const editAccount = (accForEdit) => {
    let copyArr = [...accounts];
    const index = copyArr.findIndex((el) => el.id === accForEdit.id);
    copyArr[index] = accForEdit;
    setAccounts(copyArr);
  };

  return (
    <div>
      <BrowserRouter>
        <Route path="/">
          <Header />
        </Route>
        <Route path="/" exact>
          <AccountsList accounts={accounts} deleteAccount={deleteAccount} />
        </Route>
        <Route path="/addAccounts">
          <AddAccount addNewAccountToState={addNewAccountToState} />
        </Route>
        <Route path="/edit:id">
          <EditAccount accounts={accounts} editAccount={editAccount} />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
