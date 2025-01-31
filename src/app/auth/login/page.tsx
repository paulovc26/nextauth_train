'use client'

import { signIn, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation';

export default function Home() {

    const { data: session } = useSession();

    if (session) {
        redirect("/dashboard")
    }

    return (
        <main className="flex justify-center items-center h-screen">
            <button className="btn btn-primary" onClick={() => signIn("github", { callbackUrl: "/dashboard" })}>Logar com Github</button>
        </main>
    );
}
