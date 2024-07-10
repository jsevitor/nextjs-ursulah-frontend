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
    const { email, senha }: { email: string; senha: string } = req.body;

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.status(500).json({ message: 'Erro ao ler o arquivo' });
        return;
      }

      const users: User[] = JSON.parse(data || '[]');
      const user = users.find((u) => u.email === email && u.senha === senha);

      if (user) {
        res.status(200).json({ message: 'Login bem-sucedido' });
      } else {
        res.status(401).json({ message: 'Credenciais inválidas' });
      }
    });
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
