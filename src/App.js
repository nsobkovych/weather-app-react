import Weather from "./Weather";
import Footer from "./Footer";
import "./App.css";
// import "./main.css";

function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather city="London,uk" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
