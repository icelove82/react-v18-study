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

export function Card({ children }) {
  return (
    <div className="card">
      <div className="card-content">{children}</div>
    </div>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile {...profiles[0]} size={90} />
      <Profile {...profiles[1]} size={90} />

      <br />

      <Card>
        <h1>Photo</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>
      <Card>
        <h1>About</h1>
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
          natural treatment to schistosomiasis.
        </p>
      </Card>
    </div>
  );
}
