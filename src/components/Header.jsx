import React from 'react'

import { Disclosure } from '@headlessui/react'

const navigation = [
    { name: 'Products', href: '#', current: false },
    { name: 'Solutions', href: '#', current: false },
    { name: 'Pricing', href: '#', current: false },
    { name: 'Resources', href: '#', current: false },
    { name: 'Log In', href: '#', current: false },
    { name: 'Sign up now', href: '#', current: true },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    return (
        <Disclosure as="nav" className="bg-[#fefbeb]">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <h1 className='text-lg text-[#78350f]'>Collers</h1>
                    <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4 z-50">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'border border-[#78350f] text-[#78350f]' : 'text-[#78350f] hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Disclosure>
    )
}
