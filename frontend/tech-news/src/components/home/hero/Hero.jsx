import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "./Card";
import "./hero.css";

const Hero = () => {
  const { category_id } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, [category_id]); 

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/news", {
        params: { category_id: category_id || null },
      });
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
     
    <>
    <section className='hero'>
      <div className='container'>
        {posts.slice(0, 4).map((item) => {
          return (
            <>
              <Card key={item.id} item={item} />
            </>
          )
        })}
      </div>
    </section>
  </>
  );
};

export default Hero;
