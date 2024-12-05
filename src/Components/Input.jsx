export function InputRow(props) {
  if (props.required === "true")
    return (
      <div className="form-row">
        <label>
          {props.label}
          <input type={props.type} required />
        </label>
      </div>
    );
  return (
    <div className="form-row">
      <label>
        {props.label}
        <input type={props.type} />
      </label>
    </div>
  );
}
