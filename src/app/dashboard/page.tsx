import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'
import Image from "next/image";
import Navbar from "../components/Navbar";

export default async function Page() {
    const session = await getServerSession();

    if (!session) {
        redirect("/auth/login")
    }

    return (
        <div>
            <Navbar />
            <div>
                <div>
                    <Image src={session.user?.image ?? "/default-avatar.png"}
                        alt="Avatar"
                        width={150}
                        height={150}
                    />
                </div>
                Olá, {session?.user?.name ?? "visitante"}!
            </div>
            <div>
                Dashboard
            </div>
        </div>
    );
}
