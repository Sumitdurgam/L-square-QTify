import {
  Box,
  Card,
  CardActionArea,
  // CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import React from "react";
// import englishSong from "../../assets/english_song.png";


function Cart({ album }) {
  return (
    <Box sx={{ marginLeft: 3 }}>
      <Card
        sx={{
          maxWidth: 300,
          // maxHeight: 400,
          background: "var(--color-black)",
          borderRadius: "10px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="170"
            image={album.image}
            alt={album.title}
            sx={{ borderRadius: "10px 10px 0px 0px" }}
          />
          <CardContent
            sx={{
              background: "var(--color-white)",
              borderRadius: "0px 0px 10px 10px",
              padding: "10px",
            }}
          >
            <Chip
              sx={{
                background: "var(--color-black)",
                color: "var(--color-white)",
              }}
              label={`${album.follows} follows`}
            />
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Typography sx={{color: "var(--color-white)"}}>New English Songs</Typography>
        </CardActions> */}
      </Card>
      <Typography
        sx={{
          mt:1,
          fontFamily: "Poppins, sans-serif",
          fontWeight: 400,
          fontSize: "14px",
          color: "var(--color-white)",
        }}
      >
        {album.title}
      </Typography>
    </Box>
  );
}

export default Cart;
