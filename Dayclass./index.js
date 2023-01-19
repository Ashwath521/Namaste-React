// create a h1 element with help of react.createElement
let heading = React.createElement(
  "h1",
  {
    id: "",
  },
  "namaste-react"
);

// It showing object with some properties

// create a root path for react element where it going to render with help of react.createRoot
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// we need to render our heading inside the root path with help of render function

// create a multiple nested element with help of react
// let heading1 = React.createElement('h1', {}, 'heading1')
// let heading2 = React.createElement('h2', {}, 'heading2')
// let container = React.createElement('div', {}, [heading1, heading2])
// root.render(container)

// it render content in that root path
// root.render('hello world')

// it will through error
// root.render(<h1>steve</h1>)

// along with react element in same script we can add javascript element also
let head = document.createElement("h1");
head.innerHTML = " heading";
let headRoot = document.getElementById("head");
headRoot.appendChild(head);

// weird scenario try render javascript element with help of ReactDOM render function
// it will through error and it will not support javascript html element
// Ex:-

// let head = document.createElement('h1')
// head.innerHTML = ' heading'
// let headRoot = ReactDOM.createRoot(document.getElementById('head'))
// headRoot.render(head)
