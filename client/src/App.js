import * as React from "react";
import { Admin, Resource } from 'react-admin';
// import authProvider from './authProvider';
import jsonServerProvider from 'ra-data-json-server';
import Login from './Login';
import UserList from './UserList'
import UserCreate from './UserCreate'
import UserEdit from './UserEdit'

const dataProvider = jsonServerProvider('http://192.168.0.5:5000');

const App = () => <Admin dataProvider={dataProvider} loginPage={Login} authProvider={authProvider}>
  <Resource
    name='Usuarios'
    list={UserList}
    create={UserCreate}
    edit={UserEdit}
  />
</Admin>

export default App;

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
