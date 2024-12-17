import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./adminpage.css";

const TipsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/tips-tricks");
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error("Failed to fetch posts:", error);
        }
    };

    const handleEdit = (id) => {
        console.log("Edit post", id);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            console.log("Delete post", id);
        }
    };

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <h2>Admin Page</h2>
                <ul>
                    <li><Link to="/all-posts">All Post</Link></li>
                    <li><Link to="/tech_news_admin">Tech News</Link></li>
                    <li><Link to="/esport_admin">Esports</Link></li>
                    <li><Link to="/music_admin">Music</Link></li>
                    <li><Link to="/tips_admin">Tips & Tricks</Link></li>
                    <li><Link to="/vehicle_admin">Vehicle</Link></li>
                    <li><Link to="/loginpage" className="out">Log Out</Link></li>
                </ul>
            </div>
            <div className="admin-content">
                <h1>Tips & Tricks</h1>
                <button>
                    <i className="fa-solid fa-plus"></i> Add New Post
                </button>
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
                        {posts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.title}</td>
                                <td><img src={post.coverImage} alt="Cover" className="cover-img" /></td>
                                <td>{post.author}</td>
                                <td>{post.category}</td>
                                <td>{post.tags}</td>
                                <td>{new Date(post.date).toLocaleDateString()}</td>
                                <td>{post.description}</td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="edit" onClick={() => handleEdit(post.id)}>Edit</button>
                                        <button className="delete" onClick={() => handleDelete(post.id)}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TipsPage;
