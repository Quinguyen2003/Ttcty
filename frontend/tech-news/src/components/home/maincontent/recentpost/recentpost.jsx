import React, { useState, useEffect } from "react";
import axios from "axios";
import "./recentpost.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../../../common/heading/Heading";
import { Link } from "react-router-dom";
const RecentPost = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/news");
        setRecentPosts(response.data); // Save the data to state
      } catch (error) {
        console.error("Error fetching recent posts:", error);
      }
    };

    fetchRecentPosts();
  }, []);

  return (
    <>
      <section className="recentPost">
        <Heading title="Recent Post" />
        <div className="content">
          <Slider {...settings}>
            {recentPosts.map((val) => {
              return (
                <div className="items">
                  <div className="box shadow">
                    <div className="images row">
                      <div className="img">
                        <img src={val.cover} alt="" />
                      </div>
                      <div class="tags tags1">
                        <span>{val.tags_name}</span>
                      </div>
                    </div>
                    <div className="text row">
                      <h1 className="title">
                        <Link
                          to={`/detailpost/${val.id}`}
                          className="title-post"
                        >
                          {val.title.slice(0, 40)}...
                        </Link>
                      </h1>
                      <div className="date">
                        <i class="fas fa-calendar-days"></i>
                        <label>{val.date}</label>
                      </div>
                      <div className="author">
                        <i class="fas fa-user"></i>
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

export default RecentPost;
