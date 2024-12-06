export default function Resume({ values }) {
  return (
    <section id="resume">
      {values.map((key) => (
        <div key={key}>
          {key}:{values[key]}
        </div>
      ))}
    </section>
  );
}
