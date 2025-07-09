import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const users = [
  { username: "admin", password: "admin" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAdminAccess = () => {
    const isAuth = localStorage.getItem("auth") === "true";
    if (isAuth) {
      navigate("/admin");
    } else {
      setShowLogin(true);
    }
  };

  const handleLogin = () => {
    const valid = users.find(u => u.username === username && u.password === password);
    if (valid) {
      document.cookie = "auth=true; path=/;";
      localStorage.setItem("auth", "true");
      setShowLogin(false);
      navigate("/admin");
    } else {
      alert("Credenciais inválidas");
    }
  };

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Admin", onClick: handleAdminAccess },
    { label: "Produtos", href: "#products" },
    { label: "Newsletter", href: "#newsletter" },
    { label: "Carrinho", href: "#" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">TechCardo</h1>
          <nav className="hidden md:flex space-x-6 text-gray-200">
            {menuItems.map(({ label, href, onClick }) =>
              onClick ? (
                <button
                  key={label}
                  onClick={onClick}
                  className="hover:text-white"
                >
                  {label}
                </button>
              ) : (
                <a key={label} href={href} className="hover:text-white">
                  {label}
                </a>
              )
            )}
          </nav>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            <span className="text-2xl">☰</span>
          </button>
        </div>

        {open && (
          <div className="bg-black bg-opacity-50 md:hidden">
            {menuItems.map(({ label, href, onClick }) =>
              onClick ? (
                <button
                  key={label}
                  onClick={onClick}
                  className="block w-full text-left px-4 py-2 text-gray-200 hover:text-white"
                >
                  {label}
                </button>
              ) : (
                <a
                  key={label}
                  href={href}
                  className="block px-4 py-2 text-gray-200 hover:text-white"
                >
                  {label}
                </a>
              )
            )}
          </div>
        )}
      </header>

      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-black p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-semibold mb-4 text-center">Login Admin</h2>
            <input
              type="text"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mb-3 px-3 py-2 border rounded text-black"
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-4 px-3 py-2 border rounded text-black"
            />
            <div className="flex justify-between">
              <button
                onClick={handleLogin}
                className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
              >
                Entrar
              </button>
              <button
                onClick={() => setShowLogin(false)}
                className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
