# Hooks In React
- In React, Hooks are nothing but function which allow us perform different types of functionality.
- There are various type of Hooks, like `useState`, `useRef` etc.

# Rules regarding Hooks
- Hooks should always be inside a function
- Parent Functional component must have a name in PascalCase
- Hooks must not be created inside a loop, condition or nested functions
- However, the function to change the state can be called 
- We can also use Hooks using `React.HooksName`

# useState
- `useState` is react hook (or just a function)
- It helps in change the state of variable
- It takes initialState as a argument
- It returns an array --> [`var`, `function`]
- var is our state 
- We can destructure it and use the function to the value of var by passing as argument .
```javascript
const Toggle = () => {
  // useState is function that returns an array of variable and a function
  // it takes initial state as  argument
  // we can destructure both

  // initial state
  const initialState = "Dipanshu";

  const [myName, setMyName] = useState(initialState);

  const toggle = () => {
    // this will be trigger on click of button
    // so we call the setMyName function to change our initial state
    let name = (myName) === "Dipanshu" ? "Ankur" : "Dipanshu"
    setMyName(name);
  };
  return (
    <div>
      <h1>{myName}</h1>
      <button onClick={toggle}>
        Click Me
      </button>
    </div>
  );
};
```