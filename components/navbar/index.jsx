import Link from 'next/link';
import React from 'react';
import icon from '../../app/icon.ico';
import Image from 'next/image';
import SecondaryButton from '../buttons/secondary-button';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 px-12">
      <div className="flex-1">
        <Link href="/">
          <Image src={icon} width="50" height="50" alt="Logo event aja" />
        </Link>
      </div>
      <div className="flex-none  flex gap-8">
        <div>
          <Link href="/">Beranda</Link>
        </div>
        <div>
          <Link href="/events">Event</Link>
        </div>
        <div>
          <Link href="/services">Layanan</Link>
        </div>
        <div>
          <Link href="/blogs">Blog</Link>
        </div>
        <div>
          <Link href="/contact">Kontak</Link>
        </div>
        <div>
          <Link
            href="/"
            className="border border-black px-5 py-3 rounded bg-violet-900 text-white"
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}
