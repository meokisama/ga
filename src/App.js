import Header from "./components/Header";
import Questions from "./components/Questions";
import Footer from "./components/Footer";
import OutlineText from "./components/OutlineText";
import Logo from "./components/Logo";
import Reward from "./components/Reward";
import Poem from "./components/Poem";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="contentContainer">
        <OutlineText content="Ranobe Giveaway Booster" />
        <Poem />
        <Logo />
        <Reward />
        <Questions />
        <Footer />
      </div>
    </div>
  );
}

export default App;
