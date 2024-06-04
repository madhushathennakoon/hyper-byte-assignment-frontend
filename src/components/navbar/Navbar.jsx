import React from "react";

const Navlinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Create New Restaurant ",
    link: "/create",
  },
  {
    id: 3,
    name: "Contact",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="bg-white shadow-md">
        <div className="container flex justify-between py-4 sm:py-3 ">
          {/* Logo section */}
          <div className="font-bold text-3xl ">Restaurant Service </div>
          {/* Navlinks section */}
          <div>
            <ul className="flex items-center gap-10">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id}>
                  <a
                    href={link}
                    className="inline-block hover:text-primary text-xl font-semibold"
                  >
                    {name}
                  </a>
                </li>
              ))}
              {/* Login button section */}
              <li>
                <button className="flex justify-center items-center gap-2 bg-secondary text-xl h-[40px] text-white px-5 py-2 hover:scale-105">
                  LOGIN
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
