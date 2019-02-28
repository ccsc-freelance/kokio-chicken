import React from "react";
import Paragraph from "../Paragraph/paragraph";
import CateringOption from "../CateringOption/cateringOption";
import "./catering.scss";

const Catering = () => (
  <div className="box full-page">
    <img className="full-page-background-img" src="img/menu-page-img.png" alt="menu-page-img"/>
    <div className="box full-page-layout">
      <h1>ENJOY OUR FOOD IN THE COMFORT OF YOUR HOME. OR OFFICE. OR WHEREVER.</h1>
      <Paragraph>
        Our catering options consist of three different sized packages.
      </Paragraph>
      <Paragraph style={{margin: "2px 0 0"}}>
        Whenever you're ready to order, check out our locations to find the nearest Kokio to you!
      </Paragraph>
      <div className="box catering-options-container" direction="row">
        <CateringOption
          size="Small"
          people="(5-10 people)"
          price="$102"
          items={[
            {
              key: "chicken",
              content: "2 Whole Chickens (Choose 2 Flavors)"
            },
            {
              key: "wings",
              content: "30 Pcs Wings (Choose 3 Flavors)"
            },
            {
              key: "drumsticks",
              content: "10 Pcs Drumsticks (Choose 2 Flavors)"
            },
            {
              key: "riceCake",
              content: "1 Spicy Rice Cake"
            },
            {
              key: "salad",
              content: "Salad"
            }
          ]}
        />
        <CateringOption
          size="Medium"
          people="(10-15 people)"
          price="$144"
          items={[
            {
              key: "chicken",
              content: "3 Whole Chickens (Choose 3 Flavors)"
            },
            {
              key: "wings",
              content: "40 Pcs Wings (Choose 4 Flavors)"
            },
            {
              key: "drumsticks",
              content: "15 Pcs Drumsticks (Choose 3 Flavors)"
            },
            {
              key: "riceCake",
              content: "2 Spicy Rice Cake"
            },
            {
              key: "salad",
              content: "Salad"
            }
          ]}
        />
        <CateringOption
          size="Large"
          people="(15-20 people)"
          price="$187"
          items={[
            {
              key: "chicken",
              content: "4 Whole Chickens (Choose 4 Flavors)"
            },
            {
              key: "wings",
              content: "40 Pcs Wings (Choose 4 Flavors)"
            },
            {
              key: "drumsticks",
              content: "20 Pcs Drumsticks (Choose 4 Flavors)"
            },
            {
              key: "riceCake",
              content: "3 Spicy Rice Cake"
            },
            {
              key: "salad",
              content: "Salad"
            }
          ]}
        />
      </div>
    </div>
  </div>
)

export default Catering
