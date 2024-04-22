import React, { useState } from "react";
import "./blog.css";
import Img1 from "../../assets/image/blog/Blogt.png";
import Img2 from "../../assets/image/blog/e-waste.jpeg";
import Img3 from "../../assets/image/blog/beauty.jpeg";
import Img4 from "../../assets/image/blog/empty-cans.jpeg";
import Img5 from "../../assets/image/blog/glass-jar-food.jpeg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  const blogPosts = [
    {
      id: 1,
      img: Img2,
      date: "21/4/2024",
      title: "What is E-waste?",
      content:
        "In an ideal world, we’d never have to look at a plastic packaged food again. Unfortunately plastic won’t magically disappear from our lives as much as we want it to! It may require a little more effort than we can muster up some days. So this week, we asked ourselves the question: 'Is it really possible to do a grocery shop without plastic even if we were really, really trying?'",
    },
    {
      id: 2,
      img: Img3,
      date: "21/4/2024",
      title: "What is E-waste?",
      content:
        "In an ideal world, we’d never have to look at a plastic packaged food again. Unfortunately plastic won’t magically disappear from our lives as much as we want it to! It may require a little more effort than we can muster up some days. So this week, we asked ourselves the question: 'Is it really possible to do a grocery shop without plastic even if we were really, really trying?'",
    },
    {
      id: 3,
      img: Img4,
      date: "21/4/2024",
      title: "What is E-waste?",
      content:
        "In an ideal world, we’d never have to look at a plastic packaged food again. Unfortunately plastic won’t magically disappear from our lives as much as we want it to! It may require a little more effort than we can muster up some days. So this week, we asked ourselves the question: 'Is it really possible to do a grocery shop without plastic even if we were really, really trying?'",
    },
    {
      id: 4,
      img: Img5,
      date: "21/4/2024",
      title: "What is E-waste?",
      content:
        "In an ideal world, we’d never have to look at a plastic packaged food again. Unfortunately plastic won’t magically disappear from our lives as much as we want it to! It may require a little more effort than we can muster up some days. So this week, we asked ourselves the question: 'Is it really possible to do a grocery shop without plastic even if we were really, really trying?'",
    },
    // Add more blog post objects as needed
  ];

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div className="header">
        <img src={Img1} alt="" />
      </div>
      <div className="post">
        {currentPosts.map((post, index) => (
          <div className="p1" key={post.id}>
            <img src={post.img} alt="" />
            <p>{post.date}</p>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
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
