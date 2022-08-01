export const slide = {
   exit: {
      opacity: 0,
      x: 100,
      transition: {
         duration: 0.6,
         ease: 'easeInOut',
      },
   },
   initial: {
      opacity: 0,
      x: -100,
      transition: {
         duration: 0.6,
         ease: 'easeInOut',
      },
   },
   animate: {
      opacity: 1,
      x: 0,
      transition: {
         duration: 0.6,
         ease: 'easeInOut',
      },
   },
};
