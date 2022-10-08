import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNumber, minusNumber } from "./redux/modules/counter";

const App = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const globalNumber = useSelector((state) => state.counter.number);

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setNumber(+value); // 문자열이므로 숫자형으로 바꾸기 위해 + 넣음
  };

  const onClickAddNumberHandler = () => {
    dispatch(addNumber(number));
  };

  const onClickMinusNumberHandler = () => {
    dispatch(minusNumber(number));
  };

  return (
    <div>
      <div>{globalNumber}</div>
      <input onChange={onChangeHandler} type="number" />
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button onClick={onClickMinusNumberHandler}>빼기</button>
    </div>
  );
};

export default App;
