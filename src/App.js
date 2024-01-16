import Header from "./components/Header";
import Questions from "./components/Questions";
import Footer from "./components/Footer";
import OutlineText from "./components/OutlineText";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="contentContainer">
        <OutlineText content="Ranobe Giveaway Booster" />
        <Questions />
        <Footer />
      </div>
    </div>
  );
}

export default App;
