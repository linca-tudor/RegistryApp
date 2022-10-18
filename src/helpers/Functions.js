export const getName = (first, last) => {
  const name = [first, last].filter(value => !!value).join(' ');
  return name ? name : undefined;
};

export const getInitials = string => {
  if (!string) {
    return null;
  }

  let names = string.split(' '),
    initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  } else {
    initials = null;
  }
  return initials;
};

export const getRandomColor = alpha => {
  return (
    'rgba(' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ',' +
    alpha.toString() +
    ')'
  );
};
