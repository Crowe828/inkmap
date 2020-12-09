import "./style.css";

export default function Search(props) {
  return (
    <form className="searchbar">
      <div className="field has-addons">
        <div className="control is-expanded">
          <input
            id="search-input"
            className="input is-medium"
            type="text"
            placeholder="Search for Inspiration"
          />
        </div>
        <div className="control">
          <button
            type="submit"
            id="search-btn"
            className="button is-medium search-btn fas fa-syringe"
          ></button>
        </div>
      </div>
    </form>
  );
}
