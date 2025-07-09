import { useState } from 'react';
import Header from '../components/Header.jsx';
import products from '../data/products';


export default function AdminDashboard() {
  const tabs = ['Produtos', 'Fretes', 'Categorias', 'Pedidos'];
  const [activeTab, setActiveTab] = useState('Produtos');

const [data, setData] = useState({
    Produtos: products,
    Fretes: [
      { id: 1, region: 'Região Sul', cost: 'R$ 15,00' },
      { id: 2, region: 'Região Norte', cost: 'R$ 25,00' },
      { id: 3, region: 'Região Sudeste', cost: 'R$ 20,00' },
      { id: 4, region: 'Região Centro-Oeste', cost: 'R$ 30,00' },
      { id: 5, region: 'Região Nordeste', cost: 'R$ 22,00' },
      { id: 6, region: 'Região Leste', cost: 'R$ 18,00' },
      { id: 7, region: 'Região Oeste', cost: 'R$ 24,00' },
    ],
    Categorias: [
      { id: 1, name: 'Categoria 1' },
      { id: 2, name: 'Categoria 2' },
      { id: 3, name: 'Categoria 3' },
      { id: 4, name: 'Categoria 4' },
      { id: 5, name: 'Categoria 5' },
      { id: 6, name: 'Categoria 6' },
      { id: 7, name: 'Categoria 7' },
    ],
    Pedidos: [
      { id: 1, customer: 'Cliente X', total: 'R$ 100,00', status: 'Em andamento' },
      { id: 2, customer: 'Cliente Y', total: 'R$ 200,00', status: 'Concluído' },
      { id: 3, customer: 'Cliente Z', total: 'R$ 150,00', status: 'Cancelado' },
      { id: 4, customer: 'Cliente W', total: 'R$ 300,00', status: 'Em andamento' },
      { id: 5, customer: 'Cliente V', total: 'R$ 250,00', status: 'Concluído' },
      { id: 6, customer: 'Cliente U', total: 'R$ 180,00', status: 'Em andamento' },
      { id: 7, customer: 'Cliente T', total: 'R$ 400,00', status: 'Concluído' },
    ],
  });

  const [formState, setFormState] = useState({});
  const [editId, setEditId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fieldsMap = {
    Produtos: ['name', 'price', 'category'],
    Fretes: ['region', 'cost'],
    Categorias: ['name'],
    Pedidos: ['customer', 'total', 'status'],
  };

  const resetForm = () => {
    setFormState({});
    setEditId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const list = data[activeTab];
    if (editId) {
      const updated = list.map(item =>
        item.id === editId ? { ...item, ...formState, id: editId } : item
      );
      setData(prev => ({ ...prev, [activeTab]: updated }));
    } else {
      const newItem = { id: Date.now(), ...formState };
      setData(prev => ({ ...prev, [activeTab]: [...list, newItem] }));
    }
    resetForm();
  };

  const handleDelete = (id) => {
    const filtered = data[activeTab].filter(item => item.id !== id);
    setData(prev => ({ ...prev, [activeTab]: filtered }));
    if (editId === id) resetForm();
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setFormState({ ...item });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const renderTable = () => {
    let list = data[activeTab];
    if (fieldsMap[activeTab].includes('name') && searchTerm) {
      list = list.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    const headers = list[0] ? Object.keys(list[0]).filter(h => h !== 'id') : [];

    return (
      <div className="rounded-lg shadow-lg bg-gray-900 p-4">
      <Header />  
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Pesquisar por nome"
          className="mb-4 w-full bg-gray-800 text-gray-200 p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
          <div className="overflow-y-auto max-h-80 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          <table className="min-w-full text-left text-sm text-gray-300">
            <thead className="border-b border-gray-700 bg-gray-800 sticky top-0">
              <tr>
                {headers.map(h => (
                  <th key={h} className="px-4 py-2 uppercase">{h}</th>
                ))}
                <th className="px-4 py-2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {list.map(row => (
                <tr key={row.id} className="border-b border-gray-800 hover:bg-gray-800">
                  {headers.map(h => (
                    <td key={h} className="px-4 py-3">{row[h]}</td>
                  ))}
                  <td className="px-4 py-3 space-x-2">
                    <button
                      onClick={() => handleEdit(row)}
                      className="px-2 py-1 rounded bg-blue-600 hover:bg-blue-700"
                    >Editar</button>
                    <button
                      onClick={() => handleDelete(row.id)}
                      className="px-2 py-1 rounded bg-red-600 hover:bg-red-700"
                    >Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderForm = () => {
    const fields = fieldsMap[activeTab] || [];
    return (
      <form onSubmit={handleSubmit} className="bg-gray-900 p-4 rounded-lg shadow-lg space-y-4">
        {fields.map(field => (
          <div key={field} className="flex flex-col">
            <label className="mb-1 uppercase text-gray-400">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type="text"
              name={field}
              value={formState[field] || ''}
              onChange={handleChange}
              className="bg-gray-800 text-gray-200 p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
              placeholder={`Insira ${field}`}
            />
          </div>
        ))}
        <div className="flex space-x-2">
          <button type="submit" className="px-4 py-2 bg-green-600 rounded hover:bg-green-700">{editId ? 'Atualizar' : 'Criar'}</button>
          <button type="button" onClick={resetForm} className="px-4 py-2 bg-yellow-600 rounded hover:bg-yellow-700">Limpar</button>
        </div>
      </form>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6 py-20">
      <h1 className="text-3xl font-bold mb-6">Painel Administrativo</h1>
      <nav className="mb-6">
        <ul className="flex space-x-4">
          {tabs.map(tab => (
            <li key={tab}>
              <button
                className={`px-4 py-2 rounded-t-xl ${activeTab === tab ? 'bg-gray-800 text-white' : 'bg-gray-700 text-gray-300'} hover:bg-gray-600`}
                onClick={() => {
                  setActiveTab(tab);
                  resetForm();
                  setSearchTerm('');
                }}
              >{tab}</button>
            </li>
          ))}
        </ul>
      </nav>
      <section className="space-y-6">
        {renderTable()}
        {renderForm()}
      </section>
    </div>
  );
}
