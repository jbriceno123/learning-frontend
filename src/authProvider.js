const authProvider = {
  login: ({ user, password }) => {
    if (user !== "demo" & password !== '123') return Promise.reject();
    
    localStorage.setItem('user', user);
    return Promise.resolve();
  },
  logout: () => {
    localStorage.removeItem('user');
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: () => localStorage.getItem('user') ? Promise.resolve() : Promise.reject(),
  getPermissions: () => Promise.reject('Unknown method'),
  getIdentity: () =>
    Promise.resolve({
      id: 'user',
      fullName: 'Demo',
    }),
};

export default authProvider;