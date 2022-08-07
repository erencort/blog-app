import React from "react";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import FileBase from "react-file-base64";
import { addPost, updatePost } from "../redux/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Form() {
  const dispatch = useDispatch();
  const currentId = useSelector((state) => state.post.currentId);
  const post = useSelector((state) =>
    currentId ? state.post.items.find((post) => post._id === currentId) : null
  );
  const [data, setData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  useEffect(() => {
    setData(post);
    console.log(data);
  }, [post]);

  const clear = () => {
    setData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const addPostHandle = () => {
    if (currentId) {
      dispatch(updatePost({ currentId, data }));
      console.log(data);
    } else {
      dispatch(addPost(data));
    }
  };

  return (
    <div className="post-form">
      <TextField
        name="creator"
        variant="outlined"
        label="Creator"
        fullWidth
        value={data?.creator}
        onChange={(e) => setData({ ...data, creator: e.target.value })}
      />
      <TextField
        name="title"
        variant="outlined"
        label="Title"
        fullWidth
        value={data?.title}
        onChange={(e) => setData({ ...data, title: e.target.value })}
      />
      <TextField
        name="message"
        variant="outlined"
        label="message"
        fullWidth
        value={data?.message}
        onChange={(e) => setData({ ...data, message: e.target.value })}
      />
      <TextField
        name="tags"
        variant="outlined"
        label="Tags"
        fullWidth
        value={data?.tags}
        onChange={(e) => setData({ ...data, tags: e.target.value })}
      />
      <FileBase
        type="file"
        multiple={false}
        onDone={({ base64 }) => setData({ ...data, selectedFile: base64 })}
      />
      <Button onClick={addPostHandle} variant="contained">
        Submit
      </Button>
      <Button onClick={clear} variant="contained">
        Clear
      </Button>
    </div>
  );
}

export default Form;
