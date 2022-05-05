import { useState, useContext } from "react";
import UserContext from "../userContext";

/** Signup form component
 *
 * context - handleSignup
 * state - formData
 *
 */

function SignupForm() {
  const initialState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };
  const { handleSignup } = useContext(UserContext);
  const [formData, setFormData] = useState(initialState);

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSignup(formData);
    setFormData(initialState);
  }

  /** Create form fields  */
  function renderFormFields() {
    const formFields = Object.keys(initialState);
    return formFields.map((f) => (
      <div key={f}>
        <input
          type={f === "password" ? "password" : "text"}
          id={f}
          name={f}
          className="form-control"
          placeholder={`Enter ${f}...`}
          onChange={handleChange}
          value={formData[f]}
          aria-label={f}
        />
      </div>
    ));
  }

  return (
    <form className="SignupForm" onSubmit={handleSubmit}>
      <div className="mb-3">
        {renderFormFields()}
        <button>Submit!</button>
      </div>
    </form>
  );
}

export default SignupForm;
