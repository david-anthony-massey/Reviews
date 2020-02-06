import React from "react";
import { Grid, Cell } from "styled-css-grid";
import LeafRatingComponent from "./LeafRatingComponent";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    let reviews = this.props.currentItem.reviews.slice(0, 6);

    return (
      <div>
        <select>
          <option value="">Top Reviews</option>
          <option value="">Most Recent</option>
        </select>

        <Grid columns={"600px"} justifyContent="start">
          {reviews.map((review, indx) => {
            return (
              <div>
                <Cell
                  middle
                  style={{ display: "flex", verticalAlign: "middle" }}
                >
                  <div>
                    <img
                      src={`https://picsum.photos/50?random=${indx}`}
                      style={{ marginRight: "15px", borderRadius: "50%" }}
                    />
                    {`Random User  ${review.user_id}`}
                  </div>
                </Cell>
                <Cell
                  middle
                  style={{ display: "flex", verticalAlign: "middle" }}
                >
                  <LeafRatingComponent
                    currentItem={this.props.currentItem}
                    type="review"
                    reviewNum={indx}
                  />
                </Cell>
                <Cell
                  middle
                  style={{ display: "flex", verticalAlign: "middle" }}
                >
                  <div>{`${review.review_text}`}</div>
                </Cell>
              </div>
            );
          })}
        </Grid>
        <button>See more reviews</button>
      </div>
    );
  }
}

export default Reviews;
