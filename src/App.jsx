import { useState } from "react";
import { Form } from "./Components/Form";
import Resume from "./Components/Resume";

function App() {
  let [formValues, setFormValues] = useState({});

  return (
    <>
      <Form id="resumeForm" setFormValues={setFormValues} />
      {Object.keys(formValues).length > 0 && <Resume formValues={formValues} />}
    </>
  );
}

export default App;
