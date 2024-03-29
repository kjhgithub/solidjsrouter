import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import "./app.css";
const root = document.getElementById("root");
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import NotFound from "./pages/404";

function App() {
  return (
    <>
      <Header />
      <Route path="/" component={Home} />
      <Route path="/impressum" component={Impressum} />
      <Route path="*404" component={NotFound} />
      <Footer />
    </>
  );
}

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  root
);
