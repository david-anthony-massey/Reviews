import React from "react";
import { Grid, Cell } from "styled-css-grid";

class ReviewWords extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    let words1 = [];
    let words2 = [];
    let words3 = [];
    let tempArr;
    for (let i = 0; i < 15; i++) {
      tempArr = this.props.currentItem.reviews[i].review_text.split(" ");
      if (i < 5) {
        words1.push(`${tempArr[0]} ${tempArr[1]}`);
      } else if (i < 11) {
        words2.push(`${tempArr[0]} ${tempArr[1]}`);
      } else {
        words3.push(`${tempArr[0]} ${tempArr[1]}`);
      }
    }

    return (
      <div>
        <div style={{ marginBottom: "20px" }}>Read reviews that mention</div>
        <Grid
          columns={"233px 233px 233px 233px"}
          justifyContent="start"
          areas={[
            "first_row first_row first_row first_row first_row",
            "second_row second_row second_row second_row second_row",
            "third_row third_row third_row third_row third_row"
          ]}
        >
          <Cell
            middle
            style={{ display: "flex", verticalAlign: "middle" }}
            area="first_row"
          >
            <div>
              {words1.map(keyWords => {
                return (
                  <button style={{ marginLeft: "30px" }}> {keyWords} </button>
                );
              })}
            </div>
          </Cell>
          <Cell
            middle
            style={{ display: "flex", verticalAlign: "middle" }}
            area="second_row"
          >
            <div>
              {words2.map((keyWords, indx) => {
                if (indx === 0) {
                  return <button> {keyWords} </button>;
                } else {
                  return (
                    <button style={{ marginLeft: "30px" }}> {keyWords} </button>
                  );
                }
              })}
            </div>
          </Cell>
          <Cell
            middle
            style={{ display: "flex", verticalAlign: "middle" }}
            area="third_row"
          >
            <div>
              {words3.map(keyWords => {
                return (
                  <button style={{ marginLeft: "30px" }}>{keyWords}</button>
                );
              })}
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default ReviewWords;
