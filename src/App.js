import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Sopot" />
      <footer>
        This project was coded by{" "}
        <a href="https://www.linkedin.com/in/celinatoloczko/">
          Celina Toloczko-Mastalerz
        </a>{" "}
        and is open-sourced on{" "}
        <a href="https://github.com/ctoloczko/react-weather-app-v2">GitHub</a>{" "}
        and hosted on <a href="https://skypix.netlify.app/">Netlify</a> .{" "}
      </footer>
    </div>
  );
}
