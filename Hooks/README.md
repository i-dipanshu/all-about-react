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
# useEffect
- It is a React hook that runs every time a component renders.
- It takes function and a dependencies list as an argument
- The function which returns something will act like `componentWillDestroy`, It is also called cleanup function.
- Dependencies list determines when to call the useEffect 
  - If it is empty then useEffect will run every time the component renders
  - But we provide it with a state, then it runs only when the state changes

```javascript
 /* The function passed to useEffect will run every time after the render is committed to the screen. */
  useEffect(() => {
    (document.title = `Chats (${count})`);
  });

  /* but if pass dependencies list as an second argument we can control the call of useEffect
   it will only be executed when the state of count changes */
  useEffect(() => {
    document.title = `Chats${count}`; 
  }, [count])

```
- Cleanup function
  - Helps in getting memory free with continous useEffect function stack
  - Below reprensts an example of removing the method from the stack after it is rendered
```javascript
const [width, setWidth] = useState(window.innerWidth);

  const getWidth = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", getWidth);

    // runs after the component is rendered
    return () => {
      window.removeEventListener("resize", getWidth);
    };
  }, [width]);

```