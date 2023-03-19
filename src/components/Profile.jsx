import React from "react";
import Feed from "./Feed";
import RightBar from "./RightBar";

const Profile = () => {
  return (
    <div className=" col-span-9 h-[calc(100vh-56px)] w-full overflow-y-scroll">
      <div className="flex flex-col items-center m-3">
        <div className=" w-full h-60">
          <img
            src="https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/331913513_748386013566373_8683688952064742324_n.jpg?stp=dst-jpg_s960x960&_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=MPPrb7yTlHQAX9DFnvZ&_nc_ht=scontent-sin6-1.xx&oh=00_AfB_R2puLttVrsUETHmx6sfAtDcbgEzaom-ZYF3ZXsdMKw&oe=641B49D6"
            className=" w-full h-60 object-cover"
            alt=""
          />
        </div>
        <div className="  overflow-hidden mt-[-70px]">
          <img
            src="https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/335040885_3039189736377925_4833158108769635834_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=aAFBpxrmyMwAX_MBNFZ&_nc_ht=scontent-sin6-3.xx&oh=00_AfC1sSrXZSicLrzhYEYD6Avm616jJIteENDxIiavBIfo_w&oe=641B7DB7"
            className="w-36 h-36 border-4 border-white rounded-full object-center"
            alt=""
          />
        </div>
        <h1 className=" font-bold my-2 text-lg">Kyaw Kyaw</h1>
        <p className=" tracking-wider ">
          Silence is better than unmeaning words
          
        </p>
      </div>
      <div className=" grid grid-cols-3 mt-8">
        <Feed />
        <RightBar />
      </div>
    </div>
  );
};

export default Profile;
