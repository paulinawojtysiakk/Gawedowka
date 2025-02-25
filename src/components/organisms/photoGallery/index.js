import React, { useState } from "react";
import styled from "styled-components";

const images = [
  { img: "images/trojka-1.JPEG", title: "pokój" },
  { img: "images/trojka-2.JPEG", title: "pokój" },
  { img: "images/studio.JPEG", title: "pokój" },
  { img: "images/banderoza-wew.jpg", title: "pokój" },
  { img: "images/ogrod.jpg", title: "pokój" },
  { img: "images/banderoza2.jpg", title: "pokój" },
  { img: "images/domek2.jpg", title: "pokój" },
  { img: "images/banderoza.jpg", title: "pokój" },
  { img: "images/strumyk.jpg", title: "pokój" },
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
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 600px;
  max-height: 800px;

  @media (max-width: 769px) {
    position: relative;
    max-width: 400px;
    max-height: 600px;
    margin: 10px;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  max-width: 100vw;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 50%;
`;

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <PhotoContainer>
        {images.map((image, index) => (
          <StyledImg
            key={index}
            src={image.img}
            alt={image.title}
            onClick={() => openModal(image.img)}
          />
        ))}
      </PhotoContainer>

      {selectedImage && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <ModalImage src={selectedImage} alt="Expanded View" />
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default PhotoGallery;
