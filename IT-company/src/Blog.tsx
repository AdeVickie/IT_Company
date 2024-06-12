import React from "react";
import Blog1 from "../src/assets/Images/Blog1.jpg";
import Blog2 from "../src/assets/Images/Blog2.jpg";
import Blog3 from "../src/assets/Images/Blog3.jpg";
import "../src/Component/Blog.css";

export default function Blog() {
  return (
    <>
      <div className="grid-container" id="container">
        <div className="grid-item">
          <img src={Blog1} alt="Blog1" className="blog-img" />
        </div>
        <div className="grid-item">
          <img src={Blog2} alt="Blog2" className="blog-img" />
        </div>
        <div className="grid-item">
          <img src={Blog3} alt="Blog3" className="blog-img" />
        </div>
      </div>
    </>
  );
}
