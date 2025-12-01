import { useState } from "react";
import { X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const images = [
    { src: "/completeProject.jpeg", title: "Complete Building Installation", category: "Projects" },
    { src: "/slidingDoor.jpeg", title: "UPVC Sliding Door", category: "Doors" },
    { src: "/window.jpeg", title: "Casement Window", category: "Windows" },
    { src: "/awningWindow.jpeg", title: "Awning Window", category: "Windows" },
    { src: "/slidingWindow.jpeg", title: "Sliding Window", category: "Windows" },
    { src: "/slidingWindow1.jpeg", title: "Premium Window Installation", category: "Windows" },
    { src: "/window1.jpeg", title: "UPVC Window", category: "Windows" },
    { src: "/sliding.jpeg", title: "Sliding Large Door", category: "Doors" },
    { src: "/slidingLongDoor.jpeg", title: "Luxury Sliding Door", category: "Doors" }
  ];

  const categories = ["All", ...new Set(images.map((img) => img.category))];

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 bg-light-teal">
      <section className="text-center py-10">
        <h1 className="text-5xl font-bold mb-4">Our Gallery</h1>
        <p className="text-lg text-gray-700">
          Explore premium UPVC doors and windows installations
        </p>
      </section>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              selectedCategory === category
                ? "bg-secondary text-white"
                : "bg-white text-navy hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, idx) => (
            <div
              key={idx}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer shadow-md"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-all">
                <div className="absolute bottom-0 p-4 opacity-0 group-hover:opacity-100 text-white">
                  <p className="text-sm font-semibold text-lime">{image.category}</p>
                  <h3 className="text-lg font-bold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300"
            >
              <X size={32} />
            </button>

            <img
              src={selectedImage}
              alt="Gallery"
              className="w-full h-auto rounded-lg max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
