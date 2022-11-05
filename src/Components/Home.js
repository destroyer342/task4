import React, { Component } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export default class Home extends Component {
  state = {
    users: [],
  };
  componentDidMount = () => {
    axios
      .get("https://fake-movie-database-api.herokuapp.com/api?s=batman")
      .then((res) => {
        console.log(res.data);
        this.setState({
          users: res.data.Search,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const usersData = this.state.users
      .filter((item, index) => index < 4)
      .map((info) => {
        return (
          <div style={{ display: "inline-block" }} key={info.imdbID}>
            <Card sx={{ minWidth: 500, display: "inline-block" }}>
              <CardMedia
                component="img"
                height="140"
                image={info.Poster}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {info.Title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Year : {info.Year}
                </Typography>
              </CardContent>
              {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions> */}
            </Card>
            <br/>
          </div>
        );
      });
    return <>{usersData}</>;
  }
}
