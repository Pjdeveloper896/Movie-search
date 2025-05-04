import React, { useState } from 'react';

export function Content() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${encodeURIComponent(text)}`);
      const data = await response.json();

      if (data && data.length > 0) {
        const movie = data[0];
        setTitle(movie.title || "Title not available");
        setImage(movie.poster || "");
        setRating(movie.rating || "Rating not available");
      } else {
        setTitle("Movie not found");
        setImage("");
        setRating("");
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
      setTitle("Error fetching data");
      setImage("");
      setRating("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Search the movie"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSearch} className="bg-black text-white rounded-md px-3 py-2 shrink-0 hover:ring-4">Search</button>
      <div>
        <p>{title}</p>
        {image && <img src={image} alt={title} style={{ width: "200px" }} />}
        {rating && <p>IMDB Rating: {rating}</p>}
      </div>
    </div>
  );
}
