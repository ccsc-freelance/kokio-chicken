import React from "react";
import { ThemeContext, Paragraph } from "grommet";

const CustomParagraph = (props) => (
  <ThemeContext.Extend
    value={{ global: { font: { family: "Average" } } }}
  >
    <Paragraph className="paragraph" {...props} />
  </ThemeContext.Extend>
)

export default CustomParagraph
