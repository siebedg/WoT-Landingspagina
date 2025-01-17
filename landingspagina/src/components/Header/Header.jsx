const Header = () => (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Escape Room</h1>
        <ul className="flex space-x-4">
          <li><a href="#details" className="hover:underline">Details</a></li>
          <li><a href="#team" className="hover:underline">Team</a></li>
        </ul>
      </nav>
    </header>
  );
  
  export default Header;
  