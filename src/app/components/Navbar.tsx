import Link from "next/link";
import ButtonLogout from "../dashboard/common/ButtonLogout";

export default function Navbar() {
    return (
        <header>
            <nav className="flex flex-1 bg-base-300 p-4">
                <div className="flex mr-auto gap-4 px-6">
                    <Link href={'/dashboard'} className="text-2xl font-bold text-slate-800">Home</Link>
                    <Link href={'/dashboard/triagem'} className="text-2xl font-bold text-slate-800">Ficha Triagem</Link>
                    <Link href={'#'} className="text-2xl font-bold text-slate-800">Link 2</Link>
                </div>
                <div className="flex ml-auto gap-4 px-6">
                    <ButtonLogout />
                </div>
            </nav>
        </header>
    )
};
