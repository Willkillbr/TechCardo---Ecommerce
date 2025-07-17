import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const users = [{ username: "admin", password: "admin" }];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showAccountPanel, setShowAccountPanel] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isAuth = localStorage.getItem("auth") === "true";

  const handleAdminAccess = () => {
    if (isAuth) navigate("/admin");
    else setShowLogin(true);
  };

  const handleLogin = () => {
    const valid = users.find(
      (u) => u.username === username && u.password === password
    );
    if (valid) {
      localStorage.setItem("auth", "true");
      setShowLogin(false);
      navigate("/admin");
    } else alert("Credenciais inválidas");
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setShowAccountPanel(false);
    navigate("/");
  };

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Admin", onClick: handleAdminAccess, match: "/admin" },
    { label: "Produtos", href: "#products" },
    { label: "Newsletter", href: "#newsletter" },
    { label: "Carrinho", href: "#" },
  ];

  return (
    <>
      <header className="top-0 left-0 w-full z-50 bg-black bg-opacity-50 backdrop-blur-sm absolute pointer-events-none">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between pointer-events-auto">
          <h1 className="text-2xl font-bold text-white flex-shrink-0">TechCardo</h1>
          <nav className="hidden md:flex text-gray-200 text-xl justify-center relative left-[-14px] space-x-10">
            {menuItems.map(({ label, href, onClick, match }) => {
              const isActive = match
                ? location.pathname.startsWith(match)
                : location.pathname === href;
              const baseClass = "hover:text-white";
              const activeClass = "text-white font-bold drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]";
              const className = `${baseClass} ${isActive ? activeClass : ""}`;

              return onClick ? (
                <button key={label} onClick={onClick} className={className}>
                  {label}
                </button>
              ) : (
                <a key={label} href={href} className={className}>
                  {label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            {isAuth ? (
              <button
                onClick={() => setShowAccountPanel(!showAccountPanel)}
                className="rounded-full border-2 border-white w-10 h-10 overflow-hidden"
                aria-label="Painel de conta"
              >
                <img
                  src="/img/user.jpg"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </button>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="text-white border border-white px-3 py-1 rounded hover:bg-white hover:text-black"
              >
                Entrar
              </button>
            )}
            <button
              className="md:hidden text-white"
              onClick={() => setOpen(!open)}
              aria-label="Menu móvel"
            >
              <span className="text-2xl">☰</span>
            </button>
          </div>
        </div>

        {open && (
          <div className="bg-black bg-opacity-50 md:hidden pointer-events-auto">
            <nav className="hidden md:flex flex-1 justify-center space-x-12 text-gray-200">
              {menuItems.map(({ label, href, onClick, match }, i) => {
                const isActive = match
                  ? location.pathname.startsWith(match)
                  : location.pathname === href;
                const baseClass = "hover:text-white";
                const activeClass = "text-white font-bold drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]";
                const className = `${baseClass} ${isActive ? activeClass : ""}`;

                const item = onClick ? (
                  <button key={label} onClick={onClick} className={className}>
                    {label}
                  </button>
                ) : (
                  <a key={label} href={href} className={className}>
                    {label}
                  </a>
                );

                return (
                  <div key={label} className={i === 2 ? "mx-8" : ""}>
                    {item}
                  </div>
                );
              })}
            </nav>
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

      {showAccountPanel && (
        <div className="fixed top-0 right-0 h-full w-64 bg-gray-900 text-white shadow-lg z-50 p-6">
          <div className="flex flex-col items-center mb-6">
            <img
              src="/img/user.jpg"
              alt="User"
              className="w-20 h-20 rounded-full mb-2"
            />
            <span className="text-lg font-semibold">Admin</span>
          </div>
          <ul className="space-y-4">
            <li>
              <button className="w-full text-left hover:underline">Minha Conta</button>
            </li>
            <li>
              <button
                className="w-full text-left hover:underline"
                onClick={handleLogout}
              >
                Sair
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
