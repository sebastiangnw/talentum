import Link from 'next/link'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

async function Navbar() {

    const session = await getServerSession(authOptions)

    return (
        <nav className='flex justify-between items-center text-white px-24 py-3 shadow-xl' style={{ backgroundImage: 'linear-gradient(to right, #3182CE, #7599dc)' }}>
            <a className='text-xl font-bold' href='/'>Weather</a>
            <ul className='gap-x-2 items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 py-2'>
                {
                    !session?.user ? (
                        <>
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/auth/login'>Login</Link></li>
                            <li><Link href='/auth/register'>Register</Link></li>
                        </>
                    ) : (
                        <>
                            <li><Link href='/dashboard'>Dashboard</Link></li>
                            <li><Link href='/api/auth/signout'>Logout</Link></li>
                        </>
                    )
                }
            </ul>
        </nav>
    )
}

export default Navbar
