import React, { useState } from "react";
import BoxModal from "../modals/BoxModal";

function Question3() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [formattedName, setFormattedName] = useState("");

  // #################################################
  // 說明：重構後的程式碼簡潔、易於閱讀以及維護

  function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }

  // #################################################
  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleFormatClick() {
    const formatted = formatName(firstName, lastName);
    setFormattedName(formatted);
  }

  function resetHandler() {
    setFirstName("");
    setLastName("");
    setFormattedName("");
  }

  return (
    <BoxModal>
      <h3>問題3 程式碼重構</h3>
      <div>
        <input
          type="text"
          placeholder="first name"
          className="input-field"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="last name"
          className="input-field"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <div>
        <button onClick={handleFormatClick}>合併</button>
        &nbsp;
        <button onClick={resetHandler}>清除</button>
      </div>
      <p>合併後名稱: {formattedName}</p>
    </BoxModal>
  );
}

export default Question3;
