import React, { useState } from "react";
import blogBanner1 from "../../assets/banner.jpg";
import blogBanner2 from "../../assets/banner2.jpg";
import blogBanner3 from "../../assets/banner3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AdminHealthBlog = () => {
  const [bannerImages] = useState([blogBanner1, blogBanner2, blogBanner3]);
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

  // Sample data for the health blog cards
  const [blogCards, setBlogCards] = useState([
    {
      id: 1,
      title: "Blog Post 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: blogBanner1,
      videoUrl: "https://www.youtube.com/watch?v=1234567890",
    },
    // Add more blog cards here...
  ]);

  const [newCard, setNewCard] = useState({
    id: null,
    title: "",
    description: "",
    image: "",
    videoUrl: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCard({ ...newCard, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const src = e.target.result;
      setNewCard({ ...newCard, image: src });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEditing) {
      // Edit existing card
      const updatedCards = blogCards.map((card) =>
        card.id === newCard.id ? newCard : card
      );
      setBlogCards(updatedCards);
    } else {
      // Add new card
      const cardWithId = { ...newCard, id: Date.now() };
      setBlogCards([...blogCards, cardWithId]);
    }
    setNewCard({
      id: null,
      title: "",
      description: "",
      image: "",
      videoUrl: "",
    });
    setIsEditing(false);
  };

  const handleEdit = (card) => {
    setNewCard({ ...card });
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    const updatedCards = blogCards.filter((card) => card.id !== id);
    setBlogCards(updatedCards);
  };

  return (
    <div className="bg-white p-5 rounded-lg w-[75vw] shadow-lg overflow-scroll h-screen">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-primary-dark text-center mb-20 sm:text-5xl md:text-6xl">
          Health Blog Admin
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 px-5">
          {blogCards.map((card) => (
            <div
              key={card.id}
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
                <div className="flex mt-4 justify-end">
                  <button
                    className="text-primary-dark font-medium px-2"
                    onClick={() => handleEdit(card)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 font-medium px-2 ml-2"
                    onClick={() => handleDelete(card.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add or Edit Form */}
        <div className="max-w-7xl mx-auto mt-8">
          <form
            onSubmit={handleSubmit}
            className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
          >
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={newCard.title}
                onChange={handleInputChange}
                required
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={newCard.description}
                onChange={handleInputChange}
                required
                rows="3"
                className="border border-gray-300 rounded-lg p-2 w-full"
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Image
              </label>
              <input
                type="file"
                id="image"
                accept="image/png, image/gif, image/jpeg"
                onChange={handleImageChange}
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
              {newCard.image && (
                <img
                  src={newCard.image}
                  alt="Preview"
                  className="w-24 h-24 mt-2 object-cover"
                />
              )}
            </div>
            <div>
              <label
                htmlFor="videoUrl"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Video URL
              </label>
              <input
                type="text"
                id="videoUrl"
                name="videoUrl"
                value={newCard.videoUrl}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="bg-primary-dark text-white rounded-lg py-2 px-4 mt-4 hover:bg-primary"
              >
                {isEditing ? "Save Changes" : "Add Card"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminHealthBlog;
