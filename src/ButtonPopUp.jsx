import React from "react";
import { useState } from "react";
import Pop from "./Pop";

const ButtonPopUp = () => {
  let [state, setState] = useState(false);
  let changeFunction = () => {
    setState(!state);
    console.log(state);
  };
  return (
    <div>
      <section className="w-[100%]  ">
        <article className="w-[80%] mx-auto flex justify-center  mt-[-15px] my-2  ">
          <button
            className=" border-2 border-black rounded  py-2 px-4  mt-[100px]  "
            onClick={changeFunction}
          >
            PopUp
          </button>
        </article>
      </section>

      {state ? <Pop /> : null}
    </div>
  );
};

export default ButtonPopUp;
