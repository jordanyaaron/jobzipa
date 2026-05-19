"use client";

type HeaderProps = {
  toggleDrawer?: () => void;
};

export default function Header({ toggleDrawer }: HeaderProps) {
  return (
    <header className="h-14 border-b flex items-center px-4">
      <button onClick={toggleDrawer}>
        ☰
      </button>

      <h1 className="ml-3 font-bold">JobZipa</h1>
    </header>
  );
}