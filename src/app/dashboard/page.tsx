import { getServerSession } from "next-auth";
import ButtonLogout from "./ButtonLogout";
import { redirect } from 'next/navigation'
import Image from "next/image";

export default async function Page() {
    const session = await getServerSession();

    if (!session) {
        redirect("/")
    }

    return (
        <div>
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



            <div>
                <ButtonLogout />
            </div>
        </div>
    );
}
