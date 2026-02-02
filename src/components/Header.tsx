'use client';

import { ContactInfo } from '@/types/portfolio';
import { motion } from 'framer-motion';

interface HeaderProps {
  name: string;
  title: string;
  contact: ContactInfo;
}

export function Header({ name, title, contact }: HeaderProps) {
  return (
    <header className='px-[90px] pb-5 pt-10'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }} // 위에서 시작
        animate={{ opacity: 1, y: 0 }} // 원래 위치로
        transition={{ duration: 0.6, delay: 0 }}
        className='mt-8 mb-0.5 text-6xl font-medium'
      >
        {name}
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='m-0 mt-2 text-3xl font-light'
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: -20 }} // 왼쪽에서 시작
        animate={{ opacity: 1, x: 0 }} // 원래 위치로
        transition={{ duration: 0.6, delay: 0.4 }}
        className='mt-4 flex items-center'
      >
        <h4 className='mb-0 mr-5 font-light'>이메일</h4>
        <a
          href={`mailto:${contact.email}`}
          className='text-black no-underline transition-colors hover:text-gray-600 hover:underline'
        >
          <h4 className='mb-0 font-light'>{contact.email}</h4>
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className='mt-2.5 flex items-center'
      >
        <h4 className='mr-5 mt-0 font-light'>깃허브</h4>
        <a
          href={`https://${contact.github}`}
          target='_blank'
          rel='noopener noreferrer'
          className='text-black no-underline transition-colors hover:text-gray-600 hover:underline'
        >
          <h4 className='mt-0 font-light'>{contact.github}</h4>
        </a>
      </motion.div>
    </header>
  );
}
