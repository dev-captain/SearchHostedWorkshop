import Presenter from "./Presenter";
import Karen from "../images/KWH14.png";

const Presenters = () => {
  return (
    <div className="flex w-full items-center text-black px-12">
      <Presenter
        bio_pic={Karen}
        name="Karen Huaulmé"
        title="Principal Developer Advocate"
        twitter_handle="@YouOldMaid"
      />
    </div>
  );
};

export default Presenters;
