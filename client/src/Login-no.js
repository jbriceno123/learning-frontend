import * as React from 'react';
import { useState } from 'react';
import {
	// useLogin, 
	// useNotify, 
	// Notification, 
	// defaultTheme
} from 'react-admin';
import { TextField, Button } from '@material-ui/core/';
// import { ThemeProvider } from '@material-ui/styles';
// import { createMuiTheme } from '@material-ui/core/styles';

// const bugiado = () => {throw new Error('JAJAJAJAJAJA')};

const Login = ({ theme }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// const login = useLogin();
	// const notify = useNotify();
	const submit = e => {
		e.preventDefault();
		console.log(email)
		console.log(password)
		// will call authProvider.login({ email, password })
		// login({ email, password }).catch(() =>
		// 	notify('Invalid email or password')
		// );
	};

	return (
		// <ThemeProvider theme={createMuiTheme(defaultTheme)}>
		<form onSubmit={submit}>
			<TextField
				id="standard-basic"
				label="Usuario"
				name="username"
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<TextField
				id="standard-basic"
				label="Contraseña"
				name="password"
				type="password"
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<Button variant="contained" color="primary" type="submit">Primary</Button>
		</form>
		// </ThemeProvider>
	);
};

export default Login;