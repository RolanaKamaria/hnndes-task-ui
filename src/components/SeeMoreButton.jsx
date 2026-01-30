function SeeMoreButton() {
  return (
    <div className="px-4 md:px-6 py-6">
      <button
        type="button"
        className="w-full md:w-auto md:min-w-[343px] h-[52px] text-[13px] md:text-base leading-[15px] font-bold text-black uppercase tracking-[0.04em] bg-white border-2 border-black rounded-md transition-all duration-200 ease-in-out hover:bg-pink-50 focus:outline-none  active:bg-gray-100"
        style={{ fontFamily: "'Roboto', sans-serif" }}
        aria-label="Load more search results"
      >
        see more
      </button>
    </div>
  );
}

export default SeeMoreButton;
