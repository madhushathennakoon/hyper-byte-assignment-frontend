import React, { useEffect, useState } from "react";
import axios from "axios";
import RestaurantDetails from "../components/restaurantDetails/RestaurantDetails";

const Home = () => {
  const [restaurants, setRestaurants] = useState();

  useEffect(() => {
    const fetchRestaurant = async () => {
      const response = await axios.get(
        "http://localhost:4000/api/restaurant/getall"
      );
      const data = response.data;

      console.log(data);

      if ((response.status = 200)) {
        setRestaurants(data);
      }
    };

    fetchRestaurant();
  }, []);
  return (
    <div className="mt-16 ml-20 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 ">
      {restaurants &&
        restaurants.map((restaurant) => (
          <RestaurantDetails key={restaurant._id} restaurantInfo={restaurant} />
        ))}
    </div>
  );
};

export default Home;
