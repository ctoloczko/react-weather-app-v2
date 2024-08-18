import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Sopot" />
      <footer>
        This project was coded by Celina Toloczko-Mastalerz and is open-sourced
        on GitHub and hosted on Netlify.{" "}
      </footer>
    </div>
  );
}
