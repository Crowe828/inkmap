import "./style.css";

export default function UnsplashImages(props) {
return (
    <div>
        {props.results.map((result) => (
            <img src={result.urls.regular} alt={result.alt_description} key={result.id} />
        ))}
    </div>
)
}