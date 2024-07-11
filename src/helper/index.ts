const generateGuestRandomUsername = (): string => {
  return 'guest' + Math.floor(Math.random() * 9000000000) + 1000000000;
};

export default generateGuestRandomUsername;
