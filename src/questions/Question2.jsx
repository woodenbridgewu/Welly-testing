import React from "react";
import BoxModal from "../modals/BoxModal";

function Question2() {
  const numbers = [2, 8, 4, 10, 1, 7];

  function filterNumbersGreaterThanFive(numbers) {
    return numbers.filter((number) => number > 5);
  }

  console.log(`Input: ${numbers}`);
  console.log(`Output: ${filterNumbersGreaterThanFive(numbers)}`);

  return (
    <BoxModal>
      <h3>問題2 陣列過濾</h3>
      <p>函式請參考程式碼和console區</p>
    </BoxModal>
  );
}

export default Question2;
