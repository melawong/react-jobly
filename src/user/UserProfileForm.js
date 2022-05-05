import { useState, useContext, useEffect } from "react";
import UserContext from "../userContext";

/** UserProfile form component
 *
 * context - handleUserUpdate
 * state - formData
 *
 */

function UserProfileForm() {
  const { user, getUser, handleUserUpdate } = useContext(UserContext);
  const [formData, setFormData] = useState({});

  useEffect(function getUserInfoOnMount() {
    async function getUserInfo() {
      const userInfo = await getUser(user.username);
      setFormData({
        username: userInfo.username,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email,
      });
    }
    getUserInfo();
    console.log(formData);
  }, []);

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  /** Call parent function and clear form. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    const { firstName, lastName, email } = formData;
    const updatedData = await handleUserUpdate(user.username, {
      firstName,
      lastName,
      email,
    });
    setFormData((formData) => ({
      ...formData,
      ...updatedData,
    }));
  }

  /** Create form fields  */
  function renderFormFields() {
    const formFields = Object.keys(formData);
    return formFields.map((f) => (
      <input
        id={f}
        key={f}
        name={f}
        className="form-control"
        placeholder={`Enter ${f}...`}
        onChange={handleChange}
        value={formData[f]}
        aria-label={f}
      />
    ));
  }

  return (
    <form className="UpdateUserForm" onSubmit={handleSubmit}>
      <div className="mb-3">
        {renderFormFields()}
        <button>Save Changes!</button>
      </div>
    </form>
  );
}

export default UserProfileForm;
