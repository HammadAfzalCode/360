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
