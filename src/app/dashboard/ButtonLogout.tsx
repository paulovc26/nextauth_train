'use client'

import { signOut } from "next-auth/react"


export default function ButtonLogout() {
    function logout() {
        signOut()
    }

    return (

        <button className="btn btn-primary" onClick={logout}>Logout</button>

    )
};
