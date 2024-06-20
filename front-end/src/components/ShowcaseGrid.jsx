import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ActionAreaCard from "./ShowcaseNewcard";
import ShowcaseCard from "./ShowcaseNewcard";

export default function ShowcaseGrid() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        marginTop: "200px",
        marginX: "auto",
        maxWidth: "90vw",
      }}
    >
      <Grid container spacing={2} rowSpacing={4}>
        <Grid item xs={4}>
          <ShowcaseCard
            title="Fintech"
            description="Transforming Islamic Banking with Ease"
            img="/fintechhreo.svg"
          />
        </Grid>
        <Grid item xs={4}>
          <ShowcaseCard
            title="Fintech"
            description="Transforming Islamic Banking with Ease"
            img="/fintechhreo.svg"
          />
        </Grid>
        <Grid item xs={4}>
          <ShowcaseCard
            title="Fintech"
            description="Transforming Islamic Banking with Ease"
            img="/fintechhreo.svg"
          />
        </Grid>
        <Grid item xs={4}>
          <ShowcaseCard
            title="Fintech"
            description="Transforming Islamic Banking with Ease"
            img="/fintechhreo.svg"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
