import Compass from "../images/Compass.png";

const Instructions = () => {
  return (
    <div className="mx-4 mt-10 w-1/2 text-lg">
      <div>
        The following hardware and installations are required to complete this
        workshop:
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
  );
};

export default Instructions;
