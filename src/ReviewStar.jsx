import React, { useState } from "react";
import FaRegStar from "./FaRegStar";
import FaStar from "./FaStar";
import "./reviewStar.css";

const ReviewStar = ({ reviewCount, reviewClick }) => {
  const reviewArry = [...Array(reviewClick).keys()];

  return (
    <>
      <div className="relative">
        <div className="flex gap-1">
          <span onClick={() => reviewCount(1)} className="cursor-pointer">
            <FaRegStar />
          </span>
          <span onClick={() => reviewCount(2)} className="cursor-pointer">
            <FaRegStar />
          </span>
          <span onClick={() => reviewCount(3)} className="cursor-pointer">
            <FaRegStar />
          </span>
          <span onClick={() => reviewCount(4)} className="cursor-pointer">
            <FaRegStar />
          </span>
          <span onClick={() => reviewCount(5)} className="cursor-pointer">
            <FaRegStar />
          </span>
        </div>
        <div className="absolute left-0 top-0">
          <div className="flex gap-1">
            {reviewArry?.map((item, i) => (
              <div
                key={i}
                onClick={() => reviewCount(i + 1)}
                className="cursor-pointer"
              >
                <FaStar />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewStar;
