import Presenter from "./Presenter";
import Karen from "../images/KWH14.png";
import Idriss from "../images/Idriss.jpeg";
import Charles from "../images/Charles.jpeg";

const Presenters = () => {
  return (
    <div className="flex w-full justify-evenly items-center text-black px-20">
      <Presenter
        bio_pic={Idriss}
        name="Idriss Ouazzani"
        title="Senior Solutions Architect"
        twitter_handle="@OuazzaniIdriss"
      />
      <Presenter
        bio_pic={Karen}
        name="Karen Huaulmé"
        title="Principal Developer Advocate"
        twitter_handle="@YouOldMaid"
      />
      <Presenter
        bio_pic={Charles}
        name="Charles Van Parys"
        title="Solutions Architect"
        twitter_handle=""
      />
    </div>
  );
};

export default Presenters;
