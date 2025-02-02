'use client'

import { signOut } from "next-auth/react"


export default function ButtonLogout() {
    function logout() {
        signOut()
    }

    return (
        <button className="btn btn-sm btn-primary text-lg font-extrabold" onClick={logout}>Logout</button>
    )
};
