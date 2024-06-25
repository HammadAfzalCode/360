import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ShowcaseCard from "../../../components/ShowcaseNewcard";
import Navbar from "../../../components/Navbar";
import ProjectDetailCard from "../../../components/ProjectDetailCard";
import Image from "next/image";

const jsonData = {
  data: {
    id: 6,
    attributes: {
      createdAt: "2024-06-24T05:52:40.365Z",
      updatedAt: "2024-06-24T12:28:20.753Z",
      publishedAt: "2024-06-24T05:52:42.602Z",
      CardTitle: "Fintech",
      shortDescription: "Transforming Finance with Fast & Ease",
      cardImage: {
        data: [
          {
            id: 10,
            attributes: {
              name: "fintechHero.png",
              alternativeText: null,
              caption: null,
              width: 1728,
              height: 959,
              formats: {
                thumbnail: {
                  name: "thumbnail_fintechHero.png",
                  hash: "thumbnail_fintech_Hero_6f595b5596",
                  ext: ".png",
                  mime: "image/png",
                  path: null,
                  width: 245,
                  height: 136,
                  size: 19.28,
                  sizeInBytes: 19277,
                  url: "/uploads/thumbnail_fintech_Hero_6f595b5596.png",
                },
                small: {
                  name: "small_fintechHero.png",
                  hash: "small_fintech_Hero_6f595b5596",
                  ext: ".png",
                  mime: "image/png",
                  path: null,
                  width: 500,
                  height: 277,
                  size: 61.74,
                  sizeInBytes: 61743,
                  url: "/uploads/small_fintech_Hero_6f595b5596.png",
                },
                medium: {
                  name: "medium_fintechHero.png",
                  hash: "medium_fintech_Hero_6f595b5596",
                  ext: ".png",
                  mime: "image/png",
                  path: null,
                  width: 750,
                  height: 416,
                  size: 137.81,
                  sizeInBytes: 137806,
                  url: "/uploads/medium_fintech_Hero_6f595b5596.png",
                },
                large: {
                  name: "large_fintechHero.png",
                  hash: "large_fintech_Hero_6f595b5596",
                  ext: ".png",
                  mime: "image/png",
                  path: null,
                  width: 1000,
                  height: 555,
                  size: 261.34,
                  sizeInBytes: 261336,
                  url: "/uploads/large_fintech_Hero_6f595b5596.png",
                },
              },
              hash: "fintech_Hero_6f595b5596",
              ext: ".png",
              mime: "image/png",
              size: 88.82,
              url: "/uploads/fintech_Hero_6f595b5596.png",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2024-06-24T12:27:20.059Z",
              updatedAt: "2024-06-24T12:27:20.059Z",
            },
          },
        ],
      },
      detailPageImg: {
        data: [
          {
            id: 11,
            attributes: {
              name: "fintechHero.png",
              alternativeText: null,
              caption: null,
              width: 1728,
              height: 959,
              formats: {
                thumbnail: {
                  name: "thumbnail_fintechHero.png",
                  hash: "thumbnail_fintech_Hero_67e9a3aed5",
                  ext: ".png",
                  mime: "image/png",
                  path: null,
                  width: 245,
                  height: 136,
                  size: 19.28,
                  sizeInBytes: 19277,
                  url: "/uploads/thumbnail_fintech_Hero_67e9a3aed5.png",
                },
                small: {
                  name: "small_fintechHero.png",
                  hash: "small_fintech_Hero_67e9a3aed5",
                  ext: ".png",
                  mime: "image/png",
                  path: null,
                  width: 500,
                  height: 277,
                  size: 61.74,
                  sizeInBytes: 61743,
                  url: "/uploads/small_fintech_Hero_67e9a3aed5.png",
                },
                medium: {
                  name: "medium_fintechHero.png",
                  hash: "medium_fintech_Hero_67e9a3aed5",
                  ext: ".png",
                  mime: "image/png",
                  path: null,
                  width: 750,
                  height: 416,
                  size: 137.81,
                  sizeInBytes: 137806,
                  url: "/uploads/medium_fintech_Hero_67e9a3aed5.png",
                },
                large: {
                  name: "large_fintechHero.png",
                  hash: "large_fintech_Hero_67e9a3aed5",
                  ext: ".png",
                  mime: "image/png",
                  path: null,
                  width: 1000,
                  height: 555,
                  size: 261.34,
                  sizeInBytes: 261336,
                  url: "/uploads/large_fintech_Hero_67e9a3aed5.png",
                },
              },
              hash: "fintech_Hero_67e9a3aed5",
              ext: ".png",
              mime: "image/png",
              size: 88.82,
              url: "/uploads/fintech_Hero_67e9a3aed5.png",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2024-06-24T12:28:12.011Z",
              updatedAt: "2024-06-24T12:28:12.011Z",
            },
          },
          {
            id: 12,
            attributes: {
              name: "fintechProduct.png",
              alternativeText: null,
              caption: null,
              width: 1728,
              height: 1130,
              formats: {
                thumbnail: {
                  name: "thumbnail_fintechProduct.png",
                  hash: "thumbnail_fintech_Product_573f774725",
                  ext: ".png",
                  mime: "image/png",
                  path: null,
                  width: 239,
                  height: 156,
                  size: 21.7,
                  sizeInBytes: 21699,
                  url: "/uploads/thumbnail_fintech_Product_573f774725.png",
                },
                medium: {
                  name: "medium_fintechProduct.png",
                  hash: "medium_fintech_Product_573f774725",
                  ext: ".png",
                  mime: "image/png",
                  path: null,
                  width: 750,
                  height: 490,
                  size: 126.28,
                  sizeInBytes: 126281,
                  url: "/uploads/medium_fintech_Product_573f774725.png",
                },
                small: {
                  name: "small_fintechProduct.png",
                  hash: "small_fintech_Product_573f774725",
                  ext: ".png",
                  mime: "image/png",
                  path: null,
                  width: 500,
                  height: 327,
                  size: 66.05,
                  sizeInBytes: 66052,
                  url: "/uploads/small_fintech_Product_573f774725.png",
                },
                large: {
                  name: "large_fintechProduct.png",
                  hash: "large_fintech_Product_573f774725",
                  ext: ".png",
                  mime: "image/png",
                  path: null,
                  width: 1000,
                  height: 654,
                  size: 201.74,
                  sizeInBytes: 201741,
                  url: "/uploads/large_fintech_Product_573f774725.png",
                },
              },
              hash: "fintech_Product_573f774725",
              ext: ".png",
              mime: "image/png",
              size: 71.07,
              url: "/uploads/fintech_Product_573f774725.png",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2024-06-24T12:28:12.368Z",
              updatedAt: "2024-06-24T12:28:12.368Z",
            },
          },
          {
            id: 13,
            attributes: {
              name: "fintechHome.png",
              alternativeText: null,
              caption: null,
              width: 1500,
              height: 3248,
              formats: {
                thumbnail: {
                  name: "thumbnail_fintechHome.png",
                  hash: "thumbnail_fintech_Home_9472b21aad",
                  ext: ".png",
                  mime: "image/png",
                  path: null,
                  width: 72,
                  height: 156,
                  size: 13.21,
                  sizeInBytes: 13208,
                  url: "/uploads/thumbnail_fintech_Home_9472b21aad.png",
                },
                medium: {
                  name: "medium_fintechHome.png",
                  hash: "medium_fintech_Home_9472b21aad",
                  ext: ".png",
                  mime: "image/png",
                  path: null,
                  width: 346,
                  height: 750,
                  size: 128.17,
                  sizeInBytes: 128165,
                  url: "/uploads/medium_fintech_Home_9472b21aad.png",
                },
                small: {
                  name: "small_fintechHome.png",
                  hash: "small_fintech_Home_9472b21aad",
                  ext: ".png",
                  mime: "image/png",
                  path: null,
                  width: 231,
                  height: 500,
                  size: 68.61,
                  sizeInBytes: 68608,
                  url: "/uploads/small_fintech_Home_9472b21aad.png",
                },
                large: {
                  name: "large_fintechHome.png",
                  hash: "large_fintech_Home_9472b21aad",
                  ext: ".png",
                  mime: "image/png",
                  path: null,
                  width: 462,
                  height: 1000,
                  size: 204.36,
                  sizeInBytes: 204355,
                  url: "/uploads/large_fintech_Home_9472b21aad.png",
                },
              },
              hash: "fintech_Home_9472b21aad",
              ext: ".png",
              mime: "image/png",
              size: 251.69,
              url: "/uploads/fintech_Home_9472b21aad.png",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2024-06-24T12:28:12.800Z",
              updatedAt: "2024-06-24T12:28:12.800Z",
            },
          },
        ],
      },
    },
  },
  meta: {},
};
const ShowcaseDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Extracting only the ID
  const [showcaseDetail, setShowcaseDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(id)
  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:1337/api/showcase-datas/${id}?populate=*`
      );
      const json = await response.json();
      setShowcaseDetail(json.data);
      // console.log(showcaseDetail);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [id]);
  console.log(showcaseDetail?.attributes?.detailPageImg);
  const {detailPageImg} = showcaseDetail?.attributes
  console.log(detailPageImg)
  return (
    <>
    <Navbar/>
    <Box sx={{ flexGrow: 1, marginTop: "200px",
        marginX: "auto",
        maxWidth: "90vw", }}>
      <Grid container spacing={2}>
        <Grid xs={8}>
         
        </Grid>
        <Grid xs={4}>
        <Image />
        </Grid>
        <Grid xs={4}>
        <Image />
        </Grid>
        <Grid xs={8}>
        <Image />
        </Grid>
      </Grid>
    </Box></>
  );
}


export default ShowcaseDetail;
