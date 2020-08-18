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
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import post1 from "./blog-post.1.md";
import post2 from "./blog-post.2.md";
import post3 from "./blog-post.3.md";

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
      {title: 'August 2020',to:'/'},
      {title: 'July 2020',to:'/'},
      {title: 'Jun 2020',to:'/'},
      {title: 'May 2020',to:'/'},
      {title: 'April 2020',to:'/'},
      {title: 'March 2020',to:'/'},
      {title: 'February 2020',to:'/'},
      {title: 'January 2020',to:'/'},
      {title: 'December 2019',to:'/'},
    ]
  },
  socials: {
    title: "Social Media",
    socialLinks: [
      {title: 'GitHub',to:'/',icon:GitHubIcon},
      {title: 'Twitter',to:'/', icon:TwitterIcon},
      {title: 'Facebook',to:'/', icon:FacebookIcon}
    ]
  }
}



function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header headerInfo={headerInfo} />
        <Navbar navbarLinks={navbarLinks} />
        <main>
          <section>
            <MainFeatured mainFeaturedPost={mainFeaturedPost} />
            <Grid container spacing={2}>
              {featuredPost.map((post) => (
                <Grid item xs="12" md="6">
                  <Featured key={post.title} post={post} />
                </Grid>
              ))}
            </Grid>
          </section>
          <section>
            <Grid container>
              <Grid item xs="12" md="8">
                <MainPost title="From the firehose" posts={posts} />
              </Grid>
              <Grid item xs="12" md="4">
                <Aside asideInfo={asideInfo}/>
              </Grid>
            </Grid>
          </section>
        </main>
      </Container>
    </React.Fragment>
  );
}

export default App;
