import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const Contact = () => {
  return (
    <div style={{ display: "inline-block" }}>
      <Card sx={{ minWidth: 500, display: "inline-block" }}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Mobile Number:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            +639354507889
          </Typography>
        </CardContent>
        {/* <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions> */}
      </Card>
      <br />
      <Card sx={{ minWidth: 500, display: "inline-block" }}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Email
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email@email.com
          </Typography>
        </CardContent>
        {/* <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions> */}
      </Card>
      <br />
      <Card sx={{ minWidth: 500, display: "inline-block" }}>
        <div>
          <div>
            <iframe
              width="584"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=central%20india&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
      </Card>
      <br />
    </div>
  );
};

export default Contact;
