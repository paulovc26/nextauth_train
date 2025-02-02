'use client'

import React from "react";

import Navbar from "./Navbar";

export interface MainLayoutProps {
    children: React.ReactNode
    className?: string
}


export default function MainLayout({ children }: MainLayoutProps) {
    // const { data: session } = useSession();

    return (
        <>
            <Navbar />
            <div className="flex">
                <main className={"container mx-auto p-4"}>
                    {children}
                </main>
            </div>
        </>

    );
}