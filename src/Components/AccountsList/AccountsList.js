import React from "react";
import Account from "../Account/Account";
import { Link } from "react-router-dom";

const AccountsList = ({ accounts, deleteAccount, editAccount }) => {
  const allAccounts = accounts.map((el) => {
    return (
      <tr key={el.id}>
        <td>{el.id}</td>
        <td>{el.name}</td>
        <td>{el.lastname}</td>
        <td>{el.phone}</td>
        <td>{el.email}</td>
        <td>
          <Link to={"/edit" + el.id} className="btn bg-warning">
            Edit
          </Link>
        </td>
        <td>
          <button
            onClick={() => deleteAccount(el.id)}
            className="btn bg-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div className="row">
      <div className="col-10 offset-1">
        <h3 className="display-4 m-4">Accounts</h3>
        <div className="row">
          <div className="col-10 offset-1">
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Lastname</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>{allAccounts}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccountsList;
