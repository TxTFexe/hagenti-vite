import React from "react";
import axios from "axios";

const UserCabinet: React.FC = () => {
  // async function makePost() {
  //   if (email !== "" && pass !== "")
  //     try {
  //       await axios.post("http://localhost:5000/api/registration", {
  //         email: `${email}`,
  //         password: `${pass}`,
  //       });
  //     } catch (error) {
  //       alert(error);
  //     }
  // }

  return (
    <div className="container">
      <div className="account__header">
        <h2>Личный кабинет</h2>
      </div>
    </div>
  );
};

export default UserCabinet;
