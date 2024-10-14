// ResumeButton.js
"use client";
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const ResumeButton = () => {
  const googleDriveLink =
    "https://drive.google.com/file/d/1Bv1r-fVlotQqCo63Y6Re9v0pbLNE9D7y/view?usp=drive_link"; // Replace with your Google Drive link

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
