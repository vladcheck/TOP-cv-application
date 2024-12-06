export default function ShowcaseField({ name, value }) {
  return (
    <div className="form-row">
      <button className="edit">*</button>
      <span>{name}</span>
      <span>{value}</span>
    </div>
  );
}
