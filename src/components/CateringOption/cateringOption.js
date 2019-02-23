import React from "react";
import { Box, Text } from "grommet";
import './cateringOption.scss';

const CateringOption = (props) => (
  <Box className="catering-option">
    <Text className="catering-option-header" size="xlarge">
      {props.size} {props.people}
    </Text>
    {
      props.items.map(item => (
        <Text
          className="catering-option-item"
          key={item.key}
        >
          {item.content}
        </Text>
      ))
    }
    <Text className="catering-option-price" size="large">{props.price}</Text>
  </Box>
)

export default CateringOption
