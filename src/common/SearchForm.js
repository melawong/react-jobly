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
    setFormData({ search: "" });
  }

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          id="search-form"
          name="search"
          className="form-control"
          placeholder="Enter search term..."
          onChange={handleChange}
          value={formData.search}
          aria-label="search"
        />
        <button>Submit!</button>
      </div>
    </form>
  );
}

export default SearchForm;
