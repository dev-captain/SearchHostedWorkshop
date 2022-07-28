import Title from "./Title";
import SearchHero from "../images/Spot_Search.png";
import Presenters from "../components/Presenters";

const Intro = () => {
  return (
    <div className="flex mx-auto mb-8 items-center w-full">
      <img src={SearchHero} alt="search hero" className="mx-6 mt-8 w-1/4" />
      <div className="mx-auto text-center items-center justify-center w-1/2">
        <Title />
        <div className="mx-4 text-lg mt-4">
          With Atlas Search, we have made it even easier to work with data by
          allowing you to build powerful, flexible, and sophisticated search
          capabilities into your MongoDB applications!
          <br></br> <br></br>In this workshop, we will build out our very own
          Netflix Clone using the{" "}
          <a
            className="underline decoration-indigo-500"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.mongodb.com/docs/atlas/sample-data/sample-mflix/"
          >
            sample_mflix
          </a>{" "}
          database in the Atlas sample dataset. We will quickly construct and
          combine varied search parameters while implementing fuzzy-matching,
          autocomplete, highlighting and many other search features. Along the
          way, we'll also go deep on Lucene analyzers and indexes.
        </div>
      </div>
      <div className="w-1/4">
        <Presenters />
      </div>
    </div>
  );
};

export default Intro;
