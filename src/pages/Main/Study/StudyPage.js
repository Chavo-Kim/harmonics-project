import React, {useState} from "react";
import {Route, Switch, useHistory, useRouteMatch, withRouter} from "react-router";
import {CardMedia, makeStyles, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";

import {CommonImages} from "../../../component/CommonImages";
import ButtonBase from "@material-ui/core/ButtonBase";
import {PracticeContainer} from "./Practice/PracticeContainer";
import {TextFields} from "@material-ui/icons";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100vw",
        height: "100vh",
        backgroundColor: theme.palette.background.main,
        display : "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        marginBottom: theme.spacing(10)
    },
    options: {
        display: "flex",
        flexDirection: "row"
    },
    option: {
        margin: theme.spacing(0, 4),
    },
    practice: {

    },
    test: {

    }
}))


// eslint-disable-next-line
const _Study = (props) => {
    const classes = useStyles();
    const history = useHistory();

    const { timeLength, setTimeLength } = props;

    const options = [
        {
            name: 'practice',
            image: CommonImages.study.src,
            title: "연습하기",
            description: "지정된 시간 이후 답이 출력되고 다음 문제로 넘어갑니다."
        },
        {
            name: 'test',
            image: CommonImages.test.src,
            title: "테스트",
            description: "지정된 시간 안에 정답을 입력하세요."
        },
    ]

    const valuetext = value => {
        return `${value}`
    }

    const handleChange = name =>(event, value) => {
        setTimeLength(prev => {return {
            ...prev,
            [name]: value,
        }});
    }

    return (
        <Box className={classes.root}>
            <Typography className={classes.title}>
                학습
            </Typography>
            <Box className={classes.options}>
                {options.map((item, i) => (
                    <Box key={`option+${i}`} className={classes.option}>
                        <ButtonBase onClick={() => history.push(`study/${item.name}`)}>
                            <CardMedia component='img' image={item.image}/>
                        </ ButtonBase>
                        <Typography>{item.title}</Typography>
                        <Typography>{item.description}</Typography>
                        <Typography id="discrete-slider-always" gutterBottom>
                            제한 시간
                        </Typography>
                        <Slider
                            defaultValue={3}
                            onChange={handleChange(item.name)}
                            value={timeLength[item.name]}
                            getAriaValueText={valuetext}
                            aria-labelledby="discrete-slider-always"
                            step={1}
                            min={1}
                            max={10}
                            valueLabelDisplay="on"
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

const _StudyPage = () => {

    const match = useRouteMatch();

    const [timeLength, setTimeLength] = useState({
        practice : 3,
        test : 3,
    });

    return (
        <Switch>
            <Route
                exact path={`${match.url}/`}
                render={() =>{return <_Study timeLength={timeLength} setTimeLength={setTimeLength}/>} }
            />
            <Route
                path={`${match.url}/practice`}
                render={() =>{return <PracticeContainer timeLength={timeLength.practice} />} }
            />
            <Route
                path={`${match.url}/test`}
                render={() =>{return <PracticeContainer timeLength={timeLength.test} />} }
            />
        </Switch>
    )
}

// eslint-disable-next-line
export const StudyPage = withRouter(_StudyPage);