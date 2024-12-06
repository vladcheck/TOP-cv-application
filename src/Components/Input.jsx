import { useState } from "react";

export default function InputRow(props) {
  return (
    <div className="form-row">
      <label>
        {props.label}
        <input
          type={props.type}
          defaultValue={props?.default}
          required={props.required}
        />
      </label>
    </div>
  );
}
