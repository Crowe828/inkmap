import API from "../../Utils/API";
import Whiteblot from "./Images/whiteblot.png";
import "./style.css";

export default function Main() {
  
  return (
    <div className="brick">
      <header className="logo">
        <img className="blot2" src={Whiteblot} alt="ink blot" />
        <a href="https://fontmeme.com/fonts/tattoo-ink-font/">
          <img
            src="https://fontmeme.com/permalink/200928/31d78e111c03d6f7ca31b4ea87a9a578.png"
            alt="tattoo-ink-font"
          />
        </a>
        <a href="https://fontmeme.com/fonts/slim-sans-serif-font/">
          <img
            src="https://fontmeme.com/permalink/200928/d544046b030a1407b8b0f937bec183ed.png"
            alt="slim-sans-serif-font"
          />
        </a>
      </header>

      <main className="container main-container">
        <div className="searchCard">
          <h2 className="spray">
            Welcome, type in the idea of your tattoo and click submit. <br />
            We'll provide you with creative images and the nearest tattoo artist
            near you!
          </h2>
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
        </div>

        <div className="google-maps">
          <div id="panel"></div>

          <div id="map"></div>
        </div>
      </main>

      <footer className="toe">
        <h4 className="copyR">Inkmap | The Wombats &copy;</h4>
      </footer>
    </div>
  );
}
