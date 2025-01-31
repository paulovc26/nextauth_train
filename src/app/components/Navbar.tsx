import Link from "next/link";

export default function Navbar() {
    return (
        <header>
            <nav className="flex flex-1 bg-base-300 p-6">
                <div className="flex mr-auto gap-4 px-6">
                    <Link href={'#'} className="text-2xl font-bold text-slate-800">Home</Link>
                    <Link href={'#'} className="text-2xl font-bold text-slate-800">Link 1</Link>
                    <Link href={'#'} className="text-2xl font-bold text-slate-800">Link 2</Link>
                </div>
                <div className="flex ml-auto gap-4 px-6">
                    <Link href={'#'} className="text-2xl font-bold text-slate-800">Logout</Link>
                </div>
            </nav>
        </header>
    )
};
