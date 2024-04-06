import React, { useState } from "react";
import Modal from "../components/Modal";
import logo from "../assets/svg/ic_logo.svg";
import profile from "../assets/svg/Frame 177.svg";
import searchIcon from "../assets/svg/searchIcon.svg";
import cancel from "../assets/svg/cancel.svg";
import bookmark from "../assets/svg/BOOKMARK.svg";
import share from "../assets/svg/share.svg";
import reviewImage from "../assets/png/reviewImage.png";
import reviewProfilePic from "../assets/svg/reviewProfileImage.svg";
import star from "../assets/svg/star.svg";
import likeButton from "../assets/svg/like.svg";
import dislikeButton from "../assets/svg/dislike.svg";
import commentButton from "../assets/svg/comment.svg";

const tags = [
  "Schools",
  "Hospitals",
  "Resort Park",
  "Shopping Malls",
  "Airport",
  "Train Station",
  "Nightlife",
  "Public Wifi",
  "Parking Lot",
  "Security",
  "Public Transport",
  "Bus Station",
  "Quiet",
  ">",
];

const reviews = [
  {
    profilePic: reviewProfilePic,
    name: "James T.",
    timestamp: "5 months ago",
    rating: "4.0",
    review:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets.",
    likeCount: "1224",
    dislikeCount: "4",
    commentsCount: "24",
  },
  {
    profilePic: reviewProfilePic,
    name: "Taiwo O. (Admin)",
    timestamp: "5 months ago",
    rating: "4.0",
    review:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets.",
    likeCount: "1000",
    dislikeCount: "24",
    commentsCount: "24",
  },
  {
    profilePic: reviewProfilePic,
    name: "James T.",
    timestamp: "5 months ago",
    rating: "4.0",
    review:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets.",
    likeCount: "900",
    dislikeCount: "24",
    commentsCount: "24",
  },
  {
    profilePic: reviewProfilePic,
    name: "James T.",
    timestamp: "5 months ago",
    rating: "4.0",
    review:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets.",
    likeCount: "214",
    dislikeCount: "24",
    commentsCount: "24",
  },
];

const Reviews = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState([...reviews]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (selectedAmenity, rating, review, isAnonymous) => {
    // Create an object with the submitted data

    const newRating = rating.toString() + ".0";

    const newData = {
      profilePic: reviewProfilePic,
      name: isAnonymous ? "Anonymous" : "James T.",
      timestamp: "5 months ago",
      amenity: selectedAmenity,
      rating: newRating,
      review: review,
      isAnonymous: isAnonymous,
      likeCount: "214",
      dislikeCount: "24",
      commentsCount: "24",
    };

    // Push the new data object into the submittedData array
    setSubmittedData([...submittedData, newData]);

    // Close the modal
    closeModal();
  };

  return (
    <div>
      {/* elements with sky blue background */}
      <div className="bg-[#F2F6FD]">
        <div className="xl:px-64 lg:px-16 md:px-8 pb-4">
          {/* navbar */}
          <div className=" flex justify-between items-center py-6 space-x-48 mx-3 md:mx-0">
            {/* logo and input field */}
            <div className=" grow flex justify-between space-x-11">
              <img src={logo} alt="logo" />
              {/* input field */}
              <div className="w-full hidden md:block">
                <form className="flex items-center  mx-auto">
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <img src={searchIcon} alt="" />
                    </div>
                    <input
                      type="text"
                      id="voice-search"
                      className="bg-gray-50 border border-gray-300 placeholder-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Bonny and Clyde Street, Ajao Estate, Lagos"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 end-0 flex items-center pe-3"
                    >
                      <img src={cancel} alt="" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* profile */}
            <div className="flex items-center space-x-3 ">
              <p className=" font-medium">Welcome!</p>
              <img src={profile} alt="" />
            </div>
          </div>
          {/* body */}
          <div>
            {/* header */}
            <div>
              {/* address and buttons */}
              <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <div className="mx-3 md:mx-0 mb-5 md:mb-0">
                  <p className="text-2xl font-semibold">
                    Bonny and Clyde Street, Ajao Estate, Lagos
                  </p>
                  <p>
                    <span className=" font-semibold">"450" Reviews</span>{" "}
                    (People are raving about the selected location)
                  </p>
                </div>
                {/* buttons */}
                <div className=" flex items-center space-x-3 -ml-20 md:-ml-0">
                  <button
                    className="bg-[#3366FF] text-white px-7 py-2 rounded-md "
                    onClick={openModal}
                  >
                    LEAVE A REVIEW
                  </button>
                  <button className="border border-[#3366FF] px-4 py-2 rounded-md ">
                    <img src={bookmark} alt="" />
                  </button>
                  <button className="border border-[#3366FF] px-4 py-2 rounded-md ">
                    <img src={share} alt="" />
                  </button>
                </div>
              </div>
              {/* tags */}
              <div className="flex space-x-3 overflow-auto">
                {tags.map((tag, index) => (
                  <button
                    key={index}
                    className={`border text-xs flex items-center justify-center bg-white px-2 whitespace-nowrap ${
                      index === tags.length - 1 ? "rounded-full" : "rounded-md"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:px-64 lg:px-16 md:px-8 pt-12 flex flex-col md:flex-row justify-between">
        {/* reviews */}
        <div className="w-3/4 mr-7 grow md:order-first order-last ml-10 md:ml-0 ">
          {submittedData.map((review, index) => (
            <div key={index} className=" border-b pb-5 mb-6">
              {/* profile, name, timestamp and review star  */}
              <div className="flex justify-between mb-3">
                <div className="flex space-x-4">
                  <img src={review.profilePic} alt="" />
                  <p>
                    {review.name}
                    <span className="pl-2">{review.timestamp}</span>
                  </p>
                </div>

                <div className="flex space-x-1">
                  <img src={star} alt="" />
                  <p>{review.rating}</p>
                </div>
              </div>
              {/* review */}
              <div className=" mb-2">
                <p>{review.review}</p>
              </div>

              {/* interaction buttons */}
              <div className="text-[#0D2159] flex space-x-7">
                {/* like button */}
                <div className="flex items-cente">
                  <img src={likeButton} alt="like button" />
                  <p>{review.likeCount}</p>
                </div>
                {/* dislike button */}
                <div className="flex items-center">
                  <img src={dislikeButton} alt="like button" />
                  <p>{review.dislikeCount}</p>
                </div>
                {/* comment button */}
                <div className="flex items-cente">
                  <img src={commentButton} alt="like button" />
                  <p>{review.commentsCount}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* images */}
        <div className="mx-5  md:mx-0 mb-5 md:mb-0">
          <img src={reviewImage} alt="" />
        </div>
      </div>
      {/* modal window */}
      <Modal isOpen={isOpen} onClose={closeModal} onSubmit={handleSubmit} />
    </div>
  );
};

export default Reviews;
