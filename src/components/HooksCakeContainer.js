import React from "react";
import { buyCake } from "../redux";
import { useDispatch, useSelector } from "react-redux";

function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch(() => dispatch(buyCake()));
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={dispatch}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
