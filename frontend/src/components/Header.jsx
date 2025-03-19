import logo from "../assets/MUSICALIZAR.svg";

function Header() {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between h-36 px-4">
        
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo do Musicalizar" className="h-5" />
        </a>

        {/* Navegação */}
        <nav>
          <ul className="flex gap-8 text-lg">
            <li><a href="#" className="hover:text-stone-500 text-[16px]">Conheça nós</a></li>
            <li><a href="#" className="hover:text-stone-500 text-[16px]">Cursos</a></li>
            <li><a href="#" className="hover:text-stone-500 text-[16px]">Contato</a></li>
            <li><a href="#" className="hover:text-stone-500 text-[16px]">Localização</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;
