import React, { useState } from "react";
import styles from "@/styles/Headerbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Headerbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href={"https://grantoseguros.com/"}>
          <picture>
            <source media="(max-width: 768px)" srcSet="logo-g.png" />
            <Image
              src="/logo.svg"
              width={90}
              height={40}
              alt="Logo"
              className={styles.logo_img}
            />
          </picture>
        </Link>
      </div>
      <nav className={styles.nav_menu}>
        <ul className={`${styles.menu_items} ${menuOpen ? styles.open : ""}`}>
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
        <div className={styles.menu_icon}>
          {!menuOpen && (
            <Image
              src="/burger-menu.svg"
              width={24}
              height={24}
              alt="Menu icon"
              onClick={toggleMenu}
            />
          )}
          {menuOpen && (
            <Image
              src="/x.svg"
              width={24}
              height={24}
              alt="Menu icon"
              onClick={toggleMenu}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Headerbar;
