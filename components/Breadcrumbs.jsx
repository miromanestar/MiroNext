import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { HomeIcon } from '@heroicons/react/20/solid'

const pages = [
    { name: 'Projects', href: '#', current: false },
    { name: 'Project Nero', href: '#', current: true },
]

const Breadcrumbs = ({ names = [] }) => {
    const router = useRouter()

    const calcPath = () => {
        const path = router.pathname
        const pathArr = path.split('/').slice(1)

        return pathArr.map((p, i) => ({
            name: names[i] || p.charAt(0).toUpperCase() + p.slice(1),
            href: `/${pathArr.slice(0, i + 1).join('/')}`,    
        }))
    }

    const routes = calcPath()

    return (
        <nav className="mt-10 px-4 flex max-w-7xl mx-auto" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
                <li>
                    <div>
                        <Link href="/" className="text-gray-400 duration-100 hover:text-highlight">
                            <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                            <span className="sr-only">Home</span>
                        </Link>
                    </div>
                </li>
                {routes.map((r) => (
                    <li key={r.name}>
                        <div className="flex items-center">
                            <svg
                                className="h-5 w-5 flex-shrink-0 text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                            >
                                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                            </svg>
                            <Link
                                href={r.href}
                                className="ml-4 text-sm font-medium text-gray-400 duration-100 hover:text-highlight"
                            >
                                {r.name}
                            </Link>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    )
}

export default Breadcrumbs
