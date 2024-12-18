import React from "react";
import { FaVk, FaInstagram, FaDiscord } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImFacebook2 } from "react-icons/im";
import styles from "./SocialIcon.module.scss";

interface Props {
  network: string;
}

const SocialIcon: React.FC<Props> = ({ network }) => {
  switch (network) {
    case "vk":
      return <FaVk className={`${styles.icon} ${styles.vk}`} />;
    case "instagram":
      return <FaInstagram className={`${styles.icon} ${styles.instagram}`} />;
    case "discord":
      return <FaDiscord className={`${styles.icon} ${styles.discord}`} />;
    case "facebook":
      return <ImFacebook2 className={`${styles.icon} ${styles.facebook}`} />;
    case "twitter":
      return <AiFillTwitterCircle className={`${styles.icon} ${styles.twitter}`} />;
    default:
      return null;
  }
};

export default SocialIcon;
