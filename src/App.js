import "./App.css";
import SwipeButtons from "./components/SwipeButtons";
import Header from "./Header";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* TinderCards */}
      <TinderCards />

      {/* SwipeButton */}
      <SwipeButtons />
    </div>
  );
}

export default App;
