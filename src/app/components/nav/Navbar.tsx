import React from 'react'
import Image from 'next/image'
import logoImg from './img/image.png'
import { Icon } from '@iconify/react';

function Navbar() {
    return (
        <div>
            <section className="fixed top-4 md:top-9 left-1/2 transform -translate-x-1/2 w-[92%] md:w-[80%] p-4 md:p-6 bg-white shadow-md z-50 blur-sm">
                <div className="flex items-center justify-between">
                    <header className="flex items-center justify-between w-full">
                        <div className="logo">
                            <Image
                                src={logoImg}
                                alt="alt"
                                width={120}
                                height={100}
                                className="w-[150px] md:w-[200px] h-auto"
                            />
                        </div>

                        <div className="toggle md:hidden">
                            <Icon icon="ic:outline-menu" className="text-[30px]"></Icon>
                        </div>
                    </header>

                    <nav className="hidden md:flex">
                        <ul className="flex items-center gap-5 text-[14px] text-[#5D5D5D] font-[400]">
                            <li>HOME</li>
                            <li>ABOUT</li>
                            <li>PRICING</li>
                            <li>PRODUCT</li>
                            <li>CONTACT</li>
                        </ul>
                    </nav>
                </div>
            </section>
        </div>
    )
}

export default Navbar