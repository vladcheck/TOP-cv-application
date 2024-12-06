export default function Submit({ id, setFormSubmitted }) {
  return (
    <button
      type="submit"
      onClick={(e) => {
        if (document.getElementById(id).checkValidity()) {
          e.preventDefault();
          setFormSubmitted(true);
        }
      }}
    >
      Submit
    </button>
  );
}
