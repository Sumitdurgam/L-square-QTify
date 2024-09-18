import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import React from "react";
import englishSong from "../../assets/english_song.png";

function Cart() {
  return (
    <Box sx={{marginLeft: 3}}>
      <Card sx={{ maxWidth: 159, background: "var(--color-black)", borderRadius: "10px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="170"
            image={englishSong}
            alt="song1"
            sx={{ borderRadius: "10px 10px 0px 0px" }}
          />
          <CardContent
            sx={{ background: "var(--color-white)", borderRadius: "0px 0px 10px 10px", padding: "10px" }}
          >
            <Chip sx={{background: "var(--color-black)", color: "var(--color-white)"}} label="100 Follows" />
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Typography sx={{color: "var(--color-white)"}}>New English Songs</Typography>
        </CardActions> */}
      </Card>
      <Typography sx={{/*color: "var(--color-white)"*/}}>New English Songs</Typography>
    </Box>
  );
}

export default Cart;
