import { useState } from "react";
import ExperienceField from "./ExperienceField";
import InputRow from "./Input";

export function Form(props) {
  let [experienceFields, setExperienceFields] = useState([]);

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
      <button
        onClick={() => {
          setExperienceFields([...experienceFields, ExperienceField()]);
        }}
      >
        Add experience
      </button>
      <div id="experience-section">
        {experienceFields.map((field) => field)}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
