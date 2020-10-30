import React from 'react';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import KickBackImage from "../images/kickback.jpg"
import MyLingualImage from "../images/Mylingual.jpg"
import PortfolioImage from "../images/Portfolio.jpg"
import SplitsiesImage from "../images/Splitsies.png"

function Web () {
    return (
      <section id="web">
      <div className="col text-center">
      <h2>UX DESIGN + WEB DEVELOPMENT</h2>
      </div>
      <div className="row work">
         <div className="three columns header-col">
            <h1><span>Technical Skills</span></h1>
         </div>

         <div className="nine columns main-col">
          <span className="skills">
            <div className="design">
             <h3> Design</h3>
             »» User Research »» Data Analysis »» Wire Framing »» Prototyping »» User Testing »» Adobe Creative Suite »» Figma »» Miro »» Zeplin
             </div>
             <h3>Programming</h3>
             »»  HTML5 »»  CSS3 »»  JavaScript  »»  jQuery »»  Node »»  Express »»  MySQL »»  MongoDB  »»  React »»  Bootstrap »» Git/GitHub »»  Heroku
            </span>
        </div>
    </div>
    <div className="row projects">

         <div className="three columns header-col">
            <h1><span>Projects</span></h1>
         </div>


         <Card className="bg-dark text-white nine columns main-col">
          <img className="profileimage" src={SplitsiesImage} alt="Splitsies" />
          <Card.Title><h3>Splitsies</h3></Card.Title>
          <Card.Text>
          Splitsies is a mobile application that allows diners to easily and quickly split checks when eating out in a group. I independently designed this intuitive and simple to use prototype concept. <br></br><br>
          </br><strong>My Role:</strong> UX Designer<br>
          </br><strong>Time Period:</strong> 5 days (October 2020)<br>
          </br><strong>Design Tools:</strong> Figma, Adobe Illustrator, Miro, Pen and Paper 
            </Card.Text>
          <ButtonGroup className="buttons" aria-label="Basic example">
          <Button type="button" className="button" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://www.behance.net/gallery/106883783/Splitsies');
                   }} variant="secondary">UX Case Study</Button>
          </ButtonGroup>
        </Card>

         <Card className="bg-dark text-white nine columns main-col secondProject">
          <img className="portfolioimage" src={MyLingualImage} alt="MyLingual" />
          <Card.Title><h3>MyLingual</h3></Card.Title>
          <Card.Text className="cardText">
          MyLingual is a web-based social application that connects people who are learning the same languages. Users share and discover language resources, while immersing themselves in a supportive, knowledge-filled community. I co-developed this concept with classmates in my UCLA Coding Bootcamp cohort. <br></br><br>
          </br><strong>Team:</strong>  Briana daMota, Lauren Euge, Alex Chigas, Rochelle Ruiz<br>
          </br><strong>My Roles:</strong> UX Designer, Writer, Front-end Developer, Project Manager<br>
          </br><strong>Time Period:</strong> 2 Weeks (August/September 2020)<br>
          </br><strong>Design Tools:</strong> Figma, Adobe Illustrator, Miro, Pen and Paper <br>
          </br><strong>Tech:</strong>  HTML5, CSS3, Bootstrap, JavaScript, Node, Express, MySQL, Handlebars, Sequelize, Heroku
            </Card.Text>
          <ButtonGroup className="buttons" aria-label="Basic example">
          <Button  type="button" className="button" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://fathomless-reef-91284.herokuapp.com/');
                   }} variant="secondary">Live Site</Button>
          <Button type="button" className="button" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://github.com/Achigas/MyLingual');
                   }} variant="secondary">See Code</Button>
          <Button type="button" className="button" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://www.behance.net/gallery/105616959/Mylingual-User-Experience-Case-Study');
                   }} variant="secondary">UX Case Study</Button>
          </ButtonGroup>
        </Card>


        <Card className="bg-dark text-white nine columns main-col secondProject">
          <img className="portfolioimage" src={KickBackImage} alt="Kickback" />
          <Card.Title><h3>KickBack!</h3></Card.Title>
          <Card.Text className="cardText">
          KickBack! is a web application that uses third-party APIs to generate randomized movie and recipe suggestions based on the user’s input of movie genre and cuisine type. The motivation for the project was to make it easier for people to stay in and spend quality time with their loved ones during the pandemic. I co-developed this concept with classmates in my UCLA Coding Bootcamp cohort. <br></br><br>
          </br><strong>Team:</strong> Briana daMota, Alex Chigas, Rochelle Ruiz, Jackelin Salinas<br>
          </br><strong>My Roles:</strong> UX Designer, Front-end Developer<br>
          </br><strong>Time Period:</strong> 2 Weeks (July 2020)<br>
          </br><strong>Design Tools:</strong> Figma, Adobe Illustrator, Pen and Paper <br>
          </br><strong>Tech:</strong> HTML5, CSS3, Bootstrap, JavaScript, OMDB API, MovieDB API, Spoonacular API
            </Card.Text>
          <ButtonGroup className="buttons" aria-label="Basic example">
          <Button type="button" className="button"  
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://achigas.github.io/KickBack/');
                   }} variant="secondary">Live Site</Button>
          <Button type="button" className="button" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://github.com/Achigas/KickBack');
                   }} variant="secondary">See Code</Button>
          <Button type="button" className="button" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://www.behance.net/gallery/105682165/KickBack-User-Experience-Case-Study?');
                   }} variant="secondary">UX Case Study</Button>
          </ButtonGroup>
        </Card>

        <Card className="bg-dark text-white nine columns main-col">
          <img className="portfolioimage" src={PortfolioImage} alt="Portfolio" />
          <Card.Title><h3>Personal Portfolio</h3></Card.Title>
          <Card.Text>
          A web-based portfolio to highlight my professional and education experience in UX design, web development, content creation and photography. <br></br><br>
          </br><strong>My Role:</strong> UX Designer, Front-end Developer<br>
          </br><strong>Tech:</strong> HTML5, CSS3, Bootstrap, JavaScript, React 
            </Card.Text>
          <ButtonGroup className="buttons" aria-label="Basic example">
          <Button type="button" className="button" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://github.com/bdamota/briana-damota');
                   }} variant="secondary">See Code</Button>
          </ButtonGroup>
        </Card>
      </div>
   </section>
    );
  }




export default Web;
