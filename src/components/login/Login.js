/* eslint-disable react-hooks/exhaustive-deps */
import {
    Box,
    Container,
    CssBaseline,
    Button,
    Paper,
    TextField,
  } from '@material-ui/core'
import React, { useState } from "react";
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { string, object } from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { connect } from "react-redux";
import useStyles from './login.style'
import { useHistory } from 'react-router-dom'

import { login } from './../../actions/login.action'
import { selectAuth } from './../../helpers/selector'

const formInitialState = {
    email: '',
    password: '',
  }

const Login = ({ login, auth }) => {
    const classes = useStyles()
    const history = useHistory()
    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => setShowPassword(!showPassword)
    const handleMouseDownPassword = () => setShowPassword(!showPassword)
    const onSubmit = (values, { setErrors }) => {
        login(values, null, () => {
          setErrors({
            email: 'Email and password is not correct.',
            password: 'Email and password is not correct.'
          })
        })
    }
    React.useEffect(() => {
        if (auth) {
            history.push('/users')
        }
    }, [auth])
    return (
        <Container component="main" className={classes.root}>
      <CssBaseline />
      <Paper className={classes.paper} elevation={0}>
        <Box
          height="100%"
          pt={5}
          pb={1}
          px={{ xs: 3, sm: 4, md: 5, xl: 10 }}
          display="flex"
          alignItems="center"
          flexDirection="column"
          className={classes.panelRight + ' auth-right-panel'}
        >
          <div className={classes.authInnerForm}>
            <Formik
              validationSchema={object({
                email: string('Provide valid value').required('Email is required').email('Provide valid email.'),
                password: string('Provide valid value').required('Password is required'),
              })}
              initialValues={formInitialState}
              onSubmit={onSubmit}
            >
              {() => (
                <Form className={classes.form} noValidate autoComplete={'off'}>
                  <Field
                    name="email"
                    margin="normal"
                    as={TextField}
                    label="Email"
                    fullWidth
                    id="email"
                    autoComplete="email"
                  />
                  <ErrorMessage name="email">
                    {(msg) => (
                      <span className="error">
                        {msg}
                      </span>
                    )}
                  </ErrorMessage>
                  <Field
                    name="password"
                    margin="normal"
                    type={showPassword ? 'text' : 'password'}
                    as={TextField}
                    label="Password"
                    fullWidth
                    id="password"
                    autoComplete="password"
                    InputProps={{
                      // <-- This is where the toggle button is added.
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <ErrorMessage name="password">
                    {(msg) => (
                      <span className="error">
                        {msg}
                      </span>
                    )}
                  </ErrorMessage>
                  <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    py={2}
                    width="100%"
                  >
                    <Button type="submit" variant="contained" color="primary">
                      Login         </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </div>
        </Box>
      </Paper>
    </Container>
    );
};

const mapStateToProps = (state) => ({
    auth: selectAuth(state)
  })

export default connect(mapStateToProps, {
    login
  })(Login)

//https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-in

// import React, { useState } from "react";
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import { connect } from "react-redux";


// import { login } from './../../actions/login.action'
// import { selectAuth } from './../../helpers/selector'

// const formInitialState = {
//     email: '',
//     password: '',
//   }

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// const Login = ({ login, auth }) => {
//   const classes = useStyles();

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <form className={classes.form} noValidate>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//           />
//           <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign In
//           </Button>
//           <Grid container>
//             <Grid item xs>
//               <Link href="#" variant="body2">
//                 Forgot password?
//               </Link>
//             </Grid>
//             <Grid item>
//               <Link href="#" variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       <Box mt={8}>
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }

// const mapStateToProps = (state) => ({
//     auth: selectAuth(state)
//   })

// export default connect(mapStateToProps, {
//     login
//   })(Login)