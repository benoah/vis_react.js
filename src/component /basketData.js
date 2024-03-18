import { DataSet } from "vis-data";
// Import images
import bullsLogo from "../image/bullslogo.png";
import jordanImage from "../image/jordan.jpeg";
import pippenImage from "../image/pippen.jpeg";
import rodmanImage from "../image/rodman.jpeg";
import harperImage from "../image/harper.jpeg";
import kukocImage from "../image/kukot.jpeg";
import manager from "../image/manager.jpeg";

export const nodes = new DataSet([
    {
      id: 0,
      label: "Chicago Bulls\n1995-96",
      level: 0,
      title:
        "Team: Chicago Bulls<br/>Season: 1995-96<br/>Record: 72-10<br/>Championship: Yes",
      color: { background: "red", border: "black" },
      font: { color: "white" },
      image: bullsLogo,
      shape: "image",
      size: 50,
    },
  
    {
      id: 1,
      label: "Phil Jackson\nCoach",
      level: 1,
      shape: "image",
      image: manager,
      size: 50,
      title:
        "<strong>Role:</strong> Coach<br/><strong>Championships:</strong> 11",
    },
    {
      id: 2,
      label: "Michael Jordan",
      level: 2,
      image: jordanImage,
      shape: "image",
      size: 40,
      title:
        "<strong>Position:</strong> Guard<br/><strong>Number:</strong> 23<br/><strong>PPG:</strong> 30.4<br/><strong>RPG:</strong> 6.6<br/><strong>APG:</strong> 4.3<br/><strong>Weight:</strong> 98kg<br/><strong>Age:</strong> 33<br/><strong>Height:</strong> 1.98m",
    },
    {
      id: 3,
      label: "Scottie Pippen",
      level: 2,
      image: pippenImage,
      shape: "image",
      size: 40,
      title:
        "<strong>Position:</strong> Forward<br/><strong>Number:</strong> 33<br/><strong>PPG:</strong> 19.4<br/><strong>RPG:</strong> 6.4<br/><strong>APG:</strong> 5.9<br/><strong>Weight:</strong> 102kg<br/><strong>Age:</strong> 35<br/><strong>Height:</strong> 2.03m",
    },
    {
      id: 4,
      label: "Dennis Rodman",
      level: 2,
      image: rodmanImage,
      shape: "image",
      size: 40,
      title:
        "<strong>Position:</strong> Forward<br/><strong>Number:</strong> 91<br/><strong>PPG:</strong> 5.5<br/><strong>RPG:</strong> 14.9<br/><strong>APG:</strong> 2.5<br/><strong>Weight:</strong> 100kg<br/><strong>Age:</strong> 36<br/><strong>Height:</strong> 1.98m",
    },
    {
      id: 5,
      label: "Ron Harper",
      level: 2,
      image: harperImage,
      shape: "image",
      size: 40,
      title:
        "<strong>Position: </strong> <br/><strong>Number:</strong> 9<br/><strong>PPG:</strong> 7.4<br/><strong>RPG:</strong> 2.7<br/><strong>APG:</strong> 2.6<br/><strong>Weight:</strong> 95kg<br/><strong>Age:</strong> 34<br/><strong>Height:</strong> 1.98m",
    },
    {
      id: 6,
      label: "Toni Kukoč",
      level: 2,
      image: kukocImage,
      shape: "image",
      size: 40,
      title: "<ul><strong>Position:</strong> Forward<br/><strong>Number:</strong> 7<br/><strong>PPG:</strong> 13.1<br/><strong>RPG:</strong> 4.0<br/><strong>APG:</strong> 3.5<br/><strong>Weight:</strong> 92kg<br/><strong>Age:</strong> 32<br/><strong>Height:</strong> 2.11m<ul>",
    },
  ]);

  export const edges = new DataSet([
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    { from: 1, to: 5 },
    { from: 1, to: 6 },
    {
      from: 2,
      to: 3,
      color: {
        color: "#ff0000", // Example: Red for the edge from node 2 to 3
        highlight: "#ff0000",
        hover: "#ff0000",
      },
    },
    {
      from: 3,
      to: 4,
      color: {
        color: "#ff0000", // Example: Blue for the edge from node 3 to 4
        highlight: "#0000ff",
        hover: "#0000ff",
      },
    },
  ]);

  