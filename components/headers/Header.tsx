"use client";

type HeaderProps = {
  toggleDrawer?: () => void;
};

export default function Header({ toggleDrawer }: HeaderProps) {
  return (
    <header className="h-16 border-b flex fixed top-0 left-0 right-0 items-center px-4">
      
      <h1 className="text-2xl font-bold text-black ml-2">
        JobZipa
      </h1>

      {/* spacer pushes button to right */}
      <div className="flex-1" />

      {/* Drawer button RIGHT SIDE */}
      <button
        onClick={toggleDrawer}
        className="rounded-lg p-2 text-2xl  hover:bg-gray-100 lg:hidden"
      >
        ☰
      </button>
    </header>
  );
}