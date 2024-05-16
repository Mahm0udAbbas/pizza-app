import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block rounded-full bg-yellow-400 font-semibold uppercase  tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300  focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2";
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 text-xs md:px-5 md:py-2.5 ",
    secondary:
      "inline-block rounded-full border-2 px-4  py-3 md:px-6 md:py-4 border-stone-300 font-semibold uppercase  tracking-wide text-stone-400 hover:text-stone-800  transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300  focus:outline-none focus:text-stone-800 focus:ring focus:ring-stone-300 focus:ring-offset-2",
    round: base + "px-2.5 py-1 text-sm md:px-3.5 md:py-2 ",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
