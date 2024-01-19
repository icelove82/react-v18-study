import "./App.css";

import { getImageUrl } from "./utils.js";
import profiles from "./data.js";

export function Profile(props) {
  return (
    <section className="profile">
      <h2>{props.name}</h2>
      <img
        className="avatar"
        src={getImageUrl(props.imgId)}
        alt={props.name}
        width={props.size}
        height={props.size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {props.pro}
        </li>
        <li>
          <b>Awards: {props.awd.length} </b>({props.awd.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {props.dsv}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile {...profiles[0]} size={90} />
      <Profile {...profiles[1]} size={90} />
    </div>
  );
}
