import "./App.css";
import Features from "./Components/features";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Layout from "./Components/Layout";
import Navbar from "./Components/Navbar";
import Prebuilt from "./Components/Prebuilt";
import Project from "./Components/Project";

function App() {

  return (
    <>
      <div className="container">

        <Navbar />
        <Header />
        <Features />
        <Layout />
        <Project />
        <Prebuilt />
        <Footer />

      </div>

    </>
  )
}


export default App;