import React from "react";
//components
import QRCode from "./images/JPMC_QR_Code.png";
import CodeSandbox from "./components/CodeSandbox";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AdditionalResources from "./components/AdditionalResources";

//images
import SearchHero from "./images/SearchHero.png";
import SearchIcon from "./images/SearchIcon.png";
import Compass from "./images/Compass.png";
import Mflix from "./images/Mflix.png";
import AWS from "./images/AWS.png";
import Accenture from "./images/accenture.png";

function App() {
  return (
    <div h-screen bg-white>
      <Header />
      <div className="flex flex-col px-20 pt-10">
        <div className="flex items-center">
          <div className="flex flex-col">
            <div className="flex items-center justify-around">
              <div className="flex items-center mx-auto justify-between">
                <img src={SearchIcon} alt="search hero" className="mx-2 w-24" />
                <div className="font-noto text-center text-3xl">
                  Atlas Search: To Find it Fast, Look No Further
                </div>
              </div>

              <div className="flex">
                <div className="w-24 p-2">
                  <img
                    src={AWS}
                    alt="AWS Logo"
                    className="mx-auto items-center w-full "
                  />
                </div>
                <div className="ml-10 w-36 p-2">
                  <img
                    src={Accenture}
                    alt="Accenture Logo"
                    className="mx-auto items-center w-full "
                  />
                </div>
              </div>
            </div>

            <div className="flex">
              <img src={SearchHero} alt="search hero" className="mx-6 w-64" />
              <div className=" mx-4 flow-root text-lg mt-4">
                With Atlas Search, we have made it even easier to work with data
                by allowing you to build powerful, flexible, and sophisticated
                search capabilities into your MongoDB applications!
                <br></br> <br></br>In this workshop, we will build out our very
                own Netflix Clone using the{" "}
                <a
                  className="underline decoration-indigo-500"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.mongodb.com/docs/atlas/sample-data/sample-mflix/"
                >
                  sample_mflix
                </a>{" "}
                database in the Atlas sample dataset. We will quickly construct
                and combine varied search parameters while implementing
                fuzzy-matching, autocomplete, highlighting and many other search
                features. Along the way, we'll also go deep on Lucene analyzers
                and indexes.
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center mx-20 justify-evenly">
          <div className="mx-4 mt-10 w-1/2 text-lg">
            <div>
              The following hardware and installations are required to complete
              this workshop:
            </div>
            <div className="flex">
              <img
                src={Compass}
                alt="Compass"
                className="mx-auto items-center w-20 h-20 my-auto "
              />{" "}
              <ul className="ml-10 mt-4">
                1. local computer with internet connection and a modern browser
                <br></br>
                2.{" "}
                <a
                  className="underline decoration-indigo-500"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://docs.google.com/document/d/1NeSouAhnQg9kYW272uDcLMVRmnFy1G8Vfh_wnJLHmYg/edit?usp=sharing"
                >
                  Google Doc: Atlas Search Tutorial
                </a>
                <br></br>
                3.{" "}
                <a
                  className="underline decoration-indigo-500"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://cloud.mongodb.com"
                >
                  MongoDB Atlas account and free cluster
                </a>
                <br></br>
                4.{" "}
                <a
                  className="underline decoration-indigo-500"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.mongodb.com/try/download/compass?tck=docs_compass"
                >
                  MongoDB Compass (Optional)
                </a>
                <br></br>
                5. The frontend application below is hosted on GitHub and
                CodeSandox.io and sits ready for you to fork.
              </ul>
            </div>
          </div>
          <div className="w-1/3 text-center">
            <a
              className="font-noto text-center text-3xl text-forestgreen"
              target="_blank"
              rel="noopener noreferrer"
              href="https://netflixclone-xwaaq.mongodbstitch.com"
            >
              www.atlassearchmovies.com
            </a>
            <img
              src={Mflix}
              alt="App"
              className="mx-auto items-center shadow-xl rounded-xl w-full mt-4"
            />
          </div>
          <div className="ml-10 w-36 p-1 rounded-full border-2 border-springgreen">
            <img
              src={QRCode}
              alt="QRCode"
              className="mx-auto items-center w-full "
            />
          </div>
        </div>
      </div>
      <CodeSandbox />

      <Footer />
      <AdditionalResources />
    </div>
  );
}

export default App;
