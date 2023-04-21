import "./App.css";
import InfrastructureCmp from "./Body/infrastructure";
import MaterialCmp from "./Body/material";
import MotivesCmp from "./Body/motives";
import ServicesSolutionCmp from "./Body/servicesSolution";
import FooterTopCmp from "./Footer/footer";
import NavbarCmp from "./HomePage/navbar";

function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: "#f8f8f8" }}>
        <NavbarCmp />
        <MotivesCmp />
        <InfrastructureCmp />
      </div>
      <ServicesSolutionCmp />
      <MaterialCmp />
      <FooterTopCmp />
    </div>
  );
}

export default App;
