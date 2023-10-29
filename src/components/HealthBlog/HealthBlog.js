import React, { useEffect, useState } from "react";
import blogBanner1 from "../../assets/banner.jpg";
import blogBanner2 from "../../assets/banner2.jpg";
import blogBanner3 from "../../assets/banner3.jpg";
import videoThumbnail from "../../assets/book1.png";
import videoThumbnail2 from "../../assets/thumbnail1.jpg";
import videoThumbnail3 from "../../assets/thumbnail2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HealthBlog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6); // Number of cards per page
  const bannerImages = [blogBanner1, blogBanner2, blogBanner3];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  // Sample data for the blog cards
  const blogCards = [
    {
      title: "Blog Post 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: videoThumbnail3,
      videoUrl: "https://www.youtube.com/watch?v=1234567890", // Sample video URL
    },
    {
      title: "Blog Post 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: videoThumbnail2,
      videoUrl: "https://www.youtube.com/watch?v=abcdefghij", // Sample video URL
    },
    {
      title: "Blog Post 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: videoThumbnail2,
      videoUrl: "https://www.youtube.com/watch?v=klmnopqrst", // Sample video URL
    },
    {
      title: "Blog Post 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: videoThumbnail3,
      videoUrl: "https://www.youtube.com/watch?v=1234567890", // Sample video URL
    },
    {
      title: "Blog Post 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: videoThumbnail2,
      videoUrl: "https://www.youtube.com/watch?v=1234567890", // Sample video URL
    },
    {
      title: "Blog Post 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: videoThumbnail3,
      videoUrl: "https://www.youtube.com/watch?v=1234567890", // Sample video URL
    },
    {
      title: "Blog Post 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: videoThumbnail2,
      videoUrl: "https://www.youtube.com/watch?v=abcdefghij", // Sample video URL
    },
    {
      title: "Blog Post 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: videoThumbnail2,
      videoUrl: "https://www.youtube.com/watch?v=klmnopqrst", // Sample video URL
    },
    {
      title: "Blog Post 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: videoThumbnail3,
      videoUrl: "https://www.youtube.com/watch?v=1234567890", // Sample video URL
    },
    {
      title: "Blog Post 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: videoThumbnail2,
      videoUrl: "https://www.youtube.com/watch?v=1234567890", // Sample video URL
    },
    {
      title: "Blog Post 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: videoThumbnail3,
      videoUrl: "https://www.youtube.com/watch?v=1234567890", // Sample video URL
    },
    // Add more blog cards
    // ...
  ];

  // Get current cards based on pagination
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = blogCards.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const paginate = (pageNumber) => {
    if (
      pageNumber < 1 ||
      pageNumber > Math.ceil(blogCards.length / cardsPerPage)
    ) {
      return;
    }
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-gray-50 p-5">
      <div className="h-72 rounded-md overflow-hidden">
        <Slider {...settings}>
          {bannerImages.map((image, index) => (
            <div key={index}>
              <img className="w-full h-72  bg-cover bg-center" src={image} />
            </div>
          ))}
        </Slider>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-primary-dark text-center mb-20 sm:text-5xl md:text-6xl">
          Health Blog
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 px-5">
          {currentCards.map((card, index) => (
            <div
              key={index}
              className="border rounded-lg bg-white shadow-lg overflow-hidden"
            >
              <div className="relative group">
                {card.videoUrl ? (
                  <>
                    <div className="relative h-56 aspect-w-16 aspect-h-9">
                      <a
                        href={card.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={card.image}
                          alt="Video Thumbnail"
                          className="w-full h-full object-cover"
                        />
                      </a>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                        <i className="fa fa-play text-blue-500"></i>
                      </div>
                    </div>
                  </>
                ) : (
                  <img
                    src={card.image}
                    alt="Image"
                    className="w-full h-48 object-cover"
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-700">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <a
              onClick={() => paginate(currentPage - 1)}
              className={`whitespace-nowrap cursor-pointer text-base font-medium text-gray-500 hover:text-gray-700 px-4 py-2 border border-gray-300 ${
                currentPage === 1 ? "bg-gray-200" : "bg-white"
              }`}
            >
              Prev
            </a>
            <a
              onClick={() => paginate(currentPage + 1)}
              className={`whitespace-nowrap cursor-pointer text-base font-medium text-gray-500 hover:text-gray-700 px-4 py-2 border border-gray-300 ${
                currentPage === Math.ceil(blogCards.length / cardsPerPage) ||
                blogCards.length === 0
                  ? "bg-gray-200"
                  : "bg-white"
              }`}
            >
              Next
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HealthBlog;
