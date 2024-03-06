import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Table from "../../components/Table";
import { reviewsHead as header } from "../../components/data";
import { GetReviews } from "../../api/api";
import { useParams } from "react-router-dom";
import Search from "../../components/Search";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const [searchTerm, setSearchTerm] = useState("");
  const { id: property_id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true); // Set loading to true before making the API call
        const response = await GetReviews(property_id);
        const reviewsData = response.data?.data || []; // Handle cases where data is null
        setReviews(reviewsData);
      } catch (error) {
        console.error("Error fetching reviews data:", error);
      } finally {
        setLoading(false); // Set loading to false after API call (whether success or error)
      }
    };

    fetchReviews();
  }, [property_id]);

  const calculateTimeAgo = (createdOn) => {
    // ... (unchanged)
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const renderStars = (rating) => {
    // ... (unchanged)
  };

  return (
    <div>
      <Header />
      <Search handleSearch={handleSearch} />
      {loading ? (
        "loading..."
      ) : reviews && reviews.length > 0 ? (
        <div className="w-full p-20">
          {reviews.map((review, index) => (
            <div key={index} className="bg-[#f1fffe] w-140 p-10 mb-8">
              <p className="text-gray-500 mb-4">
                {calculateTimeAgo(review.created_on)}
              </p>
              <p className="mb-2">{renderStars(review.rating)}</p>
              <p className="font-semibold uppercase">review: </p>
              <p>{review?.feedback}</p>
            </div>
          ))}
        </div>
      ) : (
        <>
          No reviews found
        </>
      )}
    </div>
  );
};

export default Reviews;
