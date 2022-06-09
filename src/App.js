import React from "react";
//components
import CodeSandbox from "./components/CodeSandbox";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Instructions from "./components/Instructions";
import Promotion from "./components/Promotion";
import AppPreview from "./components/AppPreview";
import Presenters from "./components/Presenters";
import Footballer from "./images/Footballer.png";

function App() {
  return (
    <div h-screen bg-white>
      <Header />
      <div className="flex px-20">
        <div className="flex flex-col pt-10">
          <Intro />
          <div className="flex items-center mt-10 justify-evenly">
            <Instructions />
            <AppPreview />
          </div>
        </div>
        <div className="w-1/4">
          <Promotion />
        </div>
      </div>

      <CodeSandbox appLink="https://codesandbox.io/embed/github/khuaulme/AtlasSearchWorkshop2022/tree/main/?fontsize=14&hidenavigation=1&theme=dark" />
      <div className="flex px-20 items-center">
        <div>
          <div className="flex text-xl px-20 text-center ">
            In May 2022, EA Sports and FIFA announced the end of their 30 year
            partnership. As a tribute to this magnificent era, together we will
            use Atlas Search to scour over the FIFA 22 dataset for the best
            players with the most impossible names to build our final FIFA dream
            team. Autocomplete, wildcard, and filters to find Ibrahimović and
            Szczęsny? No problem!
          </div>
          <div className=" flex my-6 w-1/5 p-4 border border-indigo-500 text-3xl items-center mx-auto text-center">
            <a
              className=" flex underline decoration-mongo-500 text-3xl mx-auto text-center"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mongodb-developer/atlas-search-soccer"
            >
              FIFA APPLICATION REPO
            </a>
          </div>
        </div>
        <div>
          {" "}
          <img
            src={Footballer}
            alt="player"
            className="w-full h-full object-cover "
          />
        </div>
      </div>

      <CodeSandbox appLink="https://codesandbox.io/embed/cool-microservice-iz4ugd?fontsize=14&hidenavigation=1&theme=dark" />
      <Presenters />

      <Footer />
    </div>
  );
}

export default App;
