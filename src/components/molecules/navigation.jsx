import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import SignupPage from "../../pages/SignupPage";
import ResetPasswordPage from "../../pages/ResetPasswordPage";

const Navigation = () => {
    return (
        <Router>
                <Switch>
                    <Route exact path="/">
                        <></>
                    </Route>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/signup">
                        <SignupPage />
                    </Route>
                    <Route path="/password-reset">
                        <ResetPasswordPage />
                    </Route>
                </Switch>
        </Router>
    );
};

export default Navigation;
