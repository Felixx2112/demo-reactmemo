import React, { useCallback, useState } from "react";
import ChildComponent from "./components/ChildComponent";

function App({ viewCount }) {
  // const [count, setCount] = useState(0);
  const [name, setName] = useState("Dav");

  // tao 1 function moi de chua count de ngan chan re-render lam anh huong toi cac component khac
  // function Counter() {
  //   const [count, setCount] = useState(0);
  //   return (
  //     <>
  //       <p>outer count: {count}</p>
  //       <div>
  //         <p>Count: {count}</p>
  //         <button onClick={() => setCount(count + 1)}>+</button>
  //       </div>
  //     </>
  //   );
  // }

  //  cung tuong tu ngan re-render bang cach tao ra mot component moi
  function NewComponent({ children }) {
    const [count, setCount] = useState(0);

    return (
      <>
        <p>outer count: {count}</p>
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>+</button>
          {children}
        </div>
      </>
    );
  }

  const getUsers = useCallback(() => {
    return fetch("http://reqres.in/api/users");
  }, []);
  return (
    <>
      {/* <p>outer count: {count}</p>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div> */}
      {/* <Counter /> */}

      {/* <ChildComponent name={name} getUsers={getUsers} /> */}
      <NewComponent>
        <ChildComponent name={name} getUsers={getUsers} />
      </NewComponent>
    </>
  );
}

export default App;
