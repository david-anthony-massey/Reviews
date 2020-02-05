import React from "react";
import { Grid, Cell } from "styled-css-grid";

class ReviewWords extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    let words = [];
    let tempArr;
    for (let i = 0; i < 13; i++) {
      tempArr = this.props.currentItem.reviews[i].review_text.split(" ");
      words.push(`${tempArr[0]} ${tempArr[1]}`);
      console.log(words);
    }

    return (
      <div>
        <div>Read reviews that mention</div>
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
            <div
              style={{
                alignSelf: "center",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              {words.map(keyWords => {
                return <button> {keyWords} </button>;
              })}
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default ReviewWords;
