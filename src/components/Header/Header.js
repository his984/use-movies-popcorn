import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [query, setQuery] = useState("");

  return (
    <header className="header">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>Popcorn</h1>
      </div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          // console.log(query);
        }}
      />
      <p className="num-results">
        Found <strong>X</strong> results
      </p>
    </header>
  );
}
