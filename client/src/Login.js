import React from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  makeStyles,
  Container
} from '@material-ui/core/';
import { useLogin, useNotify } from 'react-admin';

const useStyles = makeStyles((theme) => ({
  base: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');
  const login = useLogin();
  const notify = useNotify();

  const submit = e => {
    e.preventDefault();
    login({ user, password }).catch(() =>
      notify('Invalid email or password')
    );
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.base}>
        <Typography component="h1" variant="h5">
          Iniciar Sesion
        </Typography>
        <form className={classes.form} onSubmit={submit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="user"
            label="Nombre de Usuario"
            name="user"
            onChange={e => setUser(e.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Recordar Contraseña
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                Registrarse
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Login;