const dogImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=300&h=300&fit=crop",
    alt: "Happy brown and white dog smiling",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=300&h=300&fit=crop",
    alt: "Two dogs resting together",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=300&h=300&fit=crop",
    alt: "Dalmatian dog lying down",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=300&h=300&fit=crop",
    alt: "Dalmatian dogs playing on grass",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=300&h=300&fit=crop",
    alt: "Two dogs wearing hats sitting together",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=300&h=300&fit=crop",
    alt: "Small fluffy dog running",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=300&h=300&fit=crop",
    alt: "Brown labrador portrait",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=300&h=300&fit=crop",
    alt: "German shepherd sitting on beach",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?w=300&h=300&fit=crop",
    alt: "Two dogs standing together",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=300&h=300&fit=crop",
    alt: "Dog standing by a door",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=300&h=300&fit=crop",
    alt: "Happy corgi looking up",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=300&h=300&fit=crop",
    alt: "Golden retriever in nature",
  },
];

function ImageGrid() {
  return (
    <section className="px-4 md:px-6" aria-labelledby="results-heading">
      {/* Figma: font Roboto 13px, letter-spacing 0.04em, uppercase */}
      <h2
        id="results-heading"
        className="text-[13px] md:text-base leading-[15px] tracking-[0.04em] text-black font-black uppercase mb-6"
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        All results
      </h2>
      <div
        className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-[11px] md:gap-4"
        role="list"
        aria-label="Dog images gallery"
      >
        {dogImages.map((image) => (
          <article
            key={image.id}
            className="aspect-square overflow-hidden cursor-pointer"
            role="listitem"
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </article>
        ))}
      </div>
    </section>
  );
}

export default ImageGrid;
