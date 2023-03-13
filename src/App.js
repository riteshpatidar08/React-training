import "./App.css";
import Comp1 from "./components/Comp1";
import CompEvents from "./components/CompEvents/CompEvents";
import Header from "./components/Header";
import Counter from "./components/Counter/Counter";
import Hooks1 from "./components/hooks/Hooks1";
function App() {
  const dummyData = [
    {
      name: "Rudresh",
      lname: "oza",
      designation: "developer",
    },
    {
      name: "Rahul",
      lname: "Sharma",
      designation: "designer",
    },
    {
      name: "Rajesh",
      lname: "Rao",
      designation: "BA",
    },
    {
      name: "Samiksha",
      lname: "Sharma",
      designation: "DevOps",
    },
    {
      name: "Rahul",
      lname: "Sharma",
      designation: "Data bricks",
    },
  ];
  return (
    <div className="App">
      {/* <h1>Events in Reactjs</h1>
      <Header /> */}
      {/* {!dummyData && <p>NO data available</p>}
      {dummyData &&
        dummyData.map((ele, i) => (
          <Comp1 name={ele.name} lname={ele.lname} desig={ele.designation} />
        ))} */}
      {/* <CompEvents /> */}
      {/* <Counter /> */}
      <Hooks1 />
    </div>
  );
}

export default App;
