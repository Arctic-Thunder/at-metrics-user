export default {
  user: {
    info: {
      //TODO: REMOVE ME - Hard-code credentials to avoid login during development
      username: 'cscimetrics',
      token: '14efc2dfbc44ef2b711e68b24906698939ee49ed',
    },
    loading: false,
    error: null,
  },
  projects: {
    data: [],
    loading: false,
    error: null,
  },
  metrics: {
    data: [],
    loading: false,
    error: null,
  },
  currentPage: {
    index: 0,
  },
};
