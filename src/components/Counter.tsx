import "./style.css";
import styles from "./Component.module.css";
import { useState } from "react";
import MinusIcon from "../assets/minus.svg";
import PlusIcon from "../assets/plus.svg";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2 className={styles.heading}>Component h2</h2>
      <button onClick={() => setCount(count - 1)}>
        <MinusIcon />
      </button>
      {count}
      <button onClick={() => setCount(count + 1)}>
        <PlusIcon />
      </button>
    </>
  );
}
