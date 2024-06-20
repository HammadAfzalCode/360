import Head from "next/head";
import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/Footer";
import Container from "./../components/Container";
import Work from "./../components/Work";
import ShowcaseNewcard from "./ShowcaseNewcard";
export default function ShowcaseRed() {
  return (
    <>
      <Head>
        <title>Showcase - 360XpertsSolutions</title>
        <meta
          name="description"
          hreflang="en"
          content="360XpertSolutions' projects and expertise across various industries"
        />
        <meta name="author" content="360XpertSolutions" />
        <link rel="canonical" href="https://360xpertsolutions.com/Showcase" />
        <meta property="og:title" content="360XpertSolutions Showcase" />
        <meta
          property="og:description"
          content="Discover our projects, successful collaborations, and industry expertise. Explore innovative solutions, client success stories, and impactful case studies in various domains."
        />
        <meta
          name="keywords"
          content="360XpertSolutions, projects, collaborations, industry expertise, innovative solutions, client success stories, case studies"
        />
        <meta name="geo.region" content="PK-S" />
        <meta name="geo.placename" content="Karachi, Sindh, Pakistan" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta http-equiv="Content-Language" content="en" />
        <meta
          property="og:image"
          content="https://360xpertsolutions.com/assets/x.png"
        />
        <meta
          property="og:image"
          content="https://360xpertsolutions.com/assets/Rectangle1933%20(1).svg"
        />
        <meta
          property="og:image"
          content="https://360xpertsolutions.com/assets/Rectangle%201934.svg"
        />
        <meta
          property="og:image"
          content="https://360xpertsolutions.com/assets/Rectangle%201936.svg"
        />
        <meta
          property="og:image"
          content="https://360xpertsolutions.com/assets/Rectangle%201937.svg"
        />
      </Head>
      <Box>
        <Navbar />
        <Container>
          <Box>
          <Grid
              container
              spacing={2}
              sx={{ paddingTop: "10%", marginTop: "50px" }}
            >

<Typography
                  sx={{
                    color: "#fff",
                    fontFamily: "Clash Display",
                    fontSize: { xs: "40px", md: "60px" },
                  }}
                >
                  Our Projects
                </Typography>
            </Grid>
            <Grid sx={{display: "grid", gap:'10px', justifyContent:"space-between", gridTemplateColumns:"1fr 1fr 1fr"}}>


 <ShowcaseNewcard />
 <ShowcaseNewcard />
 <ShowcaseNewcard />
 
 <ShowcaseNewcard />
 <ShowcaseNewcard />
 <ShowcaseNewcard />
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function BasicGrid() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2}>
//         <Grid item xs={8}>
//           <Item>xs=8</Item>
//         </Grid>
//         <Grid item xs={4}>
//           <Item>xs=4</Item>
//         </Grid>
//         <Grid item xs={4}>
//           <Item>xs=4</Item>
//         </Grid>
//         <Grid item xs={8}>
//           <Item>xs=8</Item>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

