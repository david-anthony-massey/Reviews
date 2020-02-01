// Importing libraries
import React from "react";
import Axios from "axios";
import StarRatingComponent from "react-star-rating-component";
import ReviewPage from "./ReviewPage";
import CustomerReviewSummary from "./CustomerReviewSummary";
import { Link, matchPath } from "react-router-dom";
import queryString from "query-string";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: { id: 25 }
    };

    this.url = `http://localhost:3030/dist?productID=${this.state.currentItem.id}`;
  }

  handleGetCurrentItem() {}

  handleSubmitReview() {
    // needs to POST to server with all the information that comes with the review
    // rating, comments,
    // will need to be added to a db table with a user, review, product
  }

  handleStartReview() {
    // needs to POST to server with all the information that comes with the review
    // rating, comments, ...?
    // will need to be added to a db table with a user, review, product
  }

  handleUploadImages() {
    // needs to POST image file data to the server
    // will need to be added to a db table with a user, review, product
  }

  handleSortReviewsByRating() {
    // Need to re-render review list with the a get request for only reviews of a certain rating
  }

  handleSortReviewsByKeyword() {
    // Need to search a review's text for a keyword and then display only the reviews that contain it
  }

  handleCommentReviews() {
    // Need to
  }

  componentDidMount() {
    Axios.get(this.url).then(currentItem => {
      console.log(currentItem);
      let betterCurrentItem = {
        id: currentItem.data[0]["id"],
        name: currentItem.data[0]["name"],
        description: currentItem.data[0]["DESCRIPTION"],
        price: currentItem.data[0]["price"],
        category_id: currentItem.data[0]["category_id"],
        rating: currentItem.data[1]["AVG(rating)"],
        totalReviews: currentItem.data[1]["COUNT(rating)"],
        reviews: currentItem.data[2],
        fiveLeafReviews: currentItem.data[3][0]["COUNT(rating)"],
        fourLeafReviews: currentItem.data[3][1]["COUNT(rating)"],
        threeLeafReviews: currentItem.data[3][2]["COUNT(rating)"],
        twoLeafReviews: currentItem.data[3][3]["COUNT(rating)"],
        oneLeafReviews: currentItem.data[3][4]["COUNT(rating)"]
      };
      this.setState({ currentItem: betterCurrentItem });
    });
  }

  render() {
    return (
      <div>
        <div>
          <CustomerReviewSummary currentItem={this.state.currentItem} />
        </div>
        <div>
          {/* <Customer_Images currentItem={this.currentItem} /> */}
          {/* <Mentioned_Words currentItem={this.currentItem} /> */}
          {/* <Review_Display currentItem={this.currentItem} /> */}
        </div>
      </div>
    );
  }
}

export default App;
