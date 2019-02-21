import React from "react";
import { Box, Heading, Image } from "grommet";
import Paragraph from "../Paragraph/paragraph"

const Catering = () => (
  <Box className="full-page-container">
    <Image
      className="full-page-background-img"
      fit="cover"
      src="img/menu-page-img.png"
    />
    <Box className="full-page-layout">
      <Heading margin="none">ENJOY OUR FOOD IN THE COMFORT OF YOUR HOME. OR OFFICE. OR WHEREVER.</Heading>
      <Paragraph>
        Our catering options consist of three different sized packages.
      </Paragraph>
      <Paragraph margin="none">
        Whenever you're ready to order, check out our locations to find the nearest Kokio to you!
      </Paragraph>
    </Box>
  </Box>
)

export default Catering
