import * as React from "react";
import Grid from "@mui/material/Grid";

const DashboardHome = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={7}>
        <h3> Welcome To Laptop Valley Dashboard</h3>
      </Grid>
      <Grid item xs={12} sm={12}>
        <img className="img-fluid" src="https://i.ibb.co/vQpPGwT/6.jpg" alt="" />
      </Grid>
    </Grid>
  );
};

export default DashboardHome;
