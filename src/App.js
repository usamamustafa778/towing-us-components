import "./App.css";
import Nav from "./Components/Nav/Nav";

const servicesData = [
  {
    name: "Fuel Delivery",
    route: "/fuel-delivery",
  },
  {
    name: "Road Side Assistance",
    route: "/road-side-assistance",
  },
  {
    name: "Towing",
    route: "/towing",
  },
];

function App() {
  return (
    <div className="App">
      <Nav services={servicesData} />
    </div>
  );
}

export default App;
