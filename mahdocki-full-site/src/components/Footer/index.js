import React from "react";
import "./styles.css";

export default function Rodape() {
  return (
    <footer className='site-footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <h6>Sobre</h6>
            <p className='text-justify'>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </p>
          </div>

          <div className='col-xs-6 col-md-3'>
            <h6>Categorias</h6>
            <ul className='footer-links'>
              <li>
                <a href='http://scanfcode.com/category/c-language/'>C</a>
              </li>
              <li>
                <a href='http://scanfcode.com/category/front-end-development/'>
                  Design de Interface
                </a>
              </li>
              <li>
                <a href='http://scanfcode.com/category/back-end-development/'>
                  PHP
                </a>
              </li>
              <li>
                <a href='http://scanfcode.com/category/java-programming-language/'>
                  Java
                </a>
              </li>
              <li>
                <a href='http://scanfcode.com/category/android/'>Android</a>
              </li>
              <li>
                <a href='http://scanfcode.com/category/templates/'>Templates</a>
              </li>
            </ul>
          </div>

          <div className='col-xs-6 col-md-3'>
            <h6>Links Rápidos</h6>
            <ul className='footer-links'>
              <li>
                <a href='http://scanfcode.com/about/'>Sobre Nós</a>
              </li>
              <li>
                <a href='http://scanfcode.com/contact/'>Contate-nos</a>
              </li>
              <li>
                <a href='http://scanfcode.com/contribute-at-scanfcode/'>
                  Contribuir
                </a>
              </li>
              <li>
                <a href='http://scanfcode.com/privacy-policy/'>
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href='http://scanfcode.com/sitemap/'>Mapa do Site</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 col-sm-6 col-xs-12'>
            <p className='copyright-text'>
              Direitos Autorais &copy; 2017 Todos os Direitos Reservados por
              <a href='https://github.com/devjuanmarcos'>Margoni</a>.
            </p>
          </div>

          <div className='col-md-4 col-sm-6 col-xs-12'>
            <ul className='social-icons'>
              <li>
                <a
                  className='facebook'
                  href='/home/test/rhef/provi'
                >
                  <i className='fa fa-facebook'></i>
                </a>
              </li>
              <li>
                <a
                  className='twitter'
                  href='/home/test/rhef/provi'
                >
                  <i className='fa fa-twitter'></i>
                </a>
              </li>
              <li>
                <a
                  className='dribbble'
                  href='/home/test/rhef/provi'
                >
                  <i className='fa fa-dribbble'></i>
                </a>
              </li>
              <li>
                <a
                  className='linkedin'
                  href='/home/test/rhef/provi'
                >
                  <i className='fa fa-linkedin'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
