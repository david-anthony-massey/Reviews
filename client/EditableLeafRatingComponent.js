import React from "react";

export default class EditableRatingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      totalStars: this.props.totalStars,
      starImages: {
        full: this.props.full,
        empty: this.props.empty,
        height: this.props.height,
        width: this.props.width
      },
      currentStarsValues: []
    };

    this.updateStars = this.updateStars.bind(this);
  }

  updateStars(num) {
    let starBulArr = [];
    for (let i = 0; i < this.state.totalStars; i++) {
      if (i <= num) {
        starBulArr.push(true);
      } else {
        starBulArr.push(false);
      }
    }

    this.setState({
      currentStarsValues: starBulArr
    });
  }

  componentDidMount() {
    this.updateStars(-1);
  }

  render() {
    return (
      <div>
        {this.state.currentStarsValues.map((starValue, indx) => {
          if (starValue) {
            return (
              <span key={indx}>
                <img
                  src={this.state.starImages.full}
                  alt={`${indx}`}
                  width={this.state.starImages.width}
                  height={this.state.starImages.height}
                  onClick={() => {
                    this.updateStars(indx);
                    if (this.props.starClickCallback) {
                      this.props.starClickCallback(indx + 1);
                    }
                  }}
                />
              </span>
            );
          } else {
            return (
              <span key={indx}>
                <img
                  src={this.state.starImages.empty}
                  alt={`${indx}`}
                  width={this.state.starImages.width}
                  height={this.state.starImages.height}
                  key={`${indx}`}
                  onClick={() => {
                    this.updateStars(indx);
                    if (this.props.starClickCallback) {
                      this.props.starClickCallback(indx + 1);
                    }
                  }}
                />
              </span>
            );
          }
        })}
      </div>
    );
  }
}
