function Button({ title }) {
  console.log("props", title);
  return <button>{title || "Default"}</button>;
}
export default Button;

// name export
export function ButtonGetStart() {
  return <button>Get Start</button>;
}

// function Button(props) {
//   console.log("props", props);
//   return <button>{props.title || "Default"}</button>;
// }
// export default Button;

// There're 2 ways to export component
// - Name export : can be use multiple time in a file [import {component's name} from '...']
// NOTED: if you use name export, you change component's name when you import its.
// - default export : can be only in a file [import Component's name from '...' ]
