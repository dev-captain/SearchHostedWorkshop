import React from "react";
import SearchHero from "./images/SearchHero.png";
import IndexImage from "./images/indexImage.svg";
import Karen from "./images/Karen1.png";
import SearchIcon from "./images/SearchIcon.png";
import LOGO from "./images/Logomark.svg";
import Twitter from "./images/Twitterblue.png";

function App() {
  return (
    <div h-screen bg-white>
      <div className="flex w-full justify-between items-center bg-slateblue text-white">
        <div className="flex text-2xl mx-20 ">
          <img className="mr-10 my-auto h-16" src={LOGO} alt="logo" />
          <div className="my-auto">Atlas Search Workshop</div>
        </div>
        <div className="flex text-2xl mx-20 "> 5 Avril 2022</div>
      </div>

      <div className="flex flex-col px-40 pt-10">
        <div className="flex items-center">
          <img src={SearchHero} alt="search hero" className="mx-6 w-48" />
          <div className=" mx-4 flow-root text-xl">
            Avec Atlas Search, nous avons rendu le travail avec les données
            encore plus facile en vous permettant de construire des capacités de
            recherche puissantes, flexibles et sophistiquées dans vos
            applications MongoDB !
          </div>
        </div>
        <div className="flex items-center">
          <div className=" mx-4 mt-10 w-3/4 text-xl">
            <div>
              The following hardware and installations are required to complete
              this workshop:
            </div>
            <br></br>
            <div>
              1. local computer with internet connection and a modern browser.
            </div>
            <br></br>
            <div>
              2.{" "}
              <a
                className="underline decoration-indigo-500"
                target="_blank"
                rel="noopener noreferrer"
                href="https://cloud.mongodb.com"
              >
                MongoDB Atlas Account and free cluster
              </a>
            </div>
            <br></br>
            <div>
              3.{" "}
              <a
                className="underline decoration-indigo-500"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.mongodb.com/try/download/compass?tck=docs_compass"
              >
                MongoDB Compass
              </a>
            </div>
            <br></br>
            <div>
              4. The frontend application below hosted on GitHub and
              CodeSandox.io sits ready for you to fork.
            </div>
          </div>
          <img src={SearchIcon} alt="search hero" className="mx-6 w-36" />
        </div>
      </div>

      <div className="h-full w-100">
        <iframe
          src="https://codesandbox.io/embed/festive-platform-gshdc3?fontsize=14&hidenavigation=1&theme=dark"
          className="mt-20 w-11/12 mx-auto h-96"
          title="festive-platform-gshdc3"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </div>

      <div className="flex mt-10 text-black px-12 text-lg pb-2">
        <img src={Karen} alt="search hero" className="mx-6 w-36 rounded-full" />
        <div className="flex flex-col pt-12">
          <div className="mt-6">
            Karen Huaulmé<br></br>Principal Developer Advocate
          </div>
          <div className="flex">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/youoldmaid"
            >
              {" "}
              <img
                src={Twitter}
                alt="twitter"
                className="w-12 object-contain"
              />
            </a>
            <div className="my-auto ml-2">@YouOldMaid</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
