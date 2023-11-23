"use client";

import { useState } from 'react';
import {Button} from '../../../components/ui/Button';
import {Logo} from '../../../components/assets/Logo/Logo';
import {SearchBar} from '../searchbar';
import { Menu, Cross } from '../../../components/assets/icons';
import { ModeToggle } from '../ModeToggle/ModeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative container mx-auto p-6 bg-transparent">
      <div className="flex items-center justify-between">
        <Logo />

        <div className="hidden md:block">
          <SearchBar />
        </div>

        <div className="hidden md:flex space-x-4">
          <Button color="secondary" variant="bordered">Docs</Button>
          <Button color="secondary" variant="bordered">Articles</Button>
          <Button color="secondary" variant="bordered">Learn</Button>
          <Button color="primary" variant="solid">Sign Up!</Button>
          <ModeToggle/>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden block hamburger"
        >
          {isOpen ? <Cross className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div className={`absolute top-full left-0 w-full bg-white md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className='flex flex-col items-center space-y-4'>
          <Button color="secondary" variant="bordered">Docs</Button>
          <Button color="secondary" variant="bordered">Articles</Button>
          <Button color="secondary" variant="bordered">Learn</Button>
          <Button color="primary" variant="solid">Sign Up!</Button>
          <ModeToggle/>
        </div>
      </div>
    </nav>
  );
};

export {Navbar};
