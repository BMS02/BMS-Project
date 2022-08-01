// import { Grid ,Card,CardContent} from '@mui/material'
import React from "react";

function ContactUs() {
  return (
    <div className="container">
      <br />
      <br />
      <h4 class="text-center">BMS has evolved over the years...</h4>
      <br />

      <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-12 col">
          <div class="border-col">
            <div class="icon"></div>
            <strong>1985 </strong>
            <p>
              Established BMS Capital Management Finance Ltd focused on Bill
              Discounting.
            </p>
          </div>
        </div>

        <div class="col-md-3 col-sm-6 col-xs-12 col">
          <div class="border-col">
            <div class="icon"></div>
            <strong>2003</strong>
            <p>
              BMS Finance Ltd. becomes India's first non-banking finance company
              to convert into a commercial bank.
            </p>
          </div>
        </div>

        <div class="col-md-3 col-sm-6 col-xs-12 col">
          <div class="border-col">
            <div class="icon"></div>
            <strong>2014 </strong>
            <p>Merger of ING Vysya Bank with BMS Bank.</p>
          </div>
        </div>

        <div class="col-md-3 col-sm-6 col-xs-12 col">
          <div class="border-col">
            <div class="icon"></div>
            <strong>2017 </strong>
            <p>
              Launch of 811 - India's unique full-service digital banking
              ecosystem.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="row2">
      <div className="row" id="rw2">
        <div className="col-md-3 col-sm-6 col-xs-12 col">
          <div className="border-col">
            <div className="icon"></div>
            <strong>Locate us </strong>
            <p>
              You are never too far away from quick, efficient banking services.
              Locate your nearest branch or an ATM.
              <a href="./SearchBank"><h6>Search here</h6></a>

            </p>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 col-xs-12 col">
          <div className="border-col">
            <div className="icon"></div>
            <strong>Call us</strong>
            <p>
              In case you wish to speak to our phone banking officer for urgent
              resolution. 
              <a href="/"><h6>1800-1234-9876</h6></a>
            </p>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 col-xs-12 col">
          <div className="border-col">
            <div className="icon"></div>
            <strong>Write to us</strong>
            <p>
              Be it an enquiry, feedback or a simple suggestion, write to us and
              we'll get back to you.
              <a href="/" ><h6>BankQuery@bankManage.com</h6></a>

            </p>
          </div>
        </div>

        
      </div>
      <h1>The end</h1>
      </div>
      {/* <h1 >BMS has evolved over the years...</h1>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Card classNameName="containeritem">
                      <CardContent>
<h2>This is Card</h2>
<img src='./images/slide1.png' alt='Bank Image' />
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card className="containeritem">
                      <CardContent>
<h2>This is Card</h2>
<img src='./images/slide1.png' alt='Bank Image'/>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card className="containeritem">
                      <CardContent>
<h2>This is Card</h2>
<img src='./images/slide1.png' alt='Bank Image'/>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid> */}
    </div>
  );
}

export default ContactUs;
