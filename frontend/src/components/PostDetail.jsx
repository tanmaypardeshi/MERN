import React, { useState, useEffect } from "react";
import { makeStyles, Button, Typography, Container } from "@material-ui/core";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "10vh",
  },
  card: {
    maxWidth: 345,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const PostDetail = () => {
  const classes = useStyles();
  const params = useParams();
  const history = useHistory();

  const [post, setPost] = useState(null);

  const getPost = () => {
    let url = `http://localhost:8000/api/post/${params.id}`;
    axios
      .get(url)
      .then((res) => {
        let data = res.data.data[0];
        setPost({
          id: data._id,
          title: data.title,
          body: data.body,
        });
      })
      .catch(console.log);
  };

  useEffect(() => {
    getPost();
  });

  return (
    <Container maxWidth="md" className={classes.root}>
      {post && (
        <>
          <Typography variant="h2">{post.title}</Typography>
          <Typography variant="body1" color="textSecondary">
            {post.id}
          </Typography>
          <Typography variant="h5">{post.body}</Typography>
        </>
      )}
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "2%" }}
        onClick={() => history.push("/")}
      >
        Go To Post List
      </Button>
    </Container>
  );
};

export default PostDetail;
