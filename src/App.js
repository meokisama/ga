import Header from "./components/Header";
import Questions from "./components/Questions";
import Footer from "./components/Footer";
import OutlineText from "./components/OutlineText";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="contentContainer">
        <OutlineText content="Ranobe Giveaway Booster" />
        <Logo />
        <Questions />
        <Footer />
      </div>
    </div>
  );
}

export default App;
