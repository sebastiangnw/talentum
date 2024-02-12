"use client"

import ClimaList from '@/app/dashboard/ClimaList';
import { signOut } from 'next-auth/react';

function DashboardPage() {
  return (
    <section>
      <div className="flex flex-col items-center h-full">

        <h1 className='text-gray-600 text-50xl py-10 font-bold'></h1>

        <button className='bg-white text-black px-4 py-2 rounded-md mt-4'
          onClick={() => signOut()}>
          Logout
        </button>

      </div>
      <div> <ClimaList /></div>
    </section>
  );
}

export default DashboardPage;

