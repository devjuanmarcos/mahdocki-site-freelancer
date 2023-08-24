import React from "react";
import styles from "./Footer.module.css";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";
// import logoMahdocki from "assets/images/logoMain.png";

export default function Rodape() {
  return (
    <>
      <div className={styles.shape}>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z'
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>
      <footer className={styles.container}>
        <div className={styles.contentTop}>
          <div className={styles.inputCard}>
            <h3>Novidades em primeira mão</h3>
            <h1>Cadastre-se para receber as novidades</h1>
            <TextField
              id='standard-basic'
              label='Insira seu email'
              variant='standard'
              className={styles.input}
              InputLabelProps={{
                className: styles.labelprops,
              }}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SendOutlinedIcon />
                  </IconButton>
                ),
              }}
            />
          </div>
          <div className={styles.image}></div>
        </div>
        <div className={styles.contentBot}>
          <div className={styles.slogan}></div>
          <div className={styles.about}></div>
          <div className={styles.terms}></div>
          <div className={styles.socialMedia}></div>
        </div>
      </footer>
    </>
  );
}
