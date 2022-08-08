import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../redux/postSlice";
import PostCard from "./PostCard";

function Posts() {
  const posts = useSelector((state) => state.post.items);
  const status = useSelector((state) => state.post.status);
  const currentId = useSelector((state) => state.post.currentId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);
  return (
    <div>
      <Grid container spacing={2}>
        {posts &&
          posts.map((item) => (
            <Grid xs={4}>
              <PostCard
                key={item._id}
                id={item._id}
                createdAt={item.createdAt}
                likeCount={item.likeCount}
                section={item.section}
                subTitle={item.subTitle}
                tags={item.tags}
                title={item.title}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default Posts;
