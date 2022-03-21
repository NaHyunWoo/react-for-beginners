import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => { // 코드가 딱 한번만 실행될 수 있도록 보호해준다.
    console.log("I run only once");
  }, []);
  useEffect(() => {
    if(keyword != "" && keyword.length > 5) { // 조건을주면 처음 render할때도 실행되지않는다.
      console.log("I run when 'keyword' changes.");  
    }
  }, [keyword]);  // keyword가 변화할 때 코드를 실행할거라고 react.js에게 알려주는 것
  useEffect(() => {
    console.log("I run when 'counter' changes.");  
  }, [counter]);  // counter 변화할 때 코드를 실행할거라고 react.js에게 알려주는 것  
  useEffect(() => {
    console.log("I run when 'keyword' & 'counter' changes.");  
  }, [keyword, counter]);  // keyword, counter 변화할 때 코드를 실행할거라고 react.js에게 알려주는 것
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
