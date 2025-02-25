import React from "react";
import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";
import styled from "styled-components";

const images = [
  {
    img: "images/trojka-1.JPEG",
    title: "pokój",
  },
  {
    img: "images/trojka-2.JPEG",
    title: "pokój",
  },
  {
    img: "images/studio.JPEG",
    title: "pokój",
  },
  {
    img: "images/banderoza-wew.jpg",
    title: "pokój",
  },
  {
    img: "images/ogrod.jpg",
    title: "pokój",
  },
  {
    img: "images/banderoza2.jpg",
    title: "pokój",
  },
  {
    img: "images/domek2.jpg",
    title: "pokój",
  },
  {
    img: "images/banderoza.jpg",
    title: "pokój",
  },
  {
    img: "images/strumyk.jpg",
    title: "pokój",
  },
];

const PhotoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  max-width: 1100px;
  margin-bottom: 60px;
`;
const StyledImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px; /* Optional rounded corners */
`;
const PhotoGallery = () => {
  return (
    <PhotoContainer>
      {images.map((image, index) => (
        <StyledImg key={index} src={image.img} alt={image.title} />
      ))}
    </PhotoContainer>
  );
};

export default PhotoGallery;
