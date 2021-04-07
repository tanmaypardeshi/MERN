import React, { useState } from "react";
import {
  makeStyles,
  Container,
  Typography,
  Grid,
  Button,
  TextField,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "10vh",
  },
}));
const PostCreate = () => {
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const classes = useStyles();
  const history = useHistory();

  const handleCreate = () => {
    let url = "http://localhost:8000/api/create";
    axios.post(url, {title, body}).then(() => {
        setTitle("");
        setBody("");
        history.push("/");
    }).catch(() => {
        alert("Could not add post.")
    });
  };
  
  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h2">Create New Post</Typography>
      <Grid spacing={3}>
        <Grid item xs={12}>
          <form onSubmit={handleCreate}>
            <TextField
              required
              label="Enter Title"
              variant="outlined"
              fullWidth
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <TextField
              required
              label="Enter Body"
              variant="outlined"
              multiline
              rows={5}
              fullWidth
              onChange={(e) => {
                setBody(e.target.value);
              }}
              style={{ marginTop: "2%" }}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "2%" }}
              onClick={handleCreate}
            >
              Create
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PostCreate;
