import React from "react";
import { Distribution, Image, Box, Text } from "grommet";
import "./home.scss"

const Home = () => (
  /* Insert landing screen here */
  <Distribution
    values={[
      { text: 'MENU', value: 25, color: "light-3" },
      { text: 'OUR STORY', value: 25, color: "brand" },
      { text: 'LOCATIONS', value: 25, color: "accent-1" },
      { text: 'CATERING', value: 25, color: "light-3" }
    ]}
  >
    {value => (
      <Box
        className="mini-page-container"
        background={value.color}
        direction="row"
        justify="center"
        pad="small"
        fill
      >
        <Image
          fit="cover"
          src="img/menu-page-img.png"
        />
        <Text className="mini-page-label" size="large">{value.text}</Text>
      </Box>
    )}
  </Distribution>
);

export default Home
