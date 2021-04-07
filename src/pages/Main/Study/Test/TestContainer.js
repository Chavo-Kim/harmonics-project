import React, {useEffect} from "react";
import {Redirect, Route, Switch, useRouteMatch, withRouter} from "react-router";
import {PracticeTemplate} from "./TestTemplate";

const _TestContainer = (props) => {
    const match = useRouteMatch();

    const { timeLength } = props;

    return (
        <Switch>
            <Route
                exact path={`${match.url}/`}
                render={() => <Redirect to={`${match.url}/1`} />}
            />
            <Route
                exact path={`${match.url}/:problemId`}
                render={({match}) => <PracticeTemplate problemId={match.params.problemId} timeLength={timeLength}/>}
            />
        </Switch>
    )
}

// eslint-disable-next-line
export const TestContainer = withRouter(_TestContainer);