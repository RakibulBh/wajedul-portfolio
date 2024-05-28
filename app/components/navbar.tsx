import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-[10vh] bg-black w-full flex items-center justify-between px-16 border-b-red-500 border-b-2">
      <div className="space-x-3 flex items-center justify-between">
        <p className="text-white font-bold text-3xl">Wajedul</p>
      </div>
      <div className="space-x-4">
        <Link className="text-red-500" href="/wajedul">
          My CV
        </Link>
        <Link className="text-red-500" href="/wajedul">
          My projects
        </Link>
      </div>
      <div>
        <button className="border-red-400 border-2 text-red-400 px-4 py-2 rounded-md">
          Wajedul
        </button>
      </div>
    </nav>
  );
}
