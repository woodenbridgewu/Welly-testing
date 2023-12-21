import React, { useState } from "react";
import BoxModal from "../modals/BoxModal";

function Question1() {
  const [output, setOutput] = useState("");

  function inputChangeHandler(input) {
    setOutput(reverseString(input.target.value));
  }

  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  return (
    <BoxModal>
      <h3>問題1 字串反轉</h3>
      <div>
        <input
          type="text"
          placeholder="請輸入文字"
          onChange={inputChangeHandler}
          className="input-field"
        />
      </div>
      <p>字串反轉結果: {output}</p>
    </BoxModal>
  );
}

export default Question1;
