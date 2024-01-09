import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
      <a href="https://github.com" target="_blank"><FaGithub /></a>
      <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
    </div>
  );
}

export default HeaderSocials;
