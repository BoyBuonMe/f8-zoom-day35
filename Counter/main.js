function Counter() {
  const [state, setState] = React.useState(0);
  return <>
    <h1>Counter App</h1>
    <h2>{state}</h2>
    <button className="decrease btn" onClick={() => setState(state - 1)}>-</button>
    <button className="reload btn" onClick={() => setState(0)}><i className="fa-solid fa-rotate-right"></i></button>
    <button className="increase btn" onClick={() => setState(state + 1)}>+</button>
  </>;
}

const inner = (
  <>
    <Counter />
  </>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(inner);
