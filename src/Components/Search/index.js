import "./style.css";

export default function Search(props) {
  return (
    <form className="searchbar">
      <div className="field has-addons">
        <div className="control is-expanded">
          <input
            name="search"
            onChange={props.handleInputChange}
            placeholder="Search for inspiration"
            className="input is-medium"
            id="search-input"
          />
        </div>
        <div className="control">
          <button
            type="submit"
            className="button is-medium search-btn fas fa-syringe"
            onClick={(e) => props.handleFormSubmit(e)}
          ></button>
        </div>
      </div>
    </form>
  );
}
