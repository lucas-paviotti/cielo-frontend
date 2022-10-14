export const slideUpFull = (d, del) => {
  return {
    visible: {
      y: 0,
      transition: { duration: d, ease: ["easeInOut"], delay: del ? del : 0 },
    },
    hidden: { y: "100%" },
  };
};

export const slideDownFull = (d, del) => {
  return {
    visible: {
      y: 0,
      transition: { duration: d, ease: ["easeInOut"], delay: del ? del : 0 },
    },
    hidden: { y: "-100%" },
  };
};

export const slideUp = (d, del) => {
  return {
    visible: {
      y: 0,
      transition: { duration: d, ease: ["easeInOut"], delay: del ? del : 0 },
    },
    hidden: { y: "25px" },
  };
};

export const slideDown = (d, del) => {
  return {
    visible: {
      y: 0,
      transition: { duration: d, ease: ["easeInOut"], delay: del ? del : 0 },
    },
    hidden: { y: "-25px" },
  };
};

export const fadeIn = (d, del) => {
  return {
    visible: {
      opacity: 1,
      transition: { duration: d, ease: ["easeInOut"], delay: del ? del : 0 },
    },
    hidden: { opacity: 0 },
  };
};

export const fadeUp = (d, del) => {
  return {
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: d, ease: ["easeInOut"], delay: del ? del : 0 },
    },
    hidden: { y: "25px", opacity: 0 },
  };
};

export const fadeDown = (d, del) => {
  return {
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: d, ease: ["easeInOut"], delay: del ? del : 0 },
    },
    hidden: { y: "-25px", opacity: 0 },
  };
};

export const fadeRight = (d, del) => {
  return {
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: d, ease: ["easeInOut"], delay: del ? del : 0 },
    },
    hidden: { x: "-25px", opacity: 0 },
  };
};

export const fadeLeft = (d, del) => {
  return {
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: d, ease: ["easeInOut"], delay: del ? del : 0 },
    },
    hidden: { x: "25px", opacity: 0 },
  };
};
