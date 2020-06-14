import React, { useState, useCallback } from "react";
import logo from './logo.svg';
import './App.css';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const photos = [
  {
    src: 'https://www.fujifilmusa.com/products/digital_cameras/x/fujifilm_x20/sample_images/img/index/ff_x20_008.JPG',
    width: 4,
    height: 3
  },
  {
    src: 'https://www.cameraegg.org/wp-content/uploads/2013/02/Leica-M-Sample-Image-1.jpg',
    width: 1365,
    height: 911
  },
  {
    src: 'https://www.fujifilmusa.com/products/digital_cameras/x/fujifilm_x20/sample_images/img/index/ff_x20_010.JPG',
    width: 4,
    height: 3
  },
  {
    src: 'https://www.fujifilmusa.com/products/digital_cameras/x/fujifilm_x20/sample_images/img/index/ff_x20_011.JPG',
    width: 4,
    height: 3
  },
  {
    src: 'https://www.cameraegg.org/wp-content/uploads/2013/02/Leica-M-Sample-Image.jpg',
    width: 1365,
    height: 911
  },
  {
    src: 'https://www.fujifilmusa.com/products/digital_cameras/x/fujifilm_x20/sample_images/img/index/ff_x20_009.JPG',
    width: 4,
    height: 3
  },
  {
    src: 'https://www.fujifilmusa.com/products/digital_cameras/x/fujifilm_x20/sample_images/img/index/ff_x20_010.JPG',
    width: 4,
    height: 3
  },
  {
    src: 'https://www.fujifilmusa.com/products/digital_cameras/x/fujifilm_x20/sample_images/img/index/ff_x20_011.JPG',
    width: 4,
    height: 3
  }

];


function App() {

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">Header</header>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default App;
