import LinkedInLogo from "/LinkedIn_icon.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="/" target="_blank">
          <img src={LinkedInLogo} className="logo" alt="LinkedIn logo" />
        </a>
      </div>
      <h1>LinkedIn-Clone</h1>
    </>
  );
}

export default App;
