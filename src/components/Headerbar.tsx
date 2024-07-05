import React from "react";
import styles from "@/styles/Headerbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Headerbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href={"https://grantoseguros.com/"}>
          <Image src="/logo.svg" width={90} height={40} alt="Logo" />
        </Link>
      </div>
      <nav className={styles.nav_menu}>
        <ul className={styles.menu_items}>
          <li>
            <Link
              href={"https://jsevitor.github.io/desafio-granto-landing-page/"}
              target="_blank"
            >
              Saiba Mais
            </Link>
          </li>
          <li>
            <Link href={"/criar-conta"}>Cadastrar</Link>
          </li>
        </ul>
        <div className={styles.cta_btn}>
          <Link href={"/login"}>
            <button>Fazer Login</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Headerbar;
