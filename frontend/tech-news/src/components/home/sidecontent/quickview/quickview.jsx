import React, { useState, useEffect} from "react";
import Heading from "../../../common/heading/Heading";
import "./quickview.css";
import axios from "axios";
import { Link } from "react-router-dom";
const Quickview = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/news/tags/6");
        setPosts(response.data); 
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <>
      <Heading title="Quick View" />
      <section className="quickview">
        {posts.map((val) => {
          return (
            <div className="box flexSB" key={val.id}>
              <div className="img">
                <img src={val.cover} alt="" />
              </div>
              <div className="text">
                <h1 className="title">
                <Link to={`/detailpost/${val.id}`} className="title-post">
                          {val.title.slice(0, 30)}...
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

export default Quickview;
