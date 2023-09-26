import Footer from "./components/Footer";
import Header from "./components/Header";
import MainSection01 from "./components/MainSection01";
import MainSection02 from "./components/MainSection02";
import MainSection03 from "./components/MainSection03";
import MainSection04 from "./components/MainSection04";
import MainSlider from "./components/MainSlider";

function App() {
  return (
    <>
      <Header />
      <main className="">
        <MainSlider />
        <MainSection01 />
        <MainSection02 />
        <MainSection03 />
        <MainSection04 />
      </main>
      <Footer />
    </>
  );
}

export default App;
