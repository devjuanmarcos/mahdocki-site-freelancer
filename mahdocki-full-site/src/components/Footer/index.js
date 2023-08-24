import React from "react";
import styles from "./Footer.module.css";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";
import imageInput from "assets/images/driveFooter.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
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
            <h3 className={styles.title3}>Novidades em primeira mão</h3>
            <h1 className={styles.title1}>
              Cadastre-se para receber as novidades
            </h1>
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
                    <SendOutlinedIcon className={styles.sendIcon} />
                  </IconButton>
                ),
              }}
            />
          </div>
          <div className={styles.imageCard}>
            <img
              src={imageInput}
              alt='none'
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.contentBot}>
          <div className={styles.slogan}>
            <h1 className={styles.title1}>MAHDOCKI</h1>
            <h3 className={styles.title3}>
              Oferecemos apoio confiável em momentos desafiadores e críticos,
              assegurando que você tenha a tranquilidade necessária em sua
              rotina diária.
            </h3>
          </div>
          <div className={styles.about}>
            <ul className={`${styles.ulList} ${styles.colorGray} `}>
              <li>Sobre</li>
              <li>Trabalhos</li>
              <li>Documentação</li>
            </ul>
          </div>
          <div className={styles.terms}>
            <ul className={`${styles.ulList} ${styles.colorGray} `}>
              <li>Termos e condições</li>
              <li>Política de privacidade</li>
              <li>Cookie Privacy</li>
            </ul>
          </div>
          <div className={styles.socialMedia}>
            <ul className={styles.ulList}>
              <h3 className={styles.title3}>Fale conosco!</h3>
              <h3 className={`${styles.title3} ${styles.colorGray} `}>
                mahdocki@domínio.com
              </h3>
              <div className={styles.icons}>
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
              </div>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
