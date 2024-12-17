import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import axios from "axios";
import Heading from "../../../common/heading/Heading";
import "./rideanddrive.css";
import { Link } from "react-router-dom";

const RideAndDrive = () => {
  const [posts, setPosts] = useState([]);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/news/category/2");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
     <section className="rideAndDrive">
        <Heading title="Ride & Drive" />
        <div className="content">
          <Slider {...settings}>
            {posts.map((val) => {
              return (
                <div className="items" key={val.id}>
                  <div className="box shadow">
                    <div className="images">
                      <div className="img">
                        <img src={val.cover} alt="" />
                      </div>
                      <div className="tags tags1">
                        <span>{val.tags_name}</span>
                      </div>
                    </div>
                    <div className="text">
                      <h1 className="title">
                      <Link
                          to={`/detailpost/${val.id}`} className="title-post">
                          {val.title.slice(0, 40)}...
                        </Link>
                      </h1>
                      <div className="date">
                        <i className="fas fa-calendar-days"></i>
                        <label>{val.date}</label>
                      </div>
                      <div className="author">
                        <i className="fas fa-user"></i>
                        <label>{val.author}</label>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default RideAndDrive;
