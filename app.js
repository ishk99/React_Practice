// const para = React.createElement(
//   "p",
//   {
//     id: "heading",
//     xyz: "abc",
//   },
//   "This is a para"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    // single child
    // in case of multiple children -- create an array of children
    [
      React.createElement("h1", {}, "I am h1 tag"),
      React.createElement("h2", {}, "I am h2 tag"),
    ]
  )
);
root.render(parent);

// <div id="parent">
//   <div id="child">
//     <h1></h1>
//   </div>
// </div>;
