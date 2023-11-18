'use client'
import Link from "next/link";

import { usePathname, useRouter } from 'next/navigation';
const menuItems = [
    {
        href: '/dashboard',
        title: 'Homepage',
    },
    {
        href: '/dashboard/author',
        title: 'Author',
    },
    {
        href: '/dashboard/authorList',
        title: 'AuthorList',
    },
    {
        href: '/dashboard/about',
        title: 'About',
    },
    {
        href: '/dashboard/contact',
        title: 'Contact',
    },
];

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {

    const router = useRouter();
    const pathName = usePathname()
    return (
        <main className="min-h-screen flex flex-col">
            <div className="flex flex-col md:flex-row flex-1">
                <aside className="bg-fuchsia-100 w-full md:w-60">
                    <nav>
                        <ul>
                            {menuItems.map(({ href, title }) => (
                                <li className='m-2' key={title}>
                                    <Link className={`${pathName === href && 'bg-teal-600 text-white'}`} href={href}>
                                        <p
                                            className={`${pathName === href ? 'flex p-2 bg-teal-400 rounded hover:bg-teal-500 cursor-pointer' : 'flex p-2 bg-fuchsia-200 rounded hover:bg-fuchsia-400 cursor-pointer' } `}
                                        >
                                            {title}
                                        </p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
                <main className="flex-1 p-4">
                    <>
                        <div>
                            <p>bage</p>
                        </div>
                        {children}
                    </>
                </main>
            </div>
        </main>

    )
}