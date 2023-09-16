import { Box, Grid, Typography } from "@mui/material";
import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Get } from "../config/api-methods/api-methods";

export default function ProductDetail() {
  let params = useParams();
  let [product, setProduct] = useState<any>({});

  let getData = () => {
    Get(`comments/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setProduct({ ...res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box
        sx={{ flexGrow: 1, padding: "5px", marginY: "5px", marginX: "15px" }}
        justifyContent="center"
      >
        <Grid item xs={10}>
          <Box
            style={{
              padding: 10,
              backgroundColor: "#ebd4fa",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
              }}
            >
               {product.id ?? ""}
            </Typography>
            <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
            }}
            >{product.name ?? ""}</Typography>
            <Typography
            variant="h6"
            sx={{
              fontWeight: "300",
            }}
            >{product.email ?? ""}</Typography>
            <Typography
            variant="h6"
            sx={{
              fontWeight: "300",
            }}
            >{product.body ?? ""}</Typography>
          </Box>
        </Grid>
      </Box>
    </>
  );
}
