import InputRow from "./Input";

export default function ExperienceField() {
  return (
    <div className="experience">
      <InputRow label="Company" type="text" required="true" />
      <InputRow label="Position" type="text" required="true" />
      <InputRow label="Position responsibilities" type="text" required="true" />
      <InputRow label="From date" type="date" required="true" />
      <InputRow label="Until date" type="date" required="true" />
    </div>
  );
}
