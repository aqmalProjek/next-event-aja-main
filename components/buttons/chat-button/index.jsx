'use client';
import { useSession } from 'next-auth/react';
import React from 'react';
import { SiWhatsapp } from 'react-icons/si';
export default function ChatButton({ text, type, onClick, number, message }) {
  const session = useSession();
  return (
    <>
      {session.status !== 'loading' && session.status === 'authenticated' && (
        <a
          target="_blank"
          href={`https://wa.me/${number}?text=${message} , perkenalkan saya ${session?.data?.user?.name} dari pt ${session?.data?.user?.organization} selaku ${session?.data?.user?.position}`}
          rel="noopener noreferrer"
          className={`flex gap-x-2 px-4 py-2.5 items-center ${type === '0' ? 'bg-violet-900 hover:bg-violet-800' : ' bg-fuchsia-800 hover:bg-fuchsia-700 '} rounded-md text-white`}
          type="button"
          onClick={onClick}
        >
          <span>
            {' '}
            <SiWhatsapp />
          </span>
          <p>{text}</p>
        </a>
      )}
    </>
  );
}
