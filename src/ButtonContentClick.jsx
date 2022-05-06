import React, { useState } from "react";


const ButtonContentClick = () => {
 let [state, setState] = useState({
    name: "karthi",
    age: 22,
  });

  let [loading, setLoading] = useState(false);

  let ToggleLoad = () => {
    setLoading(!loading);
    console.log(loading);
    // setState(state);
  };

    return (
      <>
        <center>
          <h1 className="text-5xl">ButtonConditional rendering</h1>
          <div>
            <button
              onClick={ToggleLoad}
              className="border-2 p-1 border-black  mt-[150px]"
            >
              {loading ? "submit" : "greetings"}
            </button>
            <h1 className="text-red-500">
              <div></div>
              {loading ? [state.name] : "welcome"}
            </h1>
          </div>
        </center>
      </>
    );
    
};



export default ButtonContentClick
