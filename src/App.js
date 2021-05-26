import "./App.css";
import Story from "./components/Story";

function App() {
  return (
    <div className="container">
      <h1>Hacker News</h1>
      <div className="story-container">
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
    </div>
  );
}

export default App;
