import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const RestaurantForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const restaurant = { name, address, telephone };
      const response = await axios.post(
        "http://localhost:4000/api/restaurant/create",
        restaurant
      );

      if ((response.status = 200)) {
        setName("");
        setAddress("");
        setTelephone("");
        toast.success("restaurant has been created.");
      }
    } catch (error) {
      //   console.log(error.response.data.message.details[0].message);
      toast.error(error.response.data.message.details[0].message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-16 ">
      <div className="relative z-0 w-full mb-5 group">
        <h3 className="text-3xl mb-10 font-bold leading-7 text-gray-900 ">
          Create Restaurant
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
        Submit
      </button>
    </form>
  );
};

export default RestaurantForm;
