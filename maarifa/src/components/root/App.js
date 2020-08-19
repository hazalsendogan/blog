import React from "react";
import Container from "@material-ui/core/Container";
import Header from "../header/Header";
import { Grid, CssBaseline } from "@material-ui/core";
import MainFeatured from "../featuredPost/MainFeatured";
import Featured from "../featuredPost/Featured";
import MainPost from "../mainBlogPost/MainPost";
import Aside from "../aside/Aside";
import Navbar from "../navigation/Navbar";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import post1 from "../../blog-post.1.md";
import post2 from "../../blog-post.2.md";
import post3 from "../../blog-post.3.md";
import Footer from "../footer/Footer";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4841F7"
    },
    secondary: {
      main: "#2B2B2B",
    },
    success: {
      main: "#38B24C"
    },
    info: {
      main: "#00B8D9",
    },
    warning: {
      main: "#FFD400"
    },
    danger: {
      main: "#FF3131",
    },
  },
  typography: {
    fontFamily: 'Nunito',
    h1: {
      fontSize: '72px',
    },
    h2: {
      fontSize: '60px'
    },
    h3: {
      fontSize: '48px',
    },
    h4: {
      fontSize: '32px'
    },
    h5: {
      fontSize: '20px',
    },
    h6: {
      fontSize: '18px'
    },
    subtitle1: {
      fontSize: '16px'
    }
  }
});
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

const mainFeaturedPost = {
  title: "MOMENTUM",
  description: "A Maarifa blog about the fight against anti-Black racism",
  link: "Read Now",
  imageURL:
    "https://images.unsplash.com/photo-1591625832222-fe58485f590e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
};

const featuredPost = [
  {
    title:
      "15 Tools to Increase your Productivity as a (UI/UX) Designer in 2020",
    date: "Jul 27",
    description: "The remote-friendly edition of a designer toolkit",
    imageURL: "https://source.unsplash.com/random",
    link: "Continue Reading",
  },
  {
    title: "10 Principles for Color Usage in UI Design",
    date: "Jul 13",
    description: "Best practices, tips, and terminology for using color in UI.",
    imageURL: "https://source.unsplash.com/random",
    link: "Continue Reading",
  },
];

const posts = [post1, post2, post3];

const asideInfo = {
  about: {
    title: "About",
    description:
      "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  },
  archives: {
    title: "Archives",
    archiveLinks: [
      { title: "August 2020", to: "/" },
      { title: "July 2020", to: "/" },
      { title: "Jun 2020", to: "/" },
      { title: "May 2020", to: "/" },
      { title: "April 2020", to: "/" },
      { title: "March 2020", to: "/" },
      { title: "February 2020", to: "/" },
      { title: "January 2020", to: "/" },
      { title: "December 2019", to: "/" },
    ],
  },
  socials: {
    title: "Social Media",
    socialLinks: [
      { title: "GitHub", to: "/", icon: GitHubIcon },
      { title: "Twitter", to: "/", icon: TwitterIcon },
      { title: "Facebook", to: "/", icon: FacebookIcon },
    ],
  },
};

const footerInfo = {
  title: "Maarifa",
  description: "We are ready to learn more about you and your needs",
  copyright: "Copyright © Maarifa 2020.",
};

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Header headerInfo={headerInfo} />
          <Navbar navbarLinks={navbarLinks} />
          <MainFeatured mainFeaturedPost={mainFeaturedPost}/>
          <Grid container spacing={2}>
            {featuredPost.map((post) => (
              <Grid item key={post.title} sm="12" md="6">
                <Featured key={post.title} post={post} />
              </Grid>
            ))}
          </Grid>
          <Grid container>
            <Grid item sm="12" md="8">
              <MainPost title="From the firehose" posts={posts} />
            </Grid>
            <Grid item sm="12" md="4">
              <Aside asideInfo={asideInfo} />
            </Grid>
          </Grid>
        </Container>
        <Footer footerInfo={footerInfo}></Footer>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
