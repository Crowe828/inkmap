import "./style.css";
import Whiteblot from "./Images/whiteblot.png"

export default function Splash() {
  return (
    <div>
      <div className="hero-image">
        <div className="container">
          <img
            className="whiteblot"
            src={Whiteblot}
            alt="inkblot"
          />
          <a href="https://fontmeme.com/fonts/tattoo-ink-font/">
            <img
              src="https://fontmeme.com/permalink/200927/703c0397a10b2ae4e16acb5cb6be3e9a.png"
              alt="tattoo-ink-font"
            />
          </a>
          <a href="https://fontmeme.com/sans-serif-fonts/">
            <img
              src="https://fontmeme.com/permalink/200927/dda6becbcb5255a19e5d0dc21e4ddd25.png"
              alt="sans-serif-fonts"
            />
          </a>
        </div>
        <div className="container" id="searchLink">
          <a href="search.html">
            <button className="button is-large is-fullwidth is-light is-rounded">
              Find Your Inspiration
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
