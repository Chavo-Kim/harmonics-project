import React from "react";
import Box from "@material-ui/core/Box";
import {makeStyles, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {Route, Switch, useHistory, withRouter} from "react-router";
import {StudyPage} from "./Study/StudyPage";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.background.main,
    },
    title: {
        fontSize: 30,
        fontWeight: 700,
    },
    buttonBox: {
        display: "flex",
        flexDirection: "column",
    },
}))

const _Main = () => {
    const classes = useStyles();

    const history = useHistory();

    return (
        <Box className={classes.root}>
            <Typography className={classes.title}>
                성관계
            </Typography>
            <Box className={classes.buttonBox}>
                <Button variant='text' onClick={() => history.push("/study")}>
                    학습
                </Button>
                <Button variant='text'>
                    훈련
                </Button>
            </Box>
        </Box>
    )
}

// eslint-disable-3next-line
const _MainWithRouter = withRouter(_Main);

export const MainPage = () => {
    return (
        <Switch>
            <Route
                exact path="/"
                render={() => <_MainWithRouter />}
            />
            <Route
                path="/study"
                render={() => {
                    return <StudyPage />
                }}
            />
        </Switch>
    )
}