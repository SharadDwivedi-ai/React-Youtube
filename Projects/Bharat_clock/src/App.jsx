import ClockBody from "./components/ClockBody";
import ClockHead from "./components/ClockHead";
import ClockSection from "./components/ClockSection";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <center>
      <ClockHead />
      <ClockSection />
      <ClockBody />
    </center>
  );
}

export default App;
