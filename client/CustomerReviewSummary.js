import React from "react";
import LeafRatingComponent from "./LeafRatingComponent";
import { Grid, Cell } from "styled-css-grid";
import ReviewBars from "./ReviewBars";

class CustomerReviewSummary extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div
        style={{
          width: "300px",
          height: "868px",
          marginLeft: "18px"
        }}
      >
        <h3>Customer Reviews</h3>
        <LeafRatingComponent currentItem={this.props.currentItem} type="main" />
        <div
          style={{ fontSize: 13 }}
        >{`${this.props.currentItem.totalReviews} customer ratings`}</div>
        <div style={{ marginTop: "18px" }}></div>
        <ReviewBars currentItem={this.props.currentItem} />
        <hr></hr>
        <h4>By feature</h4>
        {/* need to make a 3X2 grid */}
        <Grid columns={"150px 150px"} justifyContent="space-around">
          <Cell style={{ display: "flex", verticalAlign: "middle" }}>
            <div
              style={{
                alignSelf: "center",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              Handle
            </div>
          </Cell>
          <Cell style={{ display: "flex", verticalAlign: "middle" }}>
            <LeafRatingComponent
              currentItem={this.props.currentItem}
              type="featureReview"
            />
          </Cell>
          <Cell style={{ display: "flex", verticalAlign: "middle" }}>
            <div
              style={{
                alignSelf: "center",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              Smell
            </div>
          </Cell>
          <Cell style={{ display: "flex", verticalAlign: "middle" }}>
            <LeafRatingComponent
              currentItem={this.props.currentItem}
              type="featureReview"
            />
          </Cell>
          <Cell style={{ display: "flex", verticalAlign: "middle" }}>
            <div
              style={{
                alignSelf: "center",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              Appearance
            </div>
          </Cell>
          <Cell style={{ display: "flex", verticalAlign: "middle" }}>
            <LeafRatingComponent
              currentItem={this.props.currentItem}
              type="featureReview"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default CustomerReviewSummary;
