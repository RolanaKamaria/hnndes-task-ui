function SearchInput({ value }) {
  return (
    <div className="px-4 md:px-6">
      <label htmlFor="search-input" className="sr-only">
        Search
      </label>
      <input
        id="search-input"
        type="text"
        defaultValue={value}
        placeholder="Search..."
        className="w-full md:max-w-lg h-[52px] md:h-[65px] px-4 text-[15px] md:text-lg text-black bg-white border-2 border-black outline-none transition-all duration-200 ease-in-out"
        style={{ fontFamily: "'Roboto', sans-serif" }}
        aria-label="Search for images"
      />
    </div>
  );
}

export default SearchInput;
