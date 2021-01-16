import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

const EditAccount = (props) => {
  const [account, setAccount] = useState({
    id: "",
    name: "",
    lastname: "",
    phone: "",
    email: "",
  });
  useEffect(() => {
    const accForEdit = props.accounts.filter(
      (el) => el.id === props.match.params.id
    )[0];
    setAccount(accForEdit);
  }, []);
  const editAccount = () => {
    props.editAccount(account);
    props.history.push("/");
  };
  return (
    <div className="row">
      <div className="col-10 offset-1">
        <h3 className="display-4 m-4">Edit Acccount</h3>
        <div className="row">
          <div className="col-10 offset-1">
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setAccount({ ...account, name: e.target.value });
              }}
              value={account.name}
            />
            <br />
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setAccount({ ...account, lastname: e.target.value });
              }}
              value={account.lastname}
            />
            <br />
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setAccount({ ...account, phone: e.target.value });
              }}
              value={account.phone}
            />
            <br />
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setAccount({ ...account, email: e.target.value });
              }}
              value={account.email}
            />
            <br />

            <button
              onClick={editAccount}
              className="btn btn-primary form-control"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(EditAccount);
