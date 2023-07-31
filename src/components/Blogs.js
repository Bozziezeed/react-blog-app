import React, { useEffect, useState } from "react";
import blogs from "../data/blogs";
import { Link } from "react-router-dom";
import "./Blogs.css";

export default function Blogs() {
  const [search, setSearch] = useState("");
  const [filterBlog, setFilterBlog] = useState([]);
  useEffect(() => {
    const result = blogs.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilterBlog(result);
  }, [search]);
  return (
    <div className="blogs-container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <article>
        {filterBlog.map((item) => (
          <Link to={`/blog/${item.id}`} key={item.id}>
            <div className="card">
              <div>
                <h2>{item.title}</h2>
                <p className="author">Author :{item.author}</p>
              </div>

              <p>{item.content.substring(0, 300)}</p>
              <hr />
            </div>
          </Link>
        ))}
      </article>
    </div>
  );
}
