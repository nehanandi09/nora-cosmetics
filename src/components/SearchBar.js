import React from "react";
const SearchBar = () => {
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="mt-4 border-2 border-coffeePot2 rounded-3xl">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            ref={searchValue}
            placeholder="Search for a product"
            className="w-full pt-4 pb-4 pr-8 pl-8 focus:outline-none border-none text-lg bg-transparent"
          />
        </div>
      </form>
    </section>
  );
};

export default SearchBar;
