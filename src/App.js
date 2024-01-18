import Header from "./components/Header";
import Questions from "./components/Questions";
import Footer from "./components/Footer";
import OutlineText from "./components/OutlineText";
import ScrollingOutlineText from "./components/ScrollingOutlineText";
import Logo from "./components/Logo";
import Reward from "./components/Reward";
import Poem from "./components/Poem";
import Rules from "./components/Rules";
import Committee from "./components/Committee";
import Introduction from "./components/Introduction";
import KonoRano from "./components/KonoRano";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="contentContainer">
        <ScrollingOutlineText />
        <Poem />
        <Logo />
        <OutlineText content="Ranobe Giveaway Booster" />

        <Introduction />
        <Committee />
        <Rules />
        <OutlineText content="TheMeoki & NaviRanobe" />
        <Reward />
        <OutlineText content="Ranobe Giveaway Booster" />
        <KonoRano />
        <Questions />
        <Footer />
      </div>
    </div>
  );
}

export default App;
