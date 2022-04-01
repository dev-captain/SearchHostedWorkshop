import React from "react";
import SearchHero from "./images/SearchHero.png";
import QRCode from "./images/QRCode.png";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchIcon from "./images/SearchIcon.png";
import Compass from "./images/Compass.png";
import Mflix from "./images/Mflix.png";

function App() {
  return (
    <div h-screen bg-white>
      <Header />
      <div className="flex flex-col px-20 pt-10">
        <div className="flex items-center">
          <div className="flex flex-col">
            <div className="flex items-center mx-auto justify-between">
              <img src={SearchIcon} alt="search hero" className="mx-2 w-24" />
              <div className="font-noto text-center text-3xl">
                Tutoriel: Premiers Pas avec MongoDB Atlas Search
              </div>
              <div className="ml-40 w-36 p-4 border-2 border-springgreen">
                <img
                  src={QRCode}
                  alt="QRCode"
                  className="mx-auto items-center w-full "
                />
              </div>
            </div>
            <div className="flex">
              <img src={SearchHero} alt="search hero" className="mx-6 w-64" />
              <div className=" mx-4 flow-root text-lg mt-10">
                Avec Atlas Search, nous avons rendu le travail avec les données
                encore plus facile en vous permettant de construire des
                capacités de recherche puissantes, flexibles et sophistiquées
                dans vos applications MongoDB! <br></br> <br></br>Au cours de
                cet atelier, nous allons créer notre propre clone de Netflix en
                utilisant la base de données{" "}
                <a
                  className="underline decoration-indigo-500"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.mongodb.com/docs/atlas/sample-data/sample-mflix/"
                >
                  sample_mflix
                </a>{" "}
                disponible dans le sample dataset que propose Atlas. Nous allons
                construire et combiner rapidement des paramètres de recherche
                variés tout en implémentant le fuzzy-matching, l’autocompletion,
                le highlighting et de nombreuses autres fonctionnalités de
                recherche. En cours de route, nous approfondirons également les
                analyseurs et les index de Lucene.
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center mx-20 justify-evenly">
          <div className="mx-4 mt-10 w-1/2 text-lg">
            <div>
              Le matériel et les installations suivants sont nécessaires pour
              suivre cet atelier :
            </div>
            <div className="flex">
              <img
                src={Compass}
                alt="Compass"
                className="mx-auto items-center w-20 h-20 my-auto "
              />{" "}
              <ul className="ml-10 mt-4">
                1. Un ordinateur avec une connexion Internet et un navigateur
                moderne.
                <br></br>
                2.{" "}
                <a
                  className="underline decoration-indigo-500"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://cloud.mongodb.com"
                >
                  Compte Atlas MongoDB et cluster gratuit
                </a>
                <br></br>
                3.{" "}
                <a
                  className="underline decoration-indigo-500"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.mongodb.com/try/download/compass?tck=docs_compass"
                >
                  MongoDB Compass
                </a>
                <br></br>
                4. L’application frontend ci-dessous est hébergée sur GitHub et
                CodeSandox.io et est prête à être utilisée.
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
        </div>
      </div>

      <div className="h-full w-100">
        <iframe
          src="https://codesandbox.io/embed/github/khuaulme/AtlasSearchWorkshop2022/tree/main/?fontsize=14&hidenavigation=1&theme=dark"
          className="mt-10 w-11/12 mx-auto h-96"
          title="festive-platform-gshdc3"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default App;
