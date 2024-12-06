import { useState } from "react";
import ExperienceField from "./ExperienceField";
import InputRow from "./Input";
import Submit from "./Submit";

export function Form({ id, setFormValues }) {
  // let [fieldsToRender, setFieldsToRender] = useState({
  //   name: false,
  //   email: false,
  //   phone: false,
  //   "school name": false,
  //   "title of study": false,
  //   "date of study": false,
  // });
  let [experienceFields, setExperienceFields] = useState([]);

  return (
    <form method="." id={id}>
      <h1>Create your resume</h1>
      <hr />
      <h2>General</h2>
      <InputRow label="Name" type="text" default="John" required={true} />
      <InputRow
        label="Email"
        type="email"
        default="johndoe@gmail.com"
        required={true}
      />
      <InputRow label="Phone" type="tel" default="+7" required={true} />
      <h2>Education</h2>
      <InputRow
        label="School name"
        type="text"
        default="Street"
        required={true}
      />
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
      <hr />
      <Submit id={id} setFormValues={setFormValues} />
    </form>
  );
}
