import React, { useEffect, useState } from "react";
import axios from "axios";

import "../pages.css";

const Techpages = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/news/category/1", {
        });
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <>
      <section className="pages">
        <div className="container paddingTB">
          {/* <Heading title="Tech News" /> */}
          <div className="description-box">
            <h1>TECH NEWS</h1>
            <p>
            A place that compiles the hottest information about the world of Phones, Tablets, 
            SmartHome, PC, Laptop and the latest technology devices.
            </p>
          </div>
          <div className="news-content">
            {posts.map((post) => (
              <div className="post" key={post.id}>
                <div className="post-image">
                  <img src={post.cover} alt={post.title} />
                </div>
                <div className="post-text">
                  <span className="tags">{post.tags_name}</span>
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                  <div className="author">
                        <i class="fas fa-user"></i>
                        <label>{post.author}</label>
                      </div>
                      <div className="date">
                        <i class="fas fa-calendar-days"></i>
                        <label>{post.date}</label>
                      </div>   
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Techpages;
