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
import AdditionalResouces from "./components/AdditionalResouces";

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
        <div className="w-1/4">{/* <Promotion /> */}</div>
      </div>

      <CodeSandbox appLink="https://codesandbox.io/embed/github/khuaulme/AtlasSearchWorkshop2022/tree/main/?fontsize=14&hidenavigation=1&theme=dark" />
      <div className="flex px-20 items-center"></div>

      <AdditionalResouces />
      <Footer />
    </div>
  );
}

export default App;
