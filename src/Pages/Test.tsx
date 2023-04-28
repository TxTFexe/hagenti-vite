import React from "react";
import banner from "../assets/Img/TestBanner.png";
import banner2 from "../assets/Img/TestBanner1.png";
import banner3 from "../assets/Img/TestBanner2.png";
import { useAppDispath } from "../redux/store";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginData, fetchAuth } from "../redux/slices/authSlice";

const images = [banner, banner2, banner3];

const Test: React.FC = () => {
  return (
    <form className="modal__form">
      <input />
    </form>
  );
};

export default Test;
