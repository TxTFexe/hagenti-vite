import React from "react";
import { ImVk } from "react-icons/im";
import { FaTelegram } from "react-icons/fa";
import footerStyles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={footerStyles.footer__container}>
        <div className={footerStyles.footer__content}>
          <div className="contacts">
            <h1>Контакты</h1>
            <p>+79996667536</p>
            <h1>Cоц. сети</h1>
            <div className={footerStyles.social__network__icons}>
              <a>
                <FaTelegram />
              </a>
              <a href="https://vk.com/id473606599">
                <ImVk />
              </a>
            </div>
          </div>
          <div className="copyright">
            <p>Copyright © GlekTeam.com, 2022-2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
