import React from "react";
import { Link } from "react-router-dom";

const RestaurantDetails = ({ restaurantInfo }) => {
  return (
    <div className="">
      <div className="flex justify-between  border-2 w-[500px] h-[200px] rounded-lg p-5 uppercase ">
        <p className="text-3xl flex items-center ">{restaurantInfo.name}</p>
        <div className="flex justify-center items-center">
          <Link to={`/single/${restaurantInfo._id}`}>
            <button className="bg-orange-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-sm ">
              Readmore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
