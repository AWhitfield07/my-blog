import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';

import Sidebar from './Sidebar';


const sections = [
  { title: 'Graphic', url: '#' },
  { title: 'Horror', url: '#' },
  { title: 'Movie', url: '#' },
  { title: 'TV', url: '#' },
  { title: 'Pop culture', url: '#' },
  { title: 'Music', url: '#' },
  { title: 'Brands', url: '#' },
  { title: 'Hoodies', url: '#' },
  { title: 'Longsleeve', url: '#' },
  { title: 'Sweatshirts', url: '#' },
];

const mainFeaturedPost = {
  title: 'Welcome to Ahmirs closet',
  description: 
    "Need some tees? Came to the right place!",
  image: 'https://th.bing.com/th/id/R.bc466de86f641ecc013a4bc87ce48707?rik=hdvKY8Q1dnvIBA&riu=http%3a%2f%2fblog.tshirt-factory.com%2fwp-content%2fuploads%2f2012%2f05%2fbig-pile-of-tshirts.jpg&ehk=sDaDS0OAqQwfLtQMuop9utiyGxnlNMhe%2bYXPKjZsBPI%3d&risl=&pid=ImgRaw&r=0',
  imageText: 'main image description',
  
};

const featuredPosts = [
  {
    title: 'Most popular',
    date: '',
    description:
      'The most popular tees from my closet.',
    image: 'https://cdn.media.amplience.net/s/hottopic/16187166_hi?$productMainDesktopRetina$',
    imageLabel: 'Image Text',
  },
  {
    title: 'Recently added',
    date: '',
    description:
      'New items in my closet.',
    image: 'https://cdn.media.amplience.net/s/hottopic/18309745_hi?$productMainDesktopRetina$',
    imageLabel: 'Image Text',
  },
];


const sidebar = {
  title: 'About',
  description:
    'Ahmirs closet is a way for me to sell my favorite tees in my collection to people who also enjoy the same kinds of things I do!',
  archives: [
    { title: 'Graphic', url: '#' },
    { title: 'Horror', url: '#' },
    { title: 'Movie', url: '#' },
    { title: 'TV', url: '#' },
    { title: 'Pop culture', url: '#' },
    { title: 'Music', url: '#' },
    { title: 'Brands', url: '#' },
    { title: 'Hoodie', url: '#' },
    { title: 'Longsleeve', url: '#' },
    { title: 'Button up', url: '#' },
    { title: 'Sweatshirts', url: '#' },
  ],
  social: [
    { name: 'Instagram', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
           
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      
    </ThemeProvider>
  );
}