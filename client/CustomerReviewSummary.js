import React from "react";
import LeafRatingComponent from "./LeafRatingComponent";
import { Grid, Cell } from "styled-css-grid";
import ReviewBars from "./ReviewBars";

class CustomerReviewSummary extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    console.log(this.props);
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
        <h4>Customer Reviews</h4>
        <LeafRatingComponent currentItem={this.props.currentItem} type="main" />
        <div
          style={{ fontSize: 13 }}
        >{`${this.props.currentItem.totalReviews} customer ratings`}</div>
        <div style={{ marginTop: "18px" }}></div>
        <ReviewBars currentItem={this.props.currentItem} />
        <hr></hr>
        <h5>By feature</h5>
        {/* need to make a 3X2 grid */}
        <Grid columns={"150px 150px"} justifyContent="space-around">
          <Cell middle style={{ display: "flex", verticalAlign: "middle" }}>
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
          <Cell
            center
            middle
            style={{ display: "flex", verticalAlign: "middle" }}
          >
            <LeafRatingComponent
              featureReview={this.props.currentItem.reviews[2]}
              currentItem={this.props.currentItem}
              type="featureReview"
            />
          </Cell>
          <Cell middle style={{ display: "flex", verticalAlign: "middle" }}>
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
          <Cell
            center
            middle
            style={{ display: "flex", verticalAlign: "middle" }}
          >
            <LeafRatingComponent
              featureReview={this.props.currentItem.reviews[0]}
              currentItem={this.props.currentItem}
              type="featureReview"
            />
          </Cell>
          <Cell middle style={{ display: "flex", verticalAlign: "middle" }}>
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
          <Cell
            center
            middle
            style={{ display: "flex", verticalAlign: "middle" }}
          >
            <LeafRatingComponent
              featureReview={this.props.currentItem.reviews[4]}
              currentItem={this.props.currentItem}
              type="featureReview"
            />
          </Cell>
        </Grid>
        <hr></hr>
        <h5>Review this product</h5>
        <div
          style={{
            marginBottom: 18,
            fontSize: 13
          }}
        >
          How about lettin others know what cha think?
        </div>
        <button
          style={{
            width: "300px"
          }}
        >
          {" "}
          <p
            style={{
              fontSize: 13,
              alignSelf: "center",
              marginBottom: 0
            }}
          >
            Write a customer review
          </p>
        </button>
      </div>
    );
  }
}

export default CustomerReviewSummary;
