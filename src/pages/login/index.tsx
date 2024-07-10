import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from 'next/router';
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Login.module.css";

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const initialFormData: FormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Form Data:', formData);  // Adicione este log para depuração

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log('Result:', result);

    if (response.ok) {
      router.push('/backoffice');  // Redirecionar para o dashboard após o login
    } else {
      alert('Erro ao fazer login: ' + result.message);
    }

    setFormData(initialFormData);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main_container}>
        <div>
          <Link href={"/"}>
            <Image src="/logo.svg" width={90} height={40} alt="Logo" />
          </Link>
        </div>
        <div className={styles.big_card}>
          <div className={styles.left_card}>
            <div className={styles.heading}>
              <h2>Seja bem vindo(a),</h2>
              <p>
                Acesse nossa plataforma e explore como nossa tecnologia pode
                potencializar sua gestão contratual!
              </p>
            </div>
            <div className={styles.illustration}>
              <Image src="/couple.svg" width={285} height={285} alt="Couple" />
            </div>
          </div>
          <div className={styles.right_card}>
            <div className={styles.heading}>
              <h3>LOGIN</h3>
              <p>Faça login para acessar nosso sistema</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.form_item}>
                <label>E-mail</label>
                <input
                  type="text"
                  name="email"
                  placeholder="exemplo@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.form_item}>
                <label>Senha</label>
                <input
                  type="password"
                  name="password"
                  placeholder="**********"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <p>Esqueceu a senha?</p>
              </div>
              <div className={styles.btn}>
                <input type="submit" value="Login" />
              </div>
            </form>
            <div className={styles.disclaimer}>
              <span>Utilizando a plataforma pela primeira vez?</span>
              <div className={styles.create_account}>
                <p>
                  Crie uma conta na{" "}
                  <Link href={"/criar-conta"}>Granto Seguros</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
