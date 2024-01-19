import "./App.css";

import { getImageUrl } from "./util.js";

const profiles = [
  {
    name: "Maria Skłodowska-Curie",
    imgId: "szV5sdG",
    pro: "physicist and chemist",
    awd: [
      "Nobel Prize in Physics",
      "Nobel Prize in Chemistry",
      "Davy Medal",
      "Matteucci Medal",
    ],
    dsv: "polonium (chemical element)",
  },
  {
    name: "Katsuko Saruhashi",
    imgId: "YfeOqp2",
    pro: "physicist and chemist",
    awd: ["Miyake Prize for geochemistry", "Tanaka Prize"],
    dsv: "a method for measuring carbon dioxide in seawater",
  },
];

function getAwdStr(awd) {
  let awdStr = "";

  awd.forEach((it, idx) => {
    if (idx === 0) {
      awdStr += it;
    } else {
      awdStr += ", " + it;
    }
    return awdStr;
  });
}
export function Profile(props) {
  return (
    <section className="profile">
      <h2>props.name</h2>
      <img
        className="avatar"
        src={getImageUrl(props.imgId)}
        alt="props.name"
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {props.pro}
        </li>
        <li>
          <b>Awards: {props.awd.length} </b>({getAwdStr(props.awd)})
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
      <Profile {...profiles[0]} />
      <Profile {...profiles[1]} />
    </div>
  );
}
