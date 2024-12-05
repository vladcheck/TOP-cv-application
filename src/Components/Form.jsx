import { InputRow } from "./Input";

export function Form(props) {
  return (
    <form method=".">
      <h1>Create your resume</h1>
      <hr />
      <h2>General</h2>
      <InputRow label="Name" type="text" required="true" />
      <InputRow label="Email" type="email" required="true" />
      <InputRow label="Phone" type="tel" required="true" />
      <h2>Education</h2>
      <InputRow label="School name" type="text" required="true" />
      <InputRow label="Title of study" type="text" />
      <InputRow label="Date of study" type="date" />
      <h2>Experience</h2>
      <button>Add experience</button>
      <InputRow label="Company" type="text" required="true" />
      <InputRow label="Position" type="text" required="true" />
      <InputRow label="Position responsibilities" type="text" required="true" />
      <InputRow label="From date" type="date" required="true" />
      <InputRow label="Until date" type="date" required="true" />
      <button type="submit">Submit</button>
    </form>
  );
}
