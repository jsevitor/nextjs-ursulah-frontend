import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Headerbar from "@/components/Headerbar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main_container}>
        <Headerbar />
        <div className={styles.title}>
          <h1>Simplique a análise de Contratos com IA</h1>
          <p>
            Nossa ferramenta transforma a maneira como você examina, organiza e
            utiliza informações contratuais.
          </p>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <Image src="/taca.svg" width={50} height={50} alt="Taça" />
            <div>
              <h4>Tipos de Contratos</h4>
              <p>
                Treinamentos com{" "}
                <span className={styles.highlight}>diferentes modelos</span> de
                contratos.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <Image src="/taca.svg" width={50} height={50} alt="Taça" />
            <div>
              <h4>Treinamento da AI</h4>
              <p>
                Inteligência Treinada com mais de +
                <span className={styles.highlight}>100.000</span> contratos
              </p>
            </div>
          </div>
        </div>
        <div className={styles.cta_btn}>
          <Link href={"/login"}>
            <button>Iniciar Sessão</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
