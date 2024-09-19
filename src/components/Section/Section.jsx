import { Box, Button, Grid2, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Section = () => {
  const [albums, setAlbums] = useState([]);
  // const [newAlbums, setNewAlbum] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const API_URL = "https://qtify-backend-labs.crio.do/albums/top";
  const Top_ALBUMS_API = "https://qtify-backend-labs.crio.do/albums/top";
  const NEW_ALBUMS = "https://qtify-backend-labs.crio.do/albums/top";

  useEffect(() => {
    getAlbumData(Top_ALBUMS_API, setAlbums);
    getAlbumData(NEW_ALBUMS, setAlbums);
  }, []);

  const getAlbumData = async () => {
    try {
      const response = await axios.get(API_URL);

      // console.log(response.data, "result");
      setAlbums(response.data);
    } catch (err) {
      console.log(err, "error from catch block");
    }
  };


  return (
    <Box
      sx={{
        padding: "0px 20px",
        display: "block",
      }}
    >
      <Box
        sx={{
          padding: "0px 0px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "20px",
          }}
        >
          Top Albums
        </Typography>
        <Button
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "20px",
            color: "var(--green)",
          }}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Collapse" : "Show All"}
        </Button>
      </Box>
      <Grid2 container sx={{ margin: "0px 0px", gap: "10px" }} spacing={0}>
        {albums.map((album) => (
          <Grid2 item key={album.id} size={{ md: 1.6 }}>
            {/* <Cart
              title={item.title}
              image={item.image}
              follows={item.follows}
            /> */}
            <Cart album={album} />
          </Grid2>
        ))}
      </Grid2>
      <br className="line"/>
      <Box
        sx={{
          padding: "0px 0px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "20px",
          }}
        >
          New Albums
        </Typography>
        <Button
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "20px",
            color: "var(--green)",
          }}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Collapse" : "Show All"}
        </Button>
      </Box>
      <Grid2 container sx={{ margin: "0px 0px", gap: "10px" }} spacing={0}>
        {albums.map((album) => (
          <Grid2 item key={album.id} size={{ md: 1.6 }}>
            {/* <Cart
              title={item.title}
              image={item.image}
              follows={item.follows}
            /> */}
            <Cart album={album} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Section;