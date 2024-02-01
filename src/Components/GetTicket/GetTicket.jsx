import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const GetTicket = () => {
  const GetTicketDetails = useLoaderData();
  console.log(GetTicketDetails);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      movieName: GetTicketDetails?.name,
      quantity,
    };
    console.log(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  useEffect(() => {
    const dataStr = localStorage.getItem("user");
    const data = dataStr && JSON.parse(dataStr);
    if (data) {
      setName(data?.name);
      setEmail(data?.email);
      setQuantity(data?.quantity);
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Buy Movie Tickets</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e?.target?.value)}
            placeholder="Enter your name"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e?.target?.value)}
            placeholder="Enter your email"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="movie" className="block text-gray-700 font-bold mb-2">
            Movie
          </label>
          <input
            id="quantity"
            name="quantity"
            value={GetTicketDetails?.name}
            disabled
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="quantity"
            className="block text-gray-700 font-bold mb-2"
          >
            Seat Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e?.target?.value)}
            min="1"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Buy Tickets
        </button>
      </form>
    </div>
  );
};

export default GetTicket;
