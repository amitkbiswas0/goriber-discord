import React from "react";
import { useHistory } from "react-router-dom";

import { logoutAuth } from "../../services/authentication";

function Main() {
  const history = useHistory();
  return (
    <div className="max-w-md px-8 py-4 border-2 border-solid rounded-md shadow-lg flex flex-col">
      <h2 className="text-xl font-medium">Main page</h2>
      <h4 className="text-sm font-normal">Click button to log out!</h4>
      <button
        type="button"
        className="btn btn-filled my-4"
        onClick={() => {
          logoutAuth();
          return history.push("/");
        }}
      >
        logout
      </button>
    </div>
  );
}

export default Main;
