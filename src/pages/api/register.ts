import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

type Data = {
  message: string;
};

type User = {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
};

const filePath = path.join(process.cwd(), 'data', 'users.json');

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const { nome, email, senha, telefone }: User = req.body;

    const newUser: User = { nome, email, senha, telefone };

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.status(500).json({ message: 'Erro ao ler o arquivo' });
        return;
      }

      const users = JSON.parse(data || '[]');
      users.push(newUser);

      fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
        if (err) {
          res.status(500).json({ message: 'Erro ao salvar o arquivo' });
          return;
        }

        res.status(200).json({ message: 'Usuário cadastrado com sucesso' });
      });
    });
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
