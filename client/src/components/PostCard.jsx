import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { setCurrentId } from "../redux/postSlice";
import { useEffect } from "react";

const PostCard = ({
  createdAt,
  likeCount,
  section,
  subTitle,
  tags,
  title,
  id,
}) => {
  const dispatch = useDispatch();
  const setCurrentIdHandle = () => {
    dispatch(setCurrentId(id));
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://picsum.photos/350/150"
        alt="green iguana"
      />
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
        <Button size="small">Like</Button>
        <Button onClick={setCurrentIdHandle} size="small">
          Edit
        </Button>
        <span>{createdAt}</span>
      </CardActions>
    </Card>
  );
};

export default PostCard;
