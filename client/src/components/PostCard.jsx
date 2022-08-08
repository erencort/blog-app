import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePost,
  fetchPost,
  likePost,
  setCurrentId,
} from "../redux/postSlice";
import { useEffect } from "react";
import moment from "moment";

const PostCard = ({
  createdAt,
  likeCount,
  section,
  subTitle,
  tags,
  title,
  id,
  img,
}) => {
  const dispatch = useDispatch();
  const setCurrentIdHandle = () => {
    dispatch(setCurrentId(id));
  };

  const deleteHandler = async () => {
    await dispatch(deletePost(id));
    // updating posts
    dispatch(fetchPost());
  };

  const likeHandler = async () => {
    await dispatch(likePost(id));

    dispatch(fetchPost());
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={img} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {subTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {section}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography variant="body2" color="text.secondary">
          {tags && tags.map((item) => <span>{item}</span>)}
        </Typography>
        <span>{likeCount}</span>
        <Button onClick={likeHandler} size="small">
          Like
        </Button>
        <Button onClick={setCurrentIdHandle} size="small">
          Edit
        </Button>
        <Button onClick={deleteHandler} size="small">
          Delete
        </Button>
        <span>{moment(createdAt).fromNow()}</span>
      </CardActions>
    </Card>
  );
};

export default PostCard;
