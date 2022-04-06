import React, { useState } from "react";
import "./UserAddBtn.css";

const UserAddBtn = ({ onAdd }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value, e.target.email.value, e.target.phone.value);
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.phone.value = "";
    onHideForm();
  };

  const [show, setShow] = useState(false);

  const onHideForm = () => {
    setShow(true);
  };
  
  return (
    <div className="App__btn-add-user">
      <button className="App__btn-add-user--btn btn-floating btn-large pulse purple darken-1">
        <i className="material-icons" onClick={() => setShow(!show)}>
          edit
        </i>
      </button>
      {show ? (
        <form className="App__btn-add-user-form row" onSubmit={handleOnSubmit}>
          <div className="col">
            <div className="input-field">
              <input name="name" placeholder="Name" required />
            </div>
            <div className="input-field">
              <input name="email" placeholder="Email" required />
            </div>
            <div className="input-field">
              <input name="phone" placeholder="Phone" required />
            </div>
            <div>
              <button
                className="App__btn-add-user-form--btn-update waves-effect waves-light btn orange"
                onSubmit={handleOnSubmit}
              >
                <i className="material-icons right">send</i>
                Save
              </button>
              <button
                className="App__btn-add-user-form--btn-cancel waves-effect waves-light btn red"
                onClick={() => setShow(!show)}
              >
                <i className="material-icons right">close</i>
                Close
              </button>
            </div>
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default UserAddBtn;
