import React from "react";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import FileBase from "react-file-base64";
import { addPost } from "../redux/postSlice";
import { useDispatch } from "react-redux";

function Form() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

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
    dispatch(addPost(data));
  };

  return (
    <div>
      <TextField
        name="creator"
        variant="outlined"
        label="Creator"
        fullWidth
        value={data.creator}
        onChange={(e) => setData({ ...data, creator: e.target.value })}
      />
      <TextField
        name="title"
        variant="outlined"
        label="Title"
        fullWidth
        value={data.title}
        onChange={(e) => setData({ ...data, title: e.target.value })}
      />
      <TextField
        name="message"
        variant="outlined"
        label="message"
        fullWidth
        value={data.message}
        onChange={(e) => setData({ ...data, message: e.target.value })}
      />
      <TextField
        name="tags"
        variant="outlined"
        label="Tags"
        fullWidth
        value={data.tags}
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
