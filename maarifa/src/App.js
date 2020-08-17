import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./components/header/Header";
import { Grid } from "@material-ui/core";
import MainFeatured from "./components/featuredPost/MainFeatured";
import Featured from "./components/featuredPost/Featured";
import MainPost from "./components/mainBlogPost/MainPost";
import Aside from "./components/aside/Aside";
import Navbar from "./components/navigation/Navbar";

const headerInfo = {
  title: "Maarifa Blog",
  menuLink: [
    {
      linkName: "Pricing",
      to: "/",
    },
    {
      linkName: "Login",
      to: "/",
    },
    {
      linkName: "Sign Up",
      to: "/",
    },
  ],
};

const navbarLinks = [
  { linkName: "Technology", to: "#" },
  { linkName: "Design", to: "#" },
  { linkName: "Culture", to: "#" },
  { linkName: "Business", to: "#" },
  { linkName: "Politics", to: "#" },
  { linkName: "Opinion", to: "#" },
  { linkName: "Science", to: "#" },
  { linkName: "Health", to: "#" },
  { linkName: "Style", to: "#" },
  { linkName: "Travel", to: "#" },
];

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header headerInfo={headerInfo} />
        <Navbar navbarLinks={navbarLinks} />
        <main>
          <section>
            <Grid container>
              <Grid item xs="12">
                <MainFeatured />
              </Grid>
              <Grid item xs="12" md="6">
                <Featured />
              </Grid>
              <Grid item xs="12" md="6">
                <Featured />
              </Grid>
            </Grid>
          </section>
          <section>
            <Grid container>
              <Grid item xs="12" md="8">
                <MainPost />
              </Grid>
              <Grid item xs="12" md="4">
                <Aside />
              </Grid>
            </Grid>
          </section>
        </main>
      </Container>
    </React.Fragment>
  );
}

export default App;
