export default function Resume({ formValues }) {
  const children = [];
  for (let [key, value] of Object.entries(formValues)) {
    if (value)
      children.push(
        <div>
          {key}:{value}
        </div>
      );
  }
  return <section id="resume">{children}</section>;
}
