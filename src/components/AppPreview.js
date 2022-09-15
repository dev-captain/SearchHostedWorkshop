import Mflix from "../images/Mflix.png";

const AppPreview = () => {
  return (
    <div className="w-1/3 text-center">
      <a
        className="font-noto text-center text-3xl text-forestgreen"
        target="_blank"
        rel="noopener noreferrer"
        href="https://atlassearchmovies-rsyxh.mongodbstitch.com/"
      >
        www.atlassearchmovies.com
      </a>
      <img
        src={Mflix}
        alt="App"
        className="mx-auto items-center shadow-xl rounded-xl w-full mt-4"
      />
    </div>
  );
};

export default AppPreview;
