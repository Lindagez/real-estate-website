import React, { CSSProperties } from "react";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

//APP
export default function SettingsCard(props: any) {
  //STATES - for the tabs
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  //RETURN
  return (
    <section>
      <div>
    <Card variant="outlined" sx={{ height: "100%", width: "80%" }}>
      {/* TABS */}
      <br></br>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab value="one" label="Account" />
       
      </Tabs>
      <Divider></Divider>

   
      <CardContent
        sx={{
          p: 3,
          maxHeight: { md: "60vh" },
          textAlign: { xs: "center", md: "start" }
        }}
      >
       
        <Grid
          container
          direction={{ xs: "column", md: "row" }}
          alignItems="stretch"
          spacing={4}
        >
          {/* ROW 1 */}
          {/* FIRST NAME */}
          <Grid item xs={6}>
            <Typography>First Name</Typography>
            <TextField
              fullWidth
              margin="dense"
              size="small"
              id="first-name"
              label={props.firstName}
            />
          </Grid>

       
          <Grid item xs={6}>
            <Typography>Middle Name</Typography>
            <TextField
              fullWidth
              margin="dense"
              size="small"
              id="last-name"
              label={props.lastName}
            />
          </Grid>

         
          <Grid item xs={6}>
            <Typography>Phone Number</Typography>
            <TextField
              fullWidth
              margin="dense"
              size="small"
              id="phone"
              label={props.phone}
            />
          </Grid>

          {/* EMAIL */}
          <Grid item xs={6}>
            <Typography>Email Address</Typography>
            <TextField
              fullWidth
              margin="dense"
              size="small"
              id="email"
              label={props.email}
            />
          </Grid>

          {/* ROW 3 */}
          {/* CITY */}
          <Grid item xs={6}>
            <Typography>City</Typography>
            <TextField
              fullWidth
              margin="dense"
              size="small"
              id="city"
              label={props.city}
            />
          </Grid>

          {/* COUNTRY */}
          <Grid item xs={6}>
            <Typography>Country</Typography>
            <TextField
              fullWidth
              margin="dense"
              size="small"
              id="country"
              label={props.country}
            />
          </Grid>

          {/* BUTTON */}
          <Grid item xs={12}>
            <Divider></Divider>
            <Button
              sx={{ my: "1rem" }}
              size="large"
              variant="contained"
              color="secondary"
            >
              Update
            </Button><br/>
            see form 
            <a href="/customers">click here</a>
          </Grid>
        </Grid>
      </CardContent>
    </Card></div><br/>
<div>
<Card variant="outlined" sx={{ height: "100%", width: "80%" }}>
{/* TABS */}
<br></br>


 

<Divider></Divider>

{/* MAIN CONTENT CONTAINER */}
<CardContent
  sx={{
    p: 3,
    maxHeight: { md: "60vh" },
    textAlign: { xs: "center", md: "start" }
  }}
>
  
  {/* FIELDS */}
  <Grid
    container
    direction={{ xs: "column", md: "row" }}
    alignItems="stretch"
    spacing={4}
  >
    {/* ROW 1 */}
   

    {/* BUTTON */}
    <Grid item xs={12}>
      <Divider></Divider>
      {/* <Button
        sx={{ my: "1rem" }}
        size="large"
        variant="contained"
        color="secondary"
      >
        Update
      </Button><br/> */}
       <p>5000</p>
      see form 
      <a href="/slip">  click here</a>
      <div className=''>
      {/* <div className='mb-2 text-muted small'>
                              <span>{'Status: ' + pricingItem.status}</span>
                            </div> */}
                              <span>{'Status: '}</span>
                            </div>
    </Grid>
  </Grid>
</CardContent>
</Card></div><br/>
<div>
<Card variant="outlined" sx={{ height: "100%", width: "80%" }}>
{/* TABS */}
<br></br>


 

<Divider></Divider>

{/* MAIN CONTENT CONTAINER */}
<CardContent
  sx={{
    p: 3,
    maxHeight: { md: "60vh" },
    textAlign: { xs: "center", md: "start" }
  }}
>
  
  {/* FIELDS */}
  <Grid
    container
    direction={{ xs: "column", md: "row" }}
    alignItems="stretch"
    spacing={4}
  >
    
    {/* ROW 1 */}
   

    {/* BUTTON */}
    <Grid item xs={12}>
      <Divider></Divider>
      

      {/* <Button
        sx={{ my: "1rem" }}
        size="large"
        variant="contained"
        color="secondary"
      >

        Update
      </Button><br/> */}
      <p>500000</p>
      see form 
      <a href="/slip">  click here</a>
      <div className=''>
      {/* <div className='mb-2 text-muted small'>
                              <span>{'Status: ' + pricingItem.status}</span>
                            </div> */}
                              <span>{'Status: '}</span>
                            </div>
    </Grid>
  </Grid>
</CardContent>
</Card></div><br/>
<div>
<Card variant="outlined" sx={{ height: "100%", width: "80%" }}>
{/* TABS */}
<br></br>


 

<Divider></Divider>

{/* MAIN CONTENT CONTAINER */}
<CardContent
  sx={{
    p: 3,
    maxHeight: { md: "60vh" },
    textAlign: { xs: "center", md: "start" }
  }}
>
  
  {/* FIELDS */}
  <Grid
    container
    direction={{ xs: "column", md: "row" }}
    alignItems="stretch"
    spacing={4}
  >
    {/* ROW 1 */}
   

    {/* BUTTON */}
    <Grid item xs={12}>
      <Divider></Divider>
      {/* <Button
        sx={{ my: "1rem" }}
        size="large"
        variant="contained"
        color="secondary"
      >
        Update
      </Button><br/> */}
      <p>500000</p>
      see form 
      <a href="/slip">   click here</a>
      <div className=''>
      {/* <div className='mb-2 text-muted small'>
                              <span>{'Status: ' + pricingItem.status}</span>
                            </div> */}
                              <span>{'Status: '}</span>
                            </div>
    </Grid>
  </Grid>
</CardContent>
</Card></div><br/>
<div>
  
<Card variant="outlined" sx={{ height: "100%", width: "80%" }}>
{/* TABS */}
<br></br>


 

<Divider></Divider>

{/* MAIN CONTENT CONTAINER */}
<CardContent
  sx={{
    p: 3,
    maxHeight: { md: "60vh" },
    textAlign: { xs: "center", md: "start" }
  }}
>

  {/* FIELDS */}
  <Grid
    container
    direction={{ xs: "column", md: "row" }}
    alignItems="stretch"
    spacing={4}
  >
    {/* ROW 1 */}
   

    {/* BUTTON */}
    <Grid item xs={12}>
      <Divider></Divider>
      {/* <Button
        sx={{ my: "1rem" }}
        size="large"
        variant="contained"
        color="secondary"
      >
        Update
      </Button><br/> */}
      <p>500000</p>
      see form 
      <a href="/slip">    click here</a>
      <div className=''>
      {/* <div className='mb-2 text-muted small'>
                              <span>{'Status: ' + pricingItem.status}</span>
                            </div> */}
                              <span>{'Status: '}</span>
                            </div>
                            <div>

                            </div>
                             <Button
        sx={{ my: "1rem" }}
        size="large"
        variant="contained"
        color="secondary"
      >
      ADD 
      </Button><br/> 
    </Grid>
  </Grid>
</CardContent>
</Card></div>
</section>
  );
}
