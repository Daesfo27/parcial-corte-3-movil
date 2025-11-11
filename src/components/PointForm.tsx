import React, { useState } from "react";
import "./registro.css";
import { IonIcon } from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/user.store";

function PointsForm() {
  const { setUser } = useUserStore();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    date: "",
    status: "",
  });

  const goBack = () => {
    navigate(-1);
  };

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await setUser(formData);
      alert("Se guardó bien :)");
      setFormData({
        id: "",
        title: "",
        description: "",
        date: "",
        status: "",
      });
    } catch (err) {
      alert("Algo salió mal :(");
    }
  }

  return (
    <div className="register-bg">
      <div className="phone-frame">
        <IonIcon
          icon={chevronBackOutline}
          onClick={goBack}
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            fontSize: "28px",
            color: "#000",
            cursor: "pointer",
          }}
        />

        <form className="register-card" onSubmit={handleSubmit}>
          <img
            className="logo"
            src="../f1b28a798154152dd8d9eb0ba94b14a6285da1ae.png"
            alt="Siwventas"
          />
