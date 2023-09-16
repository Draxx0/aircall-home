import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
