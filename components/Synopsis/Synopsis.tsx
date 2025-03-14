"use client";
import { useState } from 'react';
import styles from "./synopsis.module.scss";

const Synopsis = ({text}) => {
  const [open, setOpen] = useState(false);

  return <div className={`${styles.synopsis} ${open ? styles.open : ""}`} onClick={e => setOpen(value => !value)}>
      <p className="fs-sm white-text">{text}</p>
    </div>
}

export default Synopsis