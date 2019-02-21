import React from "react";
import { Paragraph } from "grommet";

const CustomParagraph = (props) => (
  <Paragraph className="paragraph" {...props}>
    {props.children}
  </Paragraph>
)

export default CustomParagraph
