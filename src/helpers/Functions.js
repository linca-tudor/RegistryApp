export const getName = (first, last) => {
  let name = '';

  if (first) {
    name += first;
  }
  if (last) {
    name += ' ' + last;
  }

  return name;
};

export const getInitials = string => {
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
