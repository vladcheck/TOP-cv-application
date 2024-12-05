export function InputRow(props) {
  return (
    <div className="form-row">
      <label>
        {props.label}
        <input type={props.type} />
      </label>
    </div>
  );
}
