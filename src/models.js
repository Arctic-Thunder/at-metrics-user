export const User = {
  compareTo: (a, b) => {
    return a.token.compareTo (b.token);
  },

  equals: (a, b) => {
    return a.token === b.token;
  },
};

export const Project = {
  compareTo: (a, b) => {
    if (a.id < b.id) return -1;
    else if (a.id === b.id) return 0;
    else return 1;
  },

  equals: (a, b) => {
    return a.id === b.id;
  },
};

export const Metric = {
  compareTo: (a, b) => {
    if (a.id < b.id) return -1;
    else if (a.id === b.id) return 0;
    else return 1;
  },

  equals: (a, b) => {
    return a.id === b.id;
  },
};
