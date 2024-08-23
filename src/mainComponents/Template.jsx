import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

function Template({ Title, Desc1, Desc2, formType }) {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-blue-700 p-5 mt-10 border-[4px] border-black rounded-2xl">
        <h1 className="text-[5vh]"><b>{Title}</b></h1>

        <div>
          <p>{Desc1}</p>
          <p>{Desc2}</p>
        </div>

        {formType === "Login" ? (
          <LoginForm  />
        ) : (
          <SignupForm  />
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
