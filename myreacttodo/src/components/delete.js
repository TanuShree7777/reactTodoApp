import { useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState([]);
  let data = [{ id: 10 }, { id: 20 }, { id: 30 }, { id: 40 }, { id: 50 }];

  const handleCheck = (id) => {
    if (state.includes(id)) {
      let x = [...state];
      const indexOf = x.indexOf(id);
      x.splice(indexOf, 1);
      setState(x);
    } else {
      setState([...state, id]);
    }
  };

  console.log(state);

  return (
    <div className="App">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              backgroundColor: state.includes(item.id) ? "red" : "green",
            }}
          >
            <input type="checkbox" onChange={() => handleCheck(item.id)} />
            <p>id: {item.id}</p>
          </div>
        );
      })}
    </div>
  );
}
