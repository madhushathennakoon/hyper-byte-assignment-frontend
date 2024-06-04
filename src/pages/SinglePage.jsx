import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const SinglePage = () => {
  const [postInfo, setPostInfo] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleRestaurant = async () => {
      const response = await axios.get(
        `http://localhost:4000/api/restaurant/${id}`
      );
      const data = response.data;
      console.log(data);

      if ((response.status = 200)) {
        setPostInfo(data);
      }
    };

    fetchSingleRestaurant();
  }, []);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/restaurant/${id}`
      );
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-16 mx-64 ">
      <div className="px-4 sm:px-0 ">
        <h3 className="text-4xl font-bold leading-7 text-gray-900 ">
          Restaurant Information
        </h3>
      </div>
      <div className="mt-6 border-t-4 border-black ">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-xl mt-5 font-medium leading-6 text-gray-900">
              Restaurant name
            </dt>
            <dd className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-5">
              {postInfo.name}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-xl font-medium leading-6 text-gray-900">
              Adderess
            </dt>
            <dd className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {postInfo.address}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-xl font-medium leading-6 text-gray-900">
              Telephone
            </dt>
            <dd className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {postInfo.telephone}
            </dd>
          </div>
        </dl>
      </div>
      <button
        type="submit"
        className="text-white bg-red-500 hover:bg-red-800 mt-8 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        onClick={handleDelete}
      >
        Delete
      </button>
      <Link to={`/edit/${postInfo._id}`}>
        <button
          type="submit"
          className="text-white bg-blue-500 hover:bg-blue-800 mt-8 ml-14 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Edit
        </button>
      </Link>
    </div>
  );
};

export default SinglePage;
