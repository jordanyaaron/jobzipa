"use client";

type HeaderProps = {
  toggleDrawer?: () => void;
};

export default function Header({ toggleDrawer }: HeaderProps) {
  return (
    <header className="h-16 border-b flex items-center px-4">
      <button className="text-2xl ml-2" onClick={toggleDrawer}>
        ☰
      </button>

      <h1 className="text-2xl font-bold text-black ml-2">
          JobZipa
        </h1>
    </header>
  );
}