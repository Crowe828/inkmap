import "./style.css";

export default function Foursquare(props) {
  
  return (
    <div>
      <ul className="foursquare">
        {props.response.map((places) => (
          <li className="places" key={places.referralId}>
            {places.venue.name}
            {places.venue.location.address}
          </li>
        ))}
      </ul>
    </div>
  );
}
