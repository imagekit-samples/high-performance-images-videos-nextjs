const Header = () => {
  return (
<header className="fixed top-0 left-0 w-full z-10">
  <div className="bg-black text-white w-full py-2">
    <div className="max-w-[1200px] mx-auto flex items-center justify-center text-sm">
      <p>Special Offer: 20% off on all sneakers!</p>
    </div>
  </div>
  <div className="bg-white text-black w-full h-20 border-b border-slate-100">
    <div className="max-w-[1200px] mx-auto flex flex-col items-center px-4 py-3">
      <div className="logo mb-2">
        <img src="https://ik.imagekit.io/ikmedia/logo/light_T4buIzohVH.svg" alt="Logo" width="150" height="50" />
      </div>
      <nav className="navigation mb-2 text-sm">
        <ul className="flex flex-wrap space-x-4">
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Bags</a></li>
          <li><a href="#women">Backpacks</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>
  );
};

export default Header;
