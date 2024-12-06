export default function Submit({ id, setFormValues }) {
  return (
    <button
      type="submit"
      onClick={(e) => {
        if (document.getElementById(id).checkValidity()) {
          const formRows = document.querySelectorAll(`#${id} .form-row`);
          const values = [...formRows].reduce((acc, row) => {
            const label = row.querySelector("label");
            const input = row.querySelector("input");
            acc[label.textContent] = input.value;
            return acc;
          }, {});
          console.log(values);
          e.preventDefault();
          setFormValues(values);
        }
      }}
    >
      Submit
    </button>
  );
}
