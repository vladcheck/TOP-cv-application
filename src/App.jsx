import { useState } from "react";
import { Form } from "./Components/Form";
import Resume from "./Components/Resume";

function App() {
  let [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <>
      <Form id="resumeForm" setFormSubmitted={setFormSubmitted} />
      {formSubmitted && <Resume />}
    </>
  );
}

export default App;
