import "./style.css";

export default function UnsplashImages(props) {
  return (
    <div>
      <div className="columns is-multiline">
        {props.results.map((result) => (
          <div className="column is-one-quarter" key={result.id}>
            <img className="unsplash" src={result.urls.small} alt={result.alt_description} />
          </div>
        ))}
      </div>
    </div>
  );
}
