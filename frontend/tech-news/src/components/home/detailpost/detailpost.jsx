import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../maincontent/homes/style.css";
import "./detailpost.css";
import "../sidecontent/side/side.css";
import Side from "../sidecontent/side/Side";

const DetailPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/api/news/${id}`);
        const fetchedPost = response.data;

        if (fetchedPost.desc && typeof fetchedPost.desc === "string") {
          try {
            fetchedPost.desc = JSON.parse(fetchedPost.desc);
          } catch (e) {
            console.error("Failed to parse desc:", e);
            fetchedPost.desc = []; 
          }
        } else {
          fetchedPost.desc = []; 
        }
    
        setPost(fetchedPost);
      } catch (error) {
        setError("Not Found");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (error || !post) {
    return <h1>{error || "Not found"}</h1>;
  }

  return (
    <>
      <main>
        <div className="container">
          <section className="mainContent details">
            <h1 className="title">{post.title}</h1>

            <div className="author">
              <span>by</span>
              <p>{post.author} on</p>
              <label>{post.date}</label>
            </div>

            <div className="desctop">
              {post.desc.map((val, index) => (
                <React.Fragment key={index}>
                  <p>{val.para1}</p>
                  <p>{val.para2}</p>
                  <p>{val.para3}</p>
                </React.Fragment>
              ))}
            </div>

            <img src={post.cover} alt={post.title} />
          </section>

          <section className="sideContent">
            <Side />
          </section>
        </div>
      </main>
    </>
  );
};

export default DetailPost;
