import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "../index.css";
import Button from 'react-bootstrap/Button';

const images = [
  require('../photography/architecture13.jpg'),
  require('../photography/business1.jpg'),
  require('../photography/travel5.jpg'),
  require('../photography/travel8.jpg'),
  require('../photography/travel12.jpg'),
  require('../photography/business3.jpg'),
  require('../photography/architecturehero.jpg'),
  require('../photography/travelhero.jpg'),
  require('../photography/business6.jpg'),
  require('../photography/architecture19.jpg'),
  require('../photography/travel3.jpg'),
  require('../photography/architecture12.jpg'),
  require('../photography/travel2.jpg'),
  require('../photography/architecture11.jpg'),
  require('../photography/architecture10.jpg'),
  require('../photography/business5.jpg'),
  require('../photography/travel4.jpg'),
  require('../photography/travel6.jpg')
];

const smallImages = [
  require('../photography/architecture13.jpg'),
  require('../photography/business1.jpg'),
  require('../photography/travel5.jpg'),
  require('../photography/travel8.jpg'),
  require('../photography/travel12.jpg'),
  require('../photography/business3.jpg'),
  require('../photography/architecturehero.jpg'),
  require('../photography/travelhero.jpg'),
  require('../photography/business6.jpg'),
  require('../photography/architecture19.jpg'),
  require('../photography/travel3.jpg'),
  require('../photography/architecture12.jpg'),
  require('../photography/travel2.jpg'),
  require('../photography/architecture11.jpg'),
  require('../photography/architecture10.jpg'),
  require('../photography/business5.jpg'),
  require('../photography/travel4.jpg'),
  require('../photography/travel6.jpg')
];

class LightboxPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <section id="photography">
      <div className="col text-center no-margin">
      <h2 className="photos"> TRAVEL + BUSINESS PHOTOGRAPHY</h2>

      <MDBContainer>
          <MDBRow className="photoRow">
          <MDBCol className="image">
                <img
                  src={smallImages[0]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 0, isOpen: true })
                  }
                />
          </MDBCol>
          <MDBCol className="image">
                <img
                  src={smallImages[1]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 1, isOpen: true })
                  }
                />
          </MDBCol>
          <MDBCol className="image">
                <img
                  src={smallImages[2]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 2, isOpen: true })
                  }
                />
          </MDBCol>
         </MDBRow>
          <MDBRow className="photoRow">
          <MDBCol className="image">
                <img
                  src={smallImages[3]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 3, isOpen: true })
                  }
                />
          </MDBCol>
          <MDBCol className="image">
                <img
                  src={smallImages[4]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 4, isOpen: true })
                  }
                />
          </MDBCol>
          <MDBCol className="image">
                <img
                  src={smallImages[5]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 5, isOpen: true })
                  }
                />
          </MDBCol>
         </MDBRow>
          <MDBRow className="photoRow">
          <MDBCol className="image">
                <img
                  src={smallImages[6]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 6, isOpen: true })
                  }
                />
          </MDBCol>
          <MDBCol className="image">
                <img
                  src={smallImages[7]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 7, isOpen: true })
                  }
                />
          </MDBCol>
          <MDBCol className="image">
                <img
                  src={smallImages[8]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 8, isOpen: true })
                  }
                />
          </MDBCol>
         </MDBRow>
         <MDBRow className="photoRow">
          <MDBCol className="image">
                <img
                  src={smallImages[9]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 9, isOpen: true })
                  }
                />
          </MDBCol>
          <MDBCol className="image">
                <img
                  src={smallImages[10]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 10, isOpen: true })
                  }
                />
          </MDBCol>
          <MDBCol className="image">
                <img
                  src={smallImages[11]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 11, isOpen: true })
                  }
                />
          </MDBCol>
         </MDBRow>
         <MDBRow className="photoRow">
          <MDBCol className="image">
                <img
                  src={smallImages[12]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 12, isOpen: true })
                  }
                />
          </MDBCol>
          <MDBCol className="image">
                <img
                  src={smallImages[13]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 13, isOpen: true })
                  }
                />
          </MDBCol>
          <MDBCol className="image">
                <img
                  src={smallImages[14]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 14, isOpen: true })
                  }
                />
          </MDBCol>
         </MDBRow>
         <MDBRow className="photoRow">
          <MDBCol className="image">
                <img
                  src={smallImages[15]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 15, isOpen: true })
                  }
                />
          </MDBCol>
          <MDBCol className="image">
                <img
                  src={smallImages[16]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 16, isOpen: true })
                  }
                />
          </MDBCol>
          <MDBCol className="image">
                <img
                  src={smallImages[17]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 17, isOpen: true })
                  }
                />
          </MDBCol>
         </MDBRow>
      
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </MDBContainer>
      </div>
      <div className="col text-center photo-button">
          <Button type="button" className="button" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://www.flickr.com/people/190538466@N04/');
                   }} variant="secondary">Flickr Profile</Button>
          </div>
      </section>
    );
  }
}

export default LightboxPage;