import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditRestaurant = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleRestaurantInfo = async () => {
      const response = await axios.get(
        `http://localhost:4000/api/restaurant/${id}`
      );
      const data = response.data;
      console.log(data);

      if ((response.status = 200)) {
        setName(data.name);
        setAddress(data.address);
        setTelephone(data.telephone);
      }
    };

    fetchSingleRestaurantInfo();
  }, []);

  const handleUpdate = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:4000/api/restaurant/${id}`,
        {
          name,
          address,
          telephone,
        }
      );
      console.log(response);
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleUpdate} className="max-w-md mx-auto my-16 ">
      <div className="relative z-0 w-full mb-5 group">
        <h3 className="text-3xl mb-10 font-bold leading-7 text-gray-900 ">
          Edit Restaurant Information
        </h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" py-2.5 px-0 w-full  text-lg text-green-900 bg-transparent border-0 border-b-2 dark:border-gray-600 focus:outline-none "
          placeholder="Restaurant name "
          autoFocus={true}
        />
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className=" py-2.5 px-0 w-full text-lg text-green-900 bg-transparent border-0 border-b-2 dark:border-gray-600 focus:outline-none "
          placeholder="Address "
        />
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="number"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          className=" py-2.5 px-0 w-full text-lg text-green-900 bg-transparent border-0 border-b-2 dark:border-gray-600 focus:outline-none "
          placeholder="Telephone "
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Update
      </button>
    </form>
  );
};

export default EditRestaurant;
