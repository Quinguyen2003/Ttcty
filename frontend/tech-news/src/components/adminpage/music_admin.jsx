import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import "./adminpage.css";

const MusicsPage = () => {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddMode, setIsAddMode] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const navigate = useNavigate();

  const fetchNewsData = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/loginpage");
      return;
    }

    try {
      const response = await axios.get(
        "http://localhost:5000/api/news/category/4",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setPosts(response.data);
    } catch (error) {
      Swal.fire({
        position: "top-right",
        title: "Error",
        text: error.response ? error.response.data : "An error occurred",
        toast: true,
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
      });
      navigate("/loginpage");
    }
  };

  useEffect(() => {
    fetchNewsData();
  }, [navigate]);

  const openEditModal = (post) => {
    setSelectedPost(post);
    setIsAddMode(false);
    setIsModalOpen(true);
  };

  const openAddModal = () => {
    setSelectedPost(null);
    setIsAddMode(true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  const handleSave = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      Swal.fire({
        position: "top-right",
        title: "Error",
        text: "You must be logged in to save changes.",
        toast: true,
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }

    const formData = new FormData(event.target);
    const data = {
      title: formData.get("title"),
      cover: formData.get("cover"),
      category_id: formData.get("category_id"),
      tags_id: formData.get("tags_id"),
      desc: formData.get("desc"),
      author: formData.get("author"),
      date: formData.get("date"),
    };

    try {
      if (isAddMode) {
        await axios.post("http://localhost:5000/api/add_post", data, {
          headers: { Authorization: `Bearer ${token}` },
        });
        Swal.fire({
          title: "Success",
          text: "Post added successfully!",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        await axios.put(
          `http://localhost:5000/api/news/${selectedPost.id}`,
          data,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        Swal.fire({
          title: "Success",
          text: "Post updated successfully!",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
      }
      setIsModalOpen(false);
      setSelectedPost(null);
      fetchNewsData();
    } catch (error) {
      Swal.fire({
        position: "top-right",
        title: "Error",
        text: error.response ? error.response.data : "An error occurred",
        toast: true,
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      Swal.fire({
        position: "top-right",
        title: "Error",
        text: "You must be logged in to delete a post.",
        toast: true,
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/api/news/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      Swal.fire({
        title: "Success",
        text: "Post deleted successfully!",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
      });
      fetchNewsData();
    } catch (error) {
      Swal.fire({
        position: "top-right",
        title: "Error",
        text: error.response ? error.response.data : "An error occurred",
        toast: true,
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <h2>Admin Page</h2>
        <ul>
          <li>
            <a href="/adminpage">All Post</a>
          </li>
          <li>
            <a href="/technewsadmin">Tech News</a>
          </li>
          <li>
            <a href="/vehicleadmin">Ride & Drive</a>
          </li>
          <li>
            <a href="esportadmin">Esports</a>
          </li>
          <li>
            <a href="/musicadmin">Music</a>
          </li>
          <li>
            <a href="/tipsadmin">Tips & Tricks</a>
          </li>
          <li>
            <a href="/loginpage" className="out">
              <i className="fa-solid fa-door-open"></i>
              <span className="logout">Log Out</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="admin-content">
        <div className="admin-header">
          <h1>Music Page</h1>
          <button className="add" onClick={openAddModal}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Cover Image</th>
              <th>Author</th>
              <th>Category</th>
              <th>Tags</th>
              <th>Date</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.length > 0 ? (
              posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>
                    <img src={post.cover} alt="Cover" className="cover-img" />
                  </td>
                  <td>{post.author}</td>
                  <td>{post.category_id}</td>
                  <td>{post.tags_id}</td>
                  <td>{post.date}</td>
                  <td>{post.desc}</td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="edit"
                        onClick={() => openEditModal(post)}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button
                        className="delete"
                        onClick={() => handleDelete(post.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No posts available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <form className="edit-form" onSubmit={handleSave}>
              <h2>{isAddMode ? "Add New Post" : "Edit Post"}</h2>
              <div className="edit-info">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={selectedPost?.title || ""}
                />
              </div>
              <div className="edit-info">
                <label>Cover Image</label>
                <input
                  type="text"
                  name="cover"
                  defaultValue={selectedPost?.cover || ""}
                />
              </div>
              <div className="edit-info">
                <label>Category</label>
                <input
                  type="number"
                  name="category_id"
                  defaultValue={selectedPost?.category_id || ""}
                />
              </div>
              <div className="edit-info">
                <label>Tags</label>
                <input
                  type="number"
                  name="tags_id"
                  defaultValue={selectedPost?.tags_id || ""}
                />
              </div>
              <div className="edit-info">
                <label>Description</label>
                <input
                  type="text"
                  name="desc"
                  defaultValue={selectedPost?.desc || ""}
                ></input>
              </div>
              <div className="edit-info">
                <label>Author</label>
                <input
                  type="text"
                  name="author"
                  defaultValue={selectedPost?.author || ""}
                />
              </div>
              <div className="edit-info">
                <label>Date</label>
                <input
                  type="date"
                  name="date"
                  defaultValue={selectedPost?.date || ""}
                />
              </div>
              <div className="modal-actions">
                <button type="button" onClick={closeModal}>
                  Cancel
                </button>
                <button type="submit">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicsPage;
