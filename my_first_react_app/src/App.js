import { useEffect, useState } from "react";
import { Table } from "./components/Table";
import {Signup} from "./components/Signup";
import  Heading1  from "./components/Heading1";
import { Heading } from "./components/Heading";

function App() {
  const nName = "Kabebe"
  const [data, setData] = useState('');
  const [parag, setParag] = useState(null);
  const [number, setNumber] = useState(0);
  useEffect(()=>{
    console.log(number);
  }, [number]);
const testClick = ()=> {
  setData("button clicked");
  setNumber(number +2);
}
  return (
    <div className="App">
      <Heading1 name="Bugingo" nickName="Maurice"/>
      <Heading1 name="Bartazar" nickName={nName}/>
      <Signup className="react-Signup hh3"/>
      {/* <Heading className="reat-heading"/>
      <Heading className="reat-heading2"/> */}
      <Heading/>
      <Table setParag={setParag}/>
      {parag && <p>{parag}</p>}
      <p>{data}</p>
      <p>The number is {number}</p>
      <button onClick={testClick}>Click me</button>
    </div>
  );
}

export default App
