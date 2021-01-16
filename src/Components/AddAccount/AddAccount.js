import React, { useState, useRef, useEffect } from "react";
import { withRouter } from "react-router-dom";

const AddAccount = (props) => {
  const [newAccount, setNewAccount] = useState({
    id: "",
    name: "",
    lastname: "",
    phone: "",
    email: "",
  });
  const inputText = useRef();

  useEffect(() => {
    inputText.current.focus();
  }, []);

  const addNewAccount = () => {
    props.addNewAccountToState(newAccount);
    props.history.push("/");
  };
  return (
    <div className="row">
      <div className="col-10 offset-1">
        <h3 className="display-4 m-4">Add Account</h3>
        <div className="row">
          <div className="col-10 offset-1">
            <input
              ref={inputText}
              type="text"
              className="form-control"
              placeholder="id"
              onChange={(e) => {
                setNewAccount({ ...newAccount, id: e.target.value });
              }}
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="name"
              onChange={(e) => {
                setNewAccount({ ...newAccount, name: e.target.value });
              }}
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="lastname"
              onChange={(e) => {
                setNewAccount({ ...newAccount, lastname: e.target.value });
              }}
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="phone"
              onChange={(e) => {
                setNewAccount({ ...newAccount, phone: e.target.value });
              }}
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="email"
              onChange={(e) => {
                setNewAccount({ ...newAccount, email: e.target.value });
              }}
            />
            <br />
            <button
              onClick={addNewAccount}
              className="btn btn-primary form-control"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(AddAccount);
