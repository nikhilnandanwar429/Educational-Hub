import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

function Template({ Title, Desc1, Desc2, formType, setIsLogin }) {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-blue-500">
        <h1 className="">{Title}</h1>

        <div>
          <p>{Desc1}</p>
          <p>{Desc2}</p>
        </div>

        {formType === "Login" ? (
          <LoginForm setIsLogin={setIsLogin} />
        ) : (
          <SignupForm setIsLogin={setIsLogin} />
        )}

        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>

        <button>
          <p>Sign in with google</p>
        </button>
      </div>
    </div>
  );
}

export default Template;
