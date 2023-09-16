import { Box, Grid } from "@mui/material";
import { Delete, Get } from "../config/api-methods/api-methods";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SMButton from "../components/SMButton";
import SMCard from "../components/SMCard";

export default function Product() {
    const navigate = useNavigate();
    const [listData, setListData] = useState<any>([]);

    const deletePost = (id: any) => {
        Delete(`comments/${id}`).then(
            () => {
                console.log("Post Deleted Successfully")
            }).catch((err) => {
                console.log(err)
            })
    }

    let getData = () => {
        Get("comments")
            .then((res) => {
                console.log(res.data);
                setListData([...res.data]);
            })
            .catch((err) => {
                console.log(err.message);
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
         <Grid container>
        <Grid
          item
          xs={10}
          sm={6}
          md={4}
          sx={{ padding: "5px", marginY: "5px" }}
        >
<SMButton color={"primary"} label="Add" variant={"contained"} onClick={() => navigate("/productForm")}/>
        </Grid>
        </Grid>
        <Grid container justifyContent="center" spacing={2}>
        {listData.map((x: any, i: any) => (
          <Grid
            item
            xs={11}
            sm={6}
            md={4}
            lg={3}
            sx={{ padding: "5px", marginY: "5px" }}
            key={i}
          >
            <SMCard body={x.body} email={x.email} name={x.name}  onClick={() => navigate(`/${x.id}`)} onDeleteClick={() => deletePost(x.id)} 
            onEditClick={() => {
                navigate(`/productForm/${x.id}`);
              }}/>
       </Grid>
        ))}
      </Grid>
    </Box>
        </>
    )
}