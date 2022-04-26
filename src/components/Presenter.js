import Twitter from "../images/Twitterblue.png";

const Presenter = ({ bio_pic, name, title, twitter_handle }) => {
  return (
    <div className="flex mt-10 text-white px-8 text-lg pb-2">
      <img
        src={bio_pic}
        alt="search hero"
        className="mx-6 w-36 h-48 rounded-full"
      />
      <div className="flex flex-col pt-12">
        <div className="mt-6">
          {name}
          <br></br>
          {title}
        </div>
        <div className="flex">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/youoldmaid"
          >
            {" "}
            <img src={Twitter} alt="twitter" className="w-12 object-contain" />
          </a>
          <div className="my-auto ml-2">{twitter_handle}</div>
        </div>
      </div>
    </div>
  );
};

export default Presenter;
