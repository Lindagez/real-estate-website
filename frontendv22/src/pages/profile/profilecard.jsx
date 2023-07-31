import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import { ChangeEvent, useState,File } from 'react';
import as from "./image/R (1).jpeg"
// STYLES
const styles = {
  details: {
    padding: "1rem",
    borderTop: "1px solid #e1e1e1"
  },
  value: {
    padding: "1rem 2rem",
    borderTop: "1px solid #e1e1e1",
    color: "#899499"
  }
};

//APP
export default function ProfileCard(props: any) {
    const [file, setFile] = useState();

const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  if (e.target.files) {
    setFile(e.target.files[0]);
  }
};

const handleUploadClick = () => {
  if (!file) {
    return;
  }

  // 👇 Uploading the file using the fetch API to the server
  fetch('https://httpbin.org/post', {
    method: 'POST',
    body: file,
    // 👇 Set headers manually for single file upload
    headers: {
      'content-type': file.type,
      'content-length': `${file.size}`, // 👈 Headers need to be a string
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
};

  return (
    <Card variant="outlined">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {/* CARD HEADER START */}
        <Grid item sx={{ p: "1.5rem 0rem", textAlign: "center" }}>
          {/* PROFILE PHOTO */}
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <PhotoCameraIcon
                sx={{
                  border: "5px solid white",
                  backgroundColor: "#ff558f",
                  borderRadius: "50%",
                  padding: ".2rem",
                  width: 35,
                  height: 35
                }}
                
              ></PhotoCameraIcon>
            }
          >
            <Avatar
              sx={{ width: 100, height: 100, mb: 1.5 }}
              src={as}
            ></Avatar>
          </Badge>

          {/* DESCRIPTION */}
          <Typography variant="h6">{props.name}</Typography>
          <Typography color="text.secondary">{props.sub}</Typography>
        </Grid>
        {/* CARD HEADER END */}

        {/* DETAILS */}
        <Grid container>
    
          {/* VALUES */}
       
        </Grid>

        {/* BUTTON */}
        <Grid item style={styles.details} sx={{ width: "100%" }}>
          {/* <Button
            variant="contained"
            color="secondary"
            sx={{ width: "99%", p: 1, my: 2 }}
          >
             */}
        
          <div>
      <input type="file" onChange={handleFileChange} />

      <div>{file && `${file.name} - ${file.type}`}</div>

      <button onClick={handleUploadClick}>Upload</button>
    </div>  
        </Grid>
      </Grid>
    </Card>
    
  );
}