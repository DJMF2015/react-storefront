import "./App.css";
import WebStore from "./WebStore";

export default function App() {
  return (
    <>
      <div className="app_header" />
      <div>
        <WebStore />
        <footer className="footer">
          &copy; {new Date().getFullYear()} Sky Web Store
        </footer>
      </div>
    </>
  );
}
