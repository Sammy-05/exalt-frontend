import React, { useEffect, useState } from "react";
import axios from "axios"; 

const UploadBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]); 

  useEffect(() => {
    axios.get("http://localhost:3001/blogs").then((response) => {
      console.log(response.data);
      setBlogs(response.data);
    });
  }, []);

  const handleUpload = async () => {
    setLoading(true);

    const requestData = {
      Main_Heading: title,
      Main_Content: content,
      Display_Pic: image,
    };

    try {
      await axios.post("http://localhost:3001/save_blog", requestData);
      setLoading(false);
      alert("Blog uploaded successfully");
    } catch (error) {
      setLoading(false);
      alert("Failed to upload blog");
    }
  };

  function convertToBase64(e) {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(e.target.files[0]);

    fileReader.onload = () => {
      console.log(fileReader.result);
      setImage(fileReader.result);
    };

    fileReader.onerror = (error) => {
      console.error("Error: ", error);
    };
  }

  return (
    <div className="flex flex-col">
      <h1>Upload Blog</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <input type="file" accept="image/*" onChange={convertToBase64} />

      {image && <img width={100} height={100} src={image} alt="" />}

      <button onClick={handleUpload}>Upload Blog</button>

      {blogs.map((blog) => (
        <div>
          <h1>{blog.Main_Heading}</h1>
          <p>{blog.Main_Content}</p>
          <img src={blog.Display_Pic} alt="" />
        </div>
      ))
        }
    </div>
  );
};

export default UploadBlog;
