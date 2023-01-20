import React from "react";
import CategoryButton from "./CategoryButton";
import Filter from "./Filter";
import SortButton from "./SortButton";

const BaseAPI = "https://api.chucknorris.io/jokes/random?category=";
const validCategories = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel",
];

const MiApi = () => {
  const [joke, setJoke] = React.useState(null);
  const [results, setResults] = React.useState([]);
  const [filter, setFilter] = React.useState("");

  const getJoke = async (category) => {
    const response = await fetch(`${BaseAPI}${category}`);
    if (response.ok) {
      const data = await response.json();
      setJoke(data.value);
    }
  };

  const sortResults = (direction) => {
    if (direction === "up") {
      setResults((prevResults) => {
        return [...prevResults].sort((a, b) => a.length - b.length);
      });
    } else {
      setResults((prevResults) => {
        return [...prevResults].sort((a, b) => b.length - a.length);
      });
    }
  };

  React.useEffect(() => {
    if (joke) {
      setResults((prevResults) => [...prevResults, joke]);
    }
  }, [joke]);

  return (
    <div className="bg-slate-400 flex flex-col justify-center items-center pb-5 h-auto">
      <img
        src="./img/Chuck-Norris.jpg"
        className="rounded-3xl max-w-lg my-10"
      />

      <div className="flex flex-row flex-wrap justify-between gap-x-2 gap-y-4 px-6 mb-10">
        {validCategories.map((category) => {
          return (
            <CategoryButton
              key={category}
              category={category}
              getJoke={getJoke}
            />
          );
        })}
      </div>

      <div className="flex flex-row flex-wrap justify-between gap-x-2 gap-y-4 px-6 mb-10">
        <SortButton
          text="Ordenar de menos caracteres a mas"
          direction="up"
          sortResults={sortResults}
        />
        <SortButton
          text="Ordenar de mas caracteres a menos"
          direction="down"
          sortResults={sortResults}
        />
      </div>

      <Filter value={filter} onChange={(e) => setFilter(e.target.value)} />

      <h3 className="text-3xl mb-5">Chuck Norris dice:</h3>
      {results
        .filter((line) => line.toLowerCase().includes(filter.toLowerCase()))
        .map((result, index) => {
          return (
            <p
              className="text-xl text-center bg-blue-500 bg-opacity-20 mb-2"
              key={index}
            >
              {result}
            </p>
          );
        })}
    </div>
  );
};

export default MiApi;
