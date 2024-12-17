import React, { useEffect, useState } from "react";
import axios from "axios";
import "../pages.css";
import { Link } from "react-router-dom";

const Esportpages = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/news/category/3", {
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
            <h1>ESPORTS</h1>
            <p>
            Stay updated with the latest esports tournaments, match results, and highlights from the world of competitive gaming. Your source for everything about esports events and teams!
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
                  <h2>
                    <Link to={`/detailpost/${post.id}`} className="post-title-link">
                      {post.title}
                    </Link>
                    </h2>
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

export default Esportpages;
