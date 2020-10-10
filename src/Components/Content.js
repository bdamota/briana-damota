import React from 'react';
import { setConfiguration } from 'react-grid-system';
import { Container, Row, Col } from 'react-grid-system';
import Button from "react-bootstrap/Button"
import videoOne from "../images/portfolio/Freeform.mp4"
import videoTwo from "../images/portfolio/BiggestLoser.mp4"
import imageOne from "../images/portfolio/MasQueScreen.jpg"
import imageTwo from "../images/portfolio/bl.jpg"
import videoThree from "../images/portfolio/TPIR.mp4"
import videoFour from "../images/portfolio/Reina.mp4"
import imageThree from "../images/portfolio/tpir.jpg"
import imageFour from "../images/portfolio/reina.jpg"
import videoFive from "../images/portfolio/Toyota.mp4"
import videoSix from "../images/portfolio/Ram.mp4"
import imageFive from "../images/portfolio/toyota.jpg"
import imageSix from "../images/portfolio/ram.jpg"
setConfiguration({ maxScreenClass: 'xl' });


function Content () {
        return (
          <section id="portfolio">

          <div className="row">
          
             <div className="twelve columns collapsed">
             <div className="col text-center">
                <h2>Broadcast, Digital + Branded Content</h2>
            </div>
          </div>
          </div>
          <Container>
          <Row>
           <Col sm={6}>
            <div className="video">
                <video className="singlevideo" width="500" height="400" controls controlsList="nodownload" poster={imageOne} preload="none">
                   <source src={videoOne} type="video/mp4"></source>
                  </video>
              </div>
              <div className="portfolio-item-meta">
                 <h5 className="projectTitle">#MasQueUnMes | Freeform</h5>
                     <p className="contentInfo">Freeform wanted to celebrate Hispanic Heritage Month with talent from their current and upcoming shows, so we provided scripts  and overall creative direction for a digital spot.<br></br>
                     <strong>Production Company:</strong> Joe Agency<br></br>
                     <strong>Production Location:</strong> Los Angeles<br></br>
                      <strong>Roles:</strong> Account Manager<br></br>
                      <strong>Assets:</strong> 1 X Short-Form Video for Facebook & Instagram<br></br>
                 </p>
              </div>
            </Col>
            <Col sm={6}>
            <div className="video">
                <video className="singlevideo" width="500" height="400" controls controlsList="nodownload" poster={imageTwo} preload="none">
                   <source src={videoTwo} type="video/mp4"></source>
                  </video>
              </div>
              <div className="portfolio-item-meta">
                 <h5 className="projectTitle">The Biggest Loser | NBC</h5>
                     <p className="contentInfo">For S12, S13, and S15 of The Biggest Loser, I produced integrations and digital content for brands, including Brita, Ford, General Mills, Subway, Macy's, Jennie-O.<br></br>
                     <strong>Production Company:</strong> Endemol Shine North America<br></br>
                     <strong>Production Location:</strong> Los Angeles<br></br>
                      <strong>Roles:</strong> Manager, Creative Affairs | Integrations Associate Producer<br></br>
                      <strong>Assets:</strong> 105 Integrations<br></br>
                 </p>
              </div>
            </Col>
          </Row>
          <Row>
           <Col sm={6}>
            <div className="video">
                <video className="singlevideo" width="500" height="400" controls controlsList="nodownload" poster={imageThree} preload="none">
                   <source src={videoThree} type="video/mp4"></source>
                  </video>
              </div>
              <div className="portfolio-item-meta">
                 <h5 className="projectTitle">The Price Is Right | CBS</h5>
                     <p className="contentInfo">I staged the games and prizes for S44 and S45 of The Price Is Right. An episode I staged won a Daytime Emmy Award in 2016.<br></br>
                     <strong>Production Company:</strong> Fremantle<br></br>
                     <strong>Production Location:</strong> Los Angeles<br></br>
                      <strong>Roles:</strong> Staging Supervisor<br></br>
                      <strong>Assets:</strong> 380 X 1hr Episodes<br></br>
                 </p>
              </div>
            </Col>
            <Col sm={6}>
            <div className="video">
                <video className="singlevideo" width="500" height="400" controls controlsList="nodownload" poster={imageFour} preload="none">
                   <source src={videoFour} type="video/mp4"></source>
                  </video>
              </div>
              <div className="portfolio-item-meta">
                 <h5 className="projectTitle">La Reina de la Cancion | Univision</h5>
                     <p className="contentInfo">Univision wanted to speak to the Mexican-American audience, so we created a show to find the next female Regional Mexican singer.<br></br>
                     <strong>Production Company:</strong> Corral 360<br></br>
                     <strong>Production Location:</strong> Los Angeles | Miami<br></br>
                      <strong>Roles:</strong> Production Manager<br></br>
                      <strong>Assets:</strong> 40 X 1hr Episodes<br></br>
                 </p>
              </div>
            </Col>
          </Row>
          <Row>
           <Col sm={6}>
            <div className="video">
                <video className="singlevideo" width="500" height="400" controls controlsList="nodownload" poster={imageFive} preload="none">
                   <source src={videoFive} type="video/mp4"></source>
                  </video>
              </div>
              <div className="portfolio-item-meta">
                 <h5 className="projectTitle">Best Kept Secret | Toyota Yaris</h5>
                     <p className="contentInfo">Toyota wanted to promote the relaunch of the 2019 Yaris to a multicultural audience. We created a diverse, multi-city, influencer-driven social media campaign that launched with an experiential event at the NYC Auto Show.<br></br>
                     <strong>Production Company:</strong> Joe Agency<br></br>
                     <strong>Production Location:</strong> NYC | Miami | Houston | Los Angeles<br></br>
                      <strong>Roles:</strong> Director | Creative Producer | Photographer | Line Producer | Production Manager | Account Manager<br></br>
                      <strong>Assets:</strong> 1 X Experiential Event | 1 X Facebook Live | 12 X Short-Form Video for Instagram & Facebook | Photos for Instagram & Facebook<br></br>
                 </p>
              </div>
            </Col>
            <Col sm={6}>
            <div className="video">
                <video className="singlevideo" width="500" height="400" controls controlsList="nodownload" poster={imageSix} preload="none">
                   <source src={videoSix} type="video/mp4"></source>
                  </video>
              </div>
              <div className="portfolio-item-meta">
                 <h5 className="projectTitle">Herramienta | Ram 1500</h5>
                     <p className="contentInfo">Ram wanted to reach the US Hispanic audience for the launch of the 2018 Ram 1500. We created their overall Spanish language broadcast, radio and print campaign that ran through the World Cup.<br></br>
                     <strong>Production Company:</strong> Joe Agency & Landia (Director: Robert Llauro)<br></br>
                     <strong>Production Location:</strong> U.S. | Chile | Mexico<br></br>
                      <strong>Roles:</strong> Creative Producer | Line Producer | Production Manager<br></br>
                      <strong>Assets:</strong> 1 X :60 Anthem Spot | 1 X :30 National Broadcast Spot | 1 X :23/7 Dealer Cutdown | 1 X :15 Internet Cutdown | 2 X :30 Broadcast Feature Spot | 2 X :23/7 Feature Dealer Cutdown | 2 X :15 Feature Internet Cutdown | 2 X Print Ad | 5 X Radio Spot<br></br>
                 </p>
              </div>
            </Col>
          </Row>
          </Container>
          <div className="col text-center content-button">
          <Button type="button" className="button" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://vimeo.com/showcase/7647024');
                   }} variant="secondary">More Content</Button>
          </div>
         </section>
        )}


export default Content;