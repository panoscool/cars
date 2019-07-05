import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "http://lorempixel.com/1000/600/nature/1/",
    // thumbnail: "http://lorempixel.com/250/150/nature/1/"
    thumbnail: "http://lorempixel.com/1000/600/nature/1/"
  },
  {
    original: "http://lorempixel.com/1000/600/nature/2/",
    thumbnail: "http://lorempixel.com/250/150/nature/2/"
  },
  {
    original: "http://lorempixel.com/1000/600/nature/3/",
    thumbnail: "http://lorempixel.com/250/150/nature/3/"
  },
  {
    original: "http://lorempixel.com/1000/600/nature/1/",
    thumbnail: "http://lorempixel.com/250/150/nature/1/"
  },
  {
    original: "http://lorempixel.com/1000/600/nature/2/",
    thumbnail: "http://lorempixel.com/250/150/nature/2/"
  },
  {
    original: "http://lorempixel.com/1000/600/nature/3/",
    thumbnail: "http://lorempixel.com/250/150/nature/3/"
  },
  {
    original: "http://lorempixel.com/1000/600/nature/1/",
    thumbnail: "http://lorempixel.com/250/150/nature/1/"
  },
  {
    original: "http://lorempixel.com/1000/600/nature/2/",
    thumbnail: "http://lorempixel.com/250/150/nature/2/"
  },
  {
    original: "http://lorempixel.com/1000/600/nature/3/",
    thumbnail: "http://lorempixel.com/250/150/nature/3/"
  },
  {
    original: "http://lorempixel.com/1000/600/nature/3/",
    thumbnail: "http://lorempixel.com/250/150/nature/3/"
  }
];

const ImageCarousel = () => (
  <div style={{ marginTop: 16 }}>
    <ImageGallery showIndex items={images} />
  </div>
);
export default ImageCarousel;
