import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSubMenuToggle = (index) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="py-2 px-6   text-white bg-blue-600  focus:outline-none"
      >
        ☰
      </button>

      {/* Side Navigation */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300`}
      >
        <div className="relative">
          {/* Cross Icon at the top */}
          <button
            onClick={toggleMenu}
            className="absolute -top-8 left-0 mb-20 p-2 text-white focus:outline-none"
          >
            ✕
          </button>

          <nav className="mt-10">
            <ul>
              <li>
                <button
                  onClick={() => handleSubMenuToggle(1)}
                  className="flex justify-between w-full px-4 py-2 hover:bg-gray-700 focus:outline-none"
                >
                  Menu 1
                  <span>{activeSubMenu === 1 ? '−' : '+'}</span>
                </button>
                {activeSubMenu === 1 && (
                  <ul className="pl-8">
                    <li className="py-1">Sub Menu 1.1</li>
                    <li className="py-1">Sub Menu 1.2</li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  onClick={() => handleSubMenuToggle(2)}
                  className="flex justify-between w-full px-4 py-2 hover:bg-gray-700 focus:outline-none"
                >
                  Menu 2
                  <span>{activeSubMenu === 2 ? '−' : '+'}</span>
                </button>
                {activeSubMenu === 2 && (
                  <ul className="pl-8">
                    <li className="py-1">Sub Menu 2.1</li>
                    <li className="py-1">Sub Menu 2.2</li>
                  </ul>
                )}
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">Menu 3</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
