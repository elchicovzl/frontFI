'use client'

import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href="/">
            <Image
                alt="logo"
                className='hidden md:block cursor-pointer'
                height="75"
                width="75"
                src="/images/logo.png"
            />
        </Link>
    )
}

export default Logo;