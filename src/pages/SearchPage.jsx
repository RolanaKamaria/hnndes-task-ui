import SearchInput from "../components/SearchInput";
import ImageGrid from "../components/ImageGrid";
import SeeMoreButton from "../components/SeeMoreButton";

function SearchPage() {
  return (
    <div className="max-w-7xl mx-auto roboto-normal">
      <header className="px-4 md:px-6 pt-8 md:pt-10">
        <h1 className="text-4xl md:text-5xl font-normal  comfortaa text-black tracking-tight">
          Search
        </h1>
      </header>

      <div className="mt-8 md:mt-12">
        <SearchInput value="dogs" />
      </div>

      <div className="mt-8 md:mt-10 mb-2">
        <ImageGrid />
      </div>

      {/* See More Button */}
      <SeeMoreButton />
    </div>
  );
}

export default SearchPage;
