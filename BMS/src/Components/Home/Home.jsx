import React from "react";
import { Card, CardContent, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import CreditCard from "./CreditCard";
// import {Link to} from "react-router-dom"

function Home() {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="true"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./Images/b2.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="./Images/b1.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="./Images/Slide3.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Grid item xs={6}>
                  <img src="./images/creditCard.jpg" alt="" width={350} />
                </Grid>
                <Grid item xs={8}>
                  <h4>How to get Credit Card online in 3 Easy Steps</h4>
                </Grid>
                <Grid item xs={8}>
                  <p>Follow these basics Steps to Apply for Credit Card</p>
                </Grid>
                {/* <Grid item xs={2}>
                 <p> <a href="https://www.hdfcbank.com/personal/resources/learning-centre/pay/how-to-get-credit-card-in-3-steps?icid=website:target:HP:Recxexperience:Category:Pay:pos1">
                    Apply
                  </a></p>
                </Grid> */}
                <Grid item xs={2}>
                <Link to="/creditcard">
                      <Button variant="contained">View</Button>
                    </Link> 
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Grid item xs={6}>
                  <img src="./images/Card.jpg" alt="" width={350} />
                </Grid>
                <Grid item xs={8}>
                  <h4>Personal Loan at incredibly low Rates</h4>
                </Grid>
                <Grid item xs={9}>
                  <p>
                    Quick Loan Sanction | Part Prepayment available | Loan
                    amount upto Rs. 25 Lakh
                  </p>
                </Grid>
                {/* <Grid item xs={2}> */}
                {/* <Button variant="contained"><a href='./CreditCard'>View </a> </Button> */}
                {/* <Link to="./CreditCard">
                      <Button variant="contained">View</Button>
                     </Link>  
                    </Grid> */}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Grid item xs={6}>
                  <img src="./images/Card.jpg" alt="" width={350} />
                </Grid>
                <Grid item xs={8}>
                  <h4>Personal Loan at incredibly low Rates</h4>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
