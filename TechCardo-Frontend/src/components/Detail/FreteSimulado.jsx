// src/components/FreteSimulado.jsx
import { useState } from 'react';

export default function FreteSimulado({ originCep }) {
  const [cep, setCep] = useState('');
  const [fretes, setFretes] = useState(null);
  const [erro, setErro] = useState('');
  const [cidade, setCidade] = useState('');

  const calcularFrete = async () => {
    const cepClean = cep.replace(/\D/g, '');
    const origemClean = originCep.replace(/\D/g, '');

    if (cepClean.length !== 8) {
      setErro('CEP inválido.');
      return;
    }

    try {
      const res = await fetch(`https://viacep.com.br/ws/${cepClean}/json/`);
      if (!res.ok) throw new Error('Falha de rede');
      const data = await res.json();

      if (data.erro) {
        setErro('CEP não encontrado');
        return;
      }

      setErro('');
      setCidade(`${data.localidade} - ${data.uf}`);

      const sumDigits = s => s.split('').reduce((a, d) => a + Number(d), 0);
      const dist = (sumDigits(origemClean) + sumDigits(cepClean)) * 5;

      const pac = (dist * 0.05 + 15).toFixed(2);
      const sedex = (dist * 0.1 + 30).toFixed(2);
      const retirada = 'Grátis';

      setFretes({
        PAC: { preco: pac, prazo: '5 a 8 dias úteis - ( Dados falsos para teste )' },
        SEDEX: { preco: sedex, prazo: '2 a 4 dias úteis - ( Dados falsos para teste )' },
        Retirada: { preco: retirada, prazo: 'Disponível - ( Dados falsos para teste )' }
      });
    } catch {
      setErro('Erro ao consultar o CEP.');
      setFretes(null);
      setCidade('');
    }
  };

  return (
    <div className="mt-8 p-4 bg-gray-900 rounded-lg border border-gray-700">
      <h2 className="text-xl font-semibold mb-3">Calcular frete</h2>

      <div className="mt-2 flex items-center">
        <input
          type="text"
          placeholder="Digite seu CEP"
          value={cep}
          onChange={e => setCep(e.target.value.replace(/\D/g, ''))}
          maxLength={8}
          className="p-2 rounded text-black w-40"
        />
        <button
          onClick={calcularFrete}
          disabled={cep.length !== 8}
          className="ml-3 bg-blue-700 px-4 py-2 rounded hover:bg-blue-800 transition disabled:bg-gray-500"
        >
          Calcular
        </button>
      </div>

      {erro && <p className="text-red-500 mt-2">{erro}</p>}

      {cidade && <p className="text-gray-400 mt-2">Destino: {cidade}</p>}

      {fretes && (
        <ul className="mt-4 text-gray-300">
          {Object.entries(fretes).map(([tipo, { preco, prazo }]) => (
            <li key={tipo} className="mb-1">
              {tipo} - {preco === 'Grátis' ? preco : `R$ ${preco}`} ({prazo})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 
