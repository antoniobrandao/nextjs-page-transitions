'use client';

import React from  'react'
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useContext, useRef } from 'react';
import Context from './Context'

function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  if (!frozen) {
    return <>{props.children}</>;
  }

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

const PageTransitionEffect = ({ children }: { children: React.ReactNode }) => {
  const { windowSize } = React.useContext(Context)
  
  // The `key` is tied to the url using the `usePathname` hook.
  const key = usePathname();
  
  if(!windowSize.width) return null

  const variantsHome = {
    hidden: { x: -windowSize.width },
    enter: { x: 0 },
    exit: { x: -windowSize.width },
  };
  const variantsAbout = {
    hidden: { x: windowSize.width },
    enter: { x: 0 },
    exit: { x: windowSize.width },
  };
  
  // set specific animation variant per page
  const variants = key === '/' ? variantsHome : variantsAbout;

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={key}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionEffect;
