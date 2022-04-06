import React from "react";
import "./User.css";

const User = ({ id, name, email, phone, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="App__user-list">
      <table>
        <thead className="App__user-list-thead">
          <tr>
            <th>Id:</th>
            <td className="App__user-list--id">{id}</td>
          </tr>
          <tr>
            <th>Name:</th>
            <td className="App__user-list--name">{name}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td className="App__user-list--email">{email}</td>
          </tr>
          <tr>
            <th>Phone number:</th>
            <td className="App__user-list--phone">{phone}</td>
          </tr>
          <tr>
            <th>Delete user:</th>
            <td>
              <button
                onClick={handleDelete}
                className="App__btn-delete-user waves-effect waves-light btn red"
              >
                <i className="material-icons left" onClick={handleDelete}>
                  close
                </i>
              </button>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default User;
