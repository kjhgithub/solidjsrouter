import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { HashRouter, Route } from "@solidjs/router";
import "./app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/404";
const Impressum = lazy(() => import("./pages/Impressum"));

function App(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

render(
  () => (
    <HashRouter root={App}>
      <Route path="/impressum" component={Impressum} />
      <Route path="*404" component={NotFound} />
      <Route path="/" component={Home} />
    </HashRouter>
  ),
  document.getElementById("App")
);
