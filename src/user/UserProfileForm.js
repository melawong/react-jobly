import { useState, useContext, useEffect } from "react";
import UserContext from "../userContext";

/** UserProfile form component
 *
 * context - handleUserUpdate
 * state - formData
 *
 */

function UserProfileForm() {
  const { user, handleUserUpdate } = useContext(UserContext);
  const { username, firstName, lastName, email } = user;
  const [formData, setFormData] = useState({
    username,
    firstName,
    lastName,
    email,
  });

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  /** Call parent function and clear form. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    const { firstName, lastName, email } = formData;
    const updatedData = await handleUserUpdate(username, {
      firstName,
      lastName,
      email,
    });
    setFormData((formData) => ({
      ...formData,
      firstName: updatedData.firstName,
      lastName: updatedData.lastName,
      email: updatedData.email,
    }));
  }

  /** Create form fields  */
  function renderFormFields() {
    const formFields = Object.keys(formData);
    return formFields.map((f) => (
      <div className="p-1" key={f}>
        <input
          id={f}
          name={f}
          disabled={f === "username"}
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
    <form className="UpdateUserForm container" onSubmit={handleSubmit}>
      <div className="mb-3 col-md-6 mx-auto mt-2">
        {renderFormFields()}
        <button className="btn btn-info">Save Changes!</button>
      </div>
    </form>
  );
}

export default UserProfileForm;
