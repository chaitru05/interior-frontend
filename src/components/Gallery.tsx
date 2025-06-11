import React from 'react';
import './gallery.css';
import { Link } from 'react-router-dom';
type ImageData = {
  src: string;

};

const galleryItems: ImageData[] = [
  { src: '/media/image1.jpg'  },
  { src: '/media/image2.jpg' },
  { src: '/media/image3.jpg' },
  { src: '/media/image4.jpg' },
  { src: '/media/image5.jpg' },
  { src: '/media/image6.jpg' },
  { src: '/media/image7.jpg' },
  { src: '/media/image8.jpg' },
  { src: '/media/image9.jpg' },
  { src: '/media/image10.jpg'},
  { src: '/media/image11.jpg' },
  { src: '/media/image12.jpg' },
  { src: '/media/image13.jpg' },
  { src: '/media/image14.jpg' },
  { src: '/media/image15.jpg' },
  { src: '/media/image16.jpg' },
  { src: '/media/image17.jpg' },
  { src: '/media/image18.jpg' },
  { src: '/media/image19.jpg' },
  { src: '/media/image20.jpg' },
  { src: '/media/image21.jpg'},
  { src: '/media/image22.jpg' },
  { src: '/media/image23.jpg'},
  { src: '/media/image24.jpg' },
  { src: '/media/image25.jpg'},
  { src: '/media/image30.jpg' },
  { src: '/media/image26.jpg' },
  { src: '/media/image27.jpg'},    
  { src: '/media/image29.jpg' },
];

const Gallery: React.FC = () => {
  return (
    <div className="gallery-container">
     <Link to="/" className="btn-dark">BACK TO HOME</Link>
      {galleryItems.map((item, index) => (
        <div className="gallery-card" key={index}>
          <img src={item.src} />
          <div className="gallery-info">
            <h3></h3>
            <p></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;