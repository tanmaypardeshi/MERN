import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Typography,
  Container,
  Button,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "10vh",
  },
  card: {
    maxWidth: 345,
  },
}));
const PostList = () => {
  const classes = useStyles();
  const history = useHistory();
  const [posts, setPosts] = useState(null);

  const getPosts = () => {
    let url = "http://localhost:8000/api/posts";
    axios
      .get(url)
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch(console.log);
  };

  const handleDelete = (id) => {
    let url = `http://localhost:8000/api/delete/${id}`;
    axios
      .post(url)
      .then((res) => {
        let temp = posts;
        temp = temp.filter((obj) => obj._id !== id);
        setPosts(temp);
      })
      .catch(() => {
        alert("Could not delete post");
      });
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h2">Posts</Typography>
      <Grid container spacing={3}>
        {posts &&
          posts.map((post) => (
            <>
              <Grid item xs={4} key={post._id}>
                <Card className={classes.card} key={post._id}>
                  <CardActionArea>
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        {post.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        ID : {post._id}
                      </Typography>
                      <Typography variant="h5" component="h5">
                        {post.body}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                  <Button
                      size="small"
                      color="primary"
                      variant="contained"
                      onClick={() => history.push(`post/${post._id}`)}
                    >
                      View Post
                    </Button>
                    <Button
                      size="small"
                      color="secondary"
                      variant="contained"
                      onClick={() => handleDelete(post._id)}
                    >
                      Delete Post
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </>
          ))}
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              history.push("/create");
            }}
          >
            Add a new post
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PostList;
