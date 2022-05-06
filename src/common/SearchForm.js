import { useState } from "react";

/** Search bar component
 *
 * props - handleSearch function
 * state - formData
 *
 * CompaniesList --> { SearchForm }
 * Jobs List --> { SearchForm }
 */

function SearchForm({ handleSearch }) {
  const [formData, setFormData] = useState({ search: "" });

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(formData.search);
  }

  return (
    <form
      className="SearchForm container input-group mb-3 col-md-4 mt-2"
      onSubmit={handleSubmit}
    >
      <input
        id="search-form"
        name="search"
        className="form-control"
        placeholder="Enter search term..."
        onChange={handleChange}
        value={formData.search}
        aria-label="search"
        aria-describedby="button-addon2"
      />
      <button className="btn btn-info" id="button-addon2">
        Submit!
      </button>
    </form>
  );
}

export default SearchForm;
