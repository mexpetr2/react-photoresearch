import React, { useState, useEffect } from "react";
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "ozEHnECBoPS7su448c8oevGK1P5K5BueR2zoUeyQR3Y",
});

export default function SearchPhotos() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState("");

  const cancel = Object.keys(pics).length > 0;

  const SearchP = async (e) => {
    e.preventDefault();

    unsplash.search
      .photos(query)
      .then(toJson)
      .then((json) => {
        setPics(json.results);
      });
  };
  return (
    <div>
      <form className="form" onSubmit={SearchP}>
        <label htmlFor="query" className="label">
          {" "}
        </label>

        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "landscape" or "Tokyo"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Rechercher
        </button>
        {cancel && (
          <button className="cancelbutton" onClick={() => setQuery("")}>
            Annuler la recherche
          </button>
        )}
      </form>
      <div className="card-list">
        {Array.isArray(pics)
          ? pics.map((pic) => (
              <div className="card" key={pic.id}>
                <img
                  src={pic.urls.full}
                  alt={pic.alt_description}
                  className="card-image"
                  width="50%"
                  height="50%"
                ></img>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
