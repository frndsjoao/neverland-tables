import React from "react";
import { IconType } from "react-icons";

import styles from './styles.module.scss'

interface CardProps {
  title: string;
  description: string;
  icon: any
}

export default function Card({ title, description, icon }: CardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardSvg}>
        {icon}
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}