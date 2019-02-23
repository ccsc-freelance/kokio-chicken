import React from "react";
import { Box, Heading, Image } from "grommet";
import Paragraph from "../Paragraph/paragraph"

const OurStory = () => (
  <Box className="full-page">
    <Box className="full-page-container">
      <Image
        className="full-page-background-img"
        fit="cover"
        src="img/menu-page-img.png"
      />
      <Box className="full-page-layout">
        <Heading margin="none">WE'RE NOT JUST ANY CHICKEN PLACE.</Heading>
        <Heading margin="none">HERE'S WHY.</Heading>
        <Paragraph>
          Opened in 2013, Kokio Chicken has quickly become a favorite amongst Korean fried chicken lovers in the Los Angeles and Orange County neighborhood. Using only the freshest ingredients, Kokio's chicken is marinated and seasoned with a secret blend of herbs and spices and double-fried to achieve that irresistible flavor and crunch.
        </Paragraph>
        <Paragraph margin="none">
          Our menu consists of wings, drumsticks, whole chicken, and much more. Start your meal off with our popular appetizers like our honey-glazed rice cakes or hot waffle fries. Wash it all down with our carefully selected draft beer selection, including local craft brews. We also have a tasty selection of USDA-approved sauces from Korean-inspired to traditional buffalo - don't forget to use our famous green sauce to kick the flavor up a notch! For the budget and health-conscious, we provide lunch specials and grilled chicken items. 
        </Paragraph>
        <Paragraph>
          At Kokio, your satisfaction comes first. We hope that you enjoy the chicken as much as we enjoy making it. Come enjoy some of the best Korean fried chicken around!
        </Paragraph>
      </Box>
    </Box>
  </Box>
)

export default OurStory
