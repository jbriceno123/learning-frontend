import * as React from "react";
import { Admin, Resource } from 'react-admin';
import authProvider from './authProvider';
import jsonServerProvider from 'ra-data-json-server';
import Login from './conponents/Login';
import UserList from './conponents/UserList'
import UserCreate from './conponents/UserCreate'
import UserEdit from './conponents/UserEdit'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => <Admin dataProvider={dataProvider} loginPage={Login} authProvider={authProvider}>
  <Resource
    name='users'
    list={UserList}
    create={UserCreate}
    edit={UserEdit}
  />
</Admin>

export default App;
