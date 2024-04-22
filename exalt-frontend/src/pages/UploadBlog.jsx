import React, { useEffect, useState } from "react";
import axios from "axios";
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../custom.css";

const UploadBlog = () => {
  const [mainHeading, setMainHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [mainContent, setMainContent] = useState("");
  const [authorPic, setAuthorPic] = useState(null);
  const [displayPic, setDisplayPic] = useState(null);
  const [authorName, setAuthorName] = useState("");
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

    console.log("main heading", mainContent);
    console.log("display", displayText);

    const requestData = {
      Main_Heading: mainHeading,
      Sub_Heading: subHeading,
      Display_Text: displayText,
      Author_Name: authorName,
      Author_Pic: authorPic,
      Main_Content: mainContent,
      Display_Pic: displayPic,
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
      setDisplayPic(fileReader.result);
    };

    fileReader.onerror = (error) => {
      console.error("Error: ", error);
    };
  }
  function convertToBase64AuthorPic(e) {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(e.target.files[0]);

    fileReader.onload = () => {
      console.log(fileReader.result);
      setAuthorPic(fileReader.result);
    };

    fileReader.onerror = (error) => {
      console.error("Error: ", error);
    };
  }

  return (
    <div className="flex flex-col  items-center justify-center gap-y-10">
      <h1 className="text-mainheading text-violet font-georgia">Upload Blog</h1>
      <input
        className="border-2 border-blogtext p-2 rounded-lg w-1/4"
        type="text"
        placeholder="Main Heading"
        value={mainHeading}
        onChange={(e) => setMainHeading(e.target.value)}
      />
      <input
        className="border-2 border-blogtext p-2 rounded-lg w-1/4"
        type="text"
        placeholder="Sub Heading"
        value={subHeading}
        onChange={(e) => setSubHeading(e.target.value)}
      />
      <QuillEditor
        className="h-48 w-1/4 p-2"
        theme="snow"
        value={displayText}
        onChange={(value) => setDisplayText(value)}
        
      />
      <input
        className="border-2 border-blogtext p-2 rounded-lg w-1/4"
        type="text"
        placeholder="Author Name"
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
      />
     
      <QuillEditor
        className="h-48 w-1/4 p-2"
        theme="snow"
        value={mainContent}
        onChange={(value) => setMainContent(value)}
        
      />
      <div>
        <h1 className="font-georgia text-button pb-2">
          Upload Background Picture
        </h1>
        <input type="file" accept="image/*" onChange={convertToBase64} />
      </div>
      <div>
        <h1 className="font-georgia text-button pb-2">Upload Author Picture</h1>
        <input
          type="file"
          accept="image/*"
          onChange={convertToBase64AuthorPic}
        />
      </div>

      {displayPic && <img width={100} height={100} src={displayPic} alt="" />}
      {authorPic && <img width={100} height={100} src={authorPic} alt="" />}

      <button
        className="px-5 py-3 bg-navyblue border-2 border-white hover:bg-white hover:border-2 hover:border-navyblue text-white text-button hover:text-navyblue"
        onClick={handleUpload}
      >
        Upload Blog
      </button>

      <div className="mx-10 md:px-20 flex flex-col gap-y-5 py-5 md:py-8 md:mx-60">
        {blogs.map((blog) => (
          <div>
            <div
              className="blogPostContent"
              dangerouslySetInnerHTML={{ __html: blog.Main_Content }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadBlog;
