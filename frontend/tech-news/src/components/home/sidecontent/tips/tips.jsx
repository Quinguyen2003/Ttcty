import React, { useEffect, useState} from "react";
import "./tips.css";
import axios from "axios";
import Heading from "../../../common/heading/Heading";

import { Link } from "react-router-dom";

const Tips = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/news/category/5");
        setPosts(response.data); 
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <>
      <Heading title="Tips & Tricks" />
      <section className="tips">
        {posts.map((val) => {
          return (
            <div className="box flexSB" key={val.id}>
              <div className="img">
                <img src={val.cover} alt="" />
              </div>
              <div className="text">
                <h1 className="title">
                <Link to={`/detailpost/${val.id}`} className="title-post">
                          {val.title.slice(0, 40)}...
                        </Link>
                </h1>
                <div className="author">
                  <i className="fas fa-user"></i>
                  <label>{val.author}</label>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Tips;
