import React, { useState, useEffect } from "react";
import "./blog.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import Img1 from "../../assets/image/blog/Blogt.png";
interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  create_Date: string;
}

function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]); // Explicitly define the type
  const postsPerPage = 12;

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const response = await axios.post("http://192.168.31.9:91/api/blog/blogList", {});
        setBlogPosts(response.data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    }

    fetchBlogPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const renderImageFromBase64 = (base64String: string) => {
    return `data:image/jpeg;base64,${base64String}`;
  };

  return (
    <div>
      <div className="header">
        <img src={Img1} alt="" />
      </div>
      <div className="post">
        {currentPosts.map((post) => (
          <div className="p1" key={post.id}>
            <img src={renderImageFromBase64(post.image)} alt="" />
            <p>{post.create_Date}</p>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <a href="">Read more</a>
          </div>
        ))}
      </div>
      <div className="transaction">
        <button className="newP" onClick={handlePreviousPage} disabled={currentPage === 1}>
          <IoIosArrowBack className="icon1" /> Newer posts
        </button>

        <button className="oldP" onClick={handleNextPage} disabled={currentPosts.length < postsPerPage}>
          Older posts <IoIosArrowForward className="icon1" />
        </button>
      </div>
    </div>
  );
}

export default Blog;
