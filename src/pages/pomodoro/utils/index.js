export const getMode = (prevMod, lap) => {
  if (prevMod === 'focus' && lap === 4) return 'long-break';
  if (prevMod === 'focus') return 'short-break';
  return 'focus';
};

export const some = '';
