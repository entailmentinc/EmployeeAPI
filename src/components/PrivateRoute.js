/* eslint-disable react-hooks/exhaustive-deps */
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'
import { selectAuth } from './../helpers/selector'

const PrivateRoute = ({ auth, children }) => {
    if (!auth) {
        return <Redirect to={'/login'} />
    }
    return (
        <>{children}</>
    );
};

const mapStateToProps = (state) => ({
    auth: selectAuth(state)
  })

export default connect(mapStateToProps, {
  })(PrivateRoute)
