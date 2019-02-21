import React from "react";
import { Box, Heading, Image, Text } from "grommet";
import "./menu.scss"

const Menu = () => (
  <Box className="full-page-container inverted">
    <Box className="full-page-layout">
      <Box className="menu-header">
        <Heading margin="none" alignSelf="center">MENU</Heading>
        <Text className="menu-vary" size="xsmall">
          Although we guarantee the same great taste and quality at all locations, prices and menu items may vary!
        </Text>
      </Box>
      <Image
        className="menu-img"
        fit="cover"
        src="img/menu-img-1.png"
      />
      <Image
        className="menu-img"
        fit="cover"
        src="img/menu-img-2.png"
      />
      <Image
        className="menu-img"
        fit="cover"
        src="img/menu-img-3.png"
      />
      <Image
        className="menu-img"
        fit="cover"
        src="img/menu-img-4.png"
      />
      <Image
        className="menu-img"
        fit="cover"
        src="img/menu-img-5.png"
      />
      <Image
        className="menu-img"
        fit="cover"
        src="img/menu-img-6.png"
      />
      <Image
        className="menu-img"
        fit="cover"
        src="img/menu-img-7.png"
      />
    </Box>
  </Box>
);

export default Menu
