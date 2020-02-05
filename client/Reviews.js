import React from "react";
import { Grid, Cell } from "styled-css-grid";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <div>Customer Images</div>
        <Grid columns={"150px 150px 150px 150px 150px"} justifyContent="start">
          <Cell middle style={{ display: "flex", verticalAlign: "middle" }}>
            <div
              style={{
                alignSelf: "center",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              <img src="https://picsum.photos/200?random=4" />
            </div>
          </Cell>
        </Grid>
        <div>See all customer images</div>
      </div>
    );
  }
}

export default Reviews;
