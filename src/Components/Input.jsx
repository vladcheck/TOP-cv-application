import { useState } from "react";

export default function InputRow(props) {
  let [value, setValue] = useState("");

  function changeValueOnClick(e) {
    setValue(e.target.value);
  }

  if (props.required === "true")
    return (
      <div className="form-row">
        <label>
          {props.label}
          <input
            type={props.type}
            value={value}
            onChange={changeValueOnClick}
            required
          />
        </label>
      </div>
    );
  return (
    <div className="form-row">
      <label>
        {props.label}
        <input type={props.type} onChange={changeValueOnClick} value={value} />
      </label>
    </div>
  );
}
