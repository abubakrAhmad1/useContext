import { useData } from "@/context/data";
import { useRef } from "react";

export default function home() {
  const { data, addUser } = useData();
  const nameRef = useRef();
  const ageRef = useRef();
  return (
    <div>
      <input type="text" placeholder="please enter name" ref={nameRef} />
      <input type="number" placeholder="please enter age" ref={ageRef}></input>
      <button
        onClick={() => {
          addUser({
            name: nameRef.current.value,
            age: ageRef.current.value,
          });
          nameRef.current.value = "";
          ageRef.current.value = "";
        }}
      >
        Add User
      </button>
      {data.length !== 0 ? (
        data.map((user) => (
          <div>
            <h1>{user.name}</h1>
            <h4>{user.age}</h4>
          </div>
        ))
      ) : (
        <h3>No Data Available</h3>
      )}
    </div>
  );
}
