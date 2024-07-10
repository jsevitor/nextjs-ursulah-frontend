import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from 'next/router';
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/CreateAccount.module.css";

interface FormData {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
}

const CreateAccount: React.FC = () => {
  const initialFormData: FormData = {
    nome: "",
    email: "",
    senha: "",
    telefone: "",
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

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log('Result:', result);

    if (response.ok) {
      router.push('/');  // Redirecionar para o dashboard após o cadastro
    } else {
      // Tratar o erro
      alert('Erro ao cadastrar usuário: ' + result.message);
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
              <h2>Crie sua conta,</h2>
              <p>
                E descubra uma nova abordagem para otimizar seu trabalho com
                nossa plataforma!
              </p>
            </div>
            <div className={styles.illustration}>
              <Image src="/man.svg" width={285} height={285} alt="Man" />
            </div>
          </div>
          <div className={styles.right_card}>
            <div className={styles.heading}>
              <h3>Criar Conta</h3>
              <p>Preencha os campos abaixo para criar sua conta</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.form_item}>
                <label>Nome</label>
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome completo"
                  value={formData.nome}
                  onChange={handleInputChange}
                />
              </div>
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
                  name="senha"
                  placeholder="**********"
                  value={formData.senha}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.form_item}>
                <label>Telefone</label>
                <input
                  type="text"
                  name="telefone"
                  placeholder="(xx) xxxx-xxxx"
                  value={formData.telefone}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.btn}>
                <input type="submit" value="CONTINUAR" />
              </div>
            </form>
            <div className={styles.disclaimer}>
              <span>-------- OU --------</span>
              <div className={styles.create_account}>
                <p>
                  Entre em uma conta existente da{" "}
                  <Link href={"/login"}>Granto Seguros</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateAccount;
