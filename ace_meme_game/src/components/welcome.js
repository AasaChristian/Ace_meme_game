import React from "react";

const localUser = localStorage.getItem("username");
function Welcome(props) {
  const register = (e) => {
    e.preventDefault();
    props.history.push("/register");
  };

  const login = (e) => {
    e.preventDefault();
    props.history.push("/login");
  };
  return (
    <div>
      <header>
        <h1>
          Hello {localUser}!! <br></br> Welcome to Ace's Chat App!!
        </h1>
      </header>
      <section className="enterBTNCont">
        <button className="enterBTN" onClick={register}>
          REGISTER
        </button>
        <button className="enterBTN" onClick={login}>
          LOGIN
        </button>
      </section>
    </div>
  );
}
export default Welcome;
