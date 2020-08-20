import React from "react";

// const localUser = localStorage.getItem("username");

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
        <div className='welcomeCont'>
        <h1>
           Welcome
        </h1>
        </div>
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
