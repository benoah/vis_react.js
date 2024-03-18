import { DataSet } from "vis-data";

export const edges = new DataSet([
  {
    from: 0,
    to: 1,
    color: {
      color: "#ff0000",
      highlight: "#ff0000",
      hover: "#ff0000",
    },
  },
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 2, to: 4 },
  { from: 2, to: 5 },
  { from: 2, to: 6 },
  { from: 2, to: 7 },
  {
    from: 2,
    to: 3,
    color: {
      color: "#ff0000",
      highlight: "#ff0000",
      hover: "#ff0000",
    },
  },
  {
    from: 3,
    to: 5,
    color: {
      color: "#ff0000",
      highlight: "#ff0000",
      hover: "#ff0000",
    },
  },
]);
