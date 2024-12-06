import { useState } from "react";

export default function InputRow(props) {
  let [value, setValue] = useState("");

  function changeValueOnClick(e) {
    setValue(e.target.value);
  }

  return (
    <div className="form-row">
      <label>
        {props.label}
        <input
          type={props.type}
          value={value}
          onChange={changeValueOnClick}
          required={props.required}
        />
      </label>
    </div>
  );
}
