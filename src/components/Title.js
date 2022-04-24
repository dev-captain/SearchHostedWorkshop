import SearchIcon from "../images/SearchIcon.png";

const Title = () => {
  return (
    <div className="flex items-center mx-auto">
      <img src={SearchIcon} alt="search hero" className="mx-2 w-24" />
      <div className="font-noto text-center text-3xl">
        Atlas Search: To Find it Fast, Look No Further
      </div>
    </div>
  );
};

export default Title;
