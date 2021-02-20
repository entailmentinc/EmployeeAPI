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
