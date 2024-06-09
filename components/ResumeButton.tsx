// ResumeButton.js
"use client";
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const ResumeButton = () => {
  const googleDriveLink =
    "https://drive.google.com/file/d/14idRgEvNUQpHI39WyYIngiktC9SUrl2a/view"; // Replace with your Google Drive link

  const handleOpenGoogleDrive = (e: any) => {
    e.preventDefault();
    window.open(googleDriveLink, "_blank");
  };

  return (
    <a href="#about" onClick={handleOpenGoogleDrive}>
      <MagicButton title="Resume" icon={<FaLocationArrow />} position="right" />
    </a>
  );
};

export default ResumeButton;
