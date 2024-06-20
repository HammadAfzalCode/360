import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/Footer";
import Container from "./../components/Container";
import Work from "./../components/Work";
import Head from "next/head";

export default function Showcase() {
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
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: "Clash Display",
                    fontSize: { xs: "40px", md: "60px" },
                  }}
                >
                  Our Projects
                </Typography>

                {/* <Typography
                  sx={{
                    color: "red",
                    lineHeight: "1.5",
                    display: "flex",
                    gap: "20px",
                    fontSize: { xs: "40px", md: "60px" },
                  }}
                >
                  & Collaborations
                </Typography> */}
              </Grid>

{/* main hero div  */}
              <Grid
                item
                xs={12}
                md={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link href="./project-details">
                  <img
                  className="greyscale"
                    src="/fintechhreo.svg"
                    alt="Project Showcase"
                    style={{
                     maxWidth: "100%",
                      height: "auto",
                      paddingTop: "40px",
                    }}
                  />
                </Link>
              </Grid>
              {/* <Grid container spacing={2}>
              </Grid>

              <Grid container spacing={2}>
              </Grid> */}

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ justifyContent: "space-between" , gap:'20px'}}>
                  <Box
                    sx={{
                        display:"flex"
,                      flexDirection: "column",
                      alignItems: "start",
                      justifyContent: "start",
                      textAlign: "center",
                      position: "relative",
                    }}
                  >
                    <Link href="./project-details">
                      {/* <Typography
                        variant="h1"
                        sx={{
                          width: {
                            lg: "600",
                            md: "600",
                            sm: "400",
                            xs: "300",
                          },
                          color: "#faf9f6a9",
                          textShadow: "4px 4px 4px black",
                          border: "2px solid black",
                          position: "absolute",
                          display: "flex",
                          top: "60%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          textAlign: "center",
                          cursor: "pointer",
                          fontFamily: "cursive",
                          fontSize: {
                            xs: "14px",
                            sm: "22px",
                            md: "31px",
                            lg: "46px",
                          },
                          zIndex: '1'
                        }}
                      >
                        Innovative Project 1
                      </Typography> */}
                    </Link>
                    <Link href="./project-details">
                      <img
                                        className="greyscale"

                        src="/MEFIChero.PNG"
                        alt="Project Showcase"
                        style={{
                            maxWidth: "97%",
                          height: "auto",
                          paddingTop: "10px",
                        }}
                      />
                    </Link>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <Link href="./project-details">
                      <img
                                        className="greyscale"

                        src="/fintechhreo.svg"
                        alt="Project Showcase"
                        style={{
                            maxWidth: "97%",
                            height: "auto",
                          paddingTop: "10px",
                        }}
                      />
                    </Link>
                  </Box>
                </Box>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <Link href="./project-details">
                      <img
                                        className="greyscale"

                        src="/fintechhreo.svg"
                        alt="Project Showcase"
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          paddingTop: "10px",
                        }}
                      />
                    </Link>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <Link href="./project-details">
                      <img
                                        className="greyscale"

                        src="/Hassana.PNG"
                        alt="Project Showcase"
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          paddingTop: "10px",
                        }}
                      />
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Box>
        </Container>
        <Work />
        <Footer />
      </Box>
    </>
  );
}
