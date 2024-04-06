import { useState } from "react";
import React from "react";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [selectedAmenity, setSelectedAmenity] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleSubmit = () => {
    onSubmit(selectedAmenity, rating, review, isAnonymous);
    setSelectedAmenity("");
    setRating(0);
    setReview("");
    setIsAnonymous(false);
    onClose();
  };

  const handleAmenityChange = (e) => {
    setSelectedAmenity(e.target.value);
  };

  const handleClick = (value) => {
    setRating(value);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setIsAnonymous(e.target.checked);
  };

  return (
    <div className={`fixed inset-0 bg-[#1D3045]/95 ${isOpen ? "" : "hidden"}`}>
      <div className="flex items-center justify-center min-w-3xl min-h-screen">
        <div className="bg-white p-8 rounded shadow-lg w-full max-w-3xl mx-3 md:mx-0">
          <h2 className=" text-center text-lg font-semibold mb-3">
            Review Location
          </h2>
          <h2 className="text-lg font-semibold mb-5">
            Bonny and Clyde Street, Ajao Estate, Lagos
          </h2>
          {/* select amenities dropdown */}
          <div className="mb-5">
            <select
              id="amenities"
              class="bg-gray-50  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3  py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={selectedAmenity}
              onChange={handleAmenityChange}
            >
              <option selected>Select Amenities</option>
              <option value="Schools">Schools</option>
              <option value="Hospitals">Hospitals</option>
              <option value="Resort Park">Resort Park</option>
              <option value="Airport">Airport</option>
            </select>
          </div>

          {/* star rating */}
          <div className="mb-5 flex flex-col">
            <label htmlFor="rating" className="font-semibold  mb-3">
              Rate Location
            </label>
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="relative mr-2">
                  <svg
                    className={`w-6 h-6 fill-current ${
                      index < rating ? "text-yellow-500" : "text-yellow-200"
                    }`}
                    onClick={() => handleClick(index + 1)}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* review textarea */}
          <div className="flex flex-col mb-4">
            <label htmlFor="review" className="mb-3 font-semibold">
              Write Review
            </label>
            <textarea
              placeholder="Write your review here..."
              value={review}
              onChange={handleReviewChange}
              cols="30"
              rows="10"
              className="border px-3 placeholder-black"
            ></textarea>
          </div>

          {/* check button */}
          <div className="flex space-x-3 mb-6">
            <input
              type="checkbox"
              name="Anonymous"
              id="anonymous"
              checked={isAnonymous}
              onChange={handleCheckboxChange}
            />
            <p>Post as Anonymous</p>
          </div>
          {/* submit and cancel buttons  */}
          <div className="flex justify-between">
            {/* submit button */}
            <button
              className="bg-[#E4E9FB] w-full hover:bg-[#5378F6] text-white px-4 py-2 rounded mr-2"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
            {/* cancel button */}
            <button
              className="border border-[#5378F6] w-full hover:bg-[#5378F6] hover:text-white text-[#5378F6] px-4 py-2 rounded"
              onClick={onClose}
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
