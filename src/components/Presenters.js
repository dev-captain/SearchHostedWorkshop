import Presenter from "./Presenter";
import Karen from "../images/KWH14.png";
import Idriss from "../images/Idriss.jpeg";
import Snehal from "../images/Snehal.jpeg";

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
        bio_pic={Snehal}
        name="Snehal Bhatia"
        title="Solutions Architect"
        twitter_handle="@SnehalBhatia8"
      />
    </div>
  );
};

export default Presenters;
