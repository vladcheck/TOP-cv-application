import { useState } from "react";
import { Form } from "./Components/Form";

function App() {
  let [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <>
      <Form id="resume" setFormSubmitted={setFormSubmitted} />
      {formSubmitted && <h1>Success!</h1>}
    </>
  );
}

export default App;
