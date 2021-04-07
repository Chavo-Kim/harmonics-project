import React, {useEffect, useState} from "react";
import {CardMedia, makeStyles, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {CommonImages} from "../../../../component/CommonImages";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router";
import Fade from "@material-ui/core/Fade";
import Slide from "@material-ui/core/Slide";

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
        marginBottom: theme.spacing(10),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    mainImage: {
        width: 200,
        height: 200,
    },
    problem: {

    },
    answer: {

    },
    answerText: {
      marginBottom: theme.spacing(2)
    }
}))

export const PracticeTemplate = (props) => {
    const { problemId, timeLength } = props;

    const classes = useStyles();
    const history = useHistory();

    const [isExpired, setIsExpired] = useState(false);
    const [timerTime, setTimerTime] = useState(timeLength);
    const [isFade, setIsFade] = useState(false);


    useEffect(() => {
        setTimerTime(timeLength);
        setIsExpired(false);
        setIsFade(true);
    }, [problemId]);

    useEffect(() => {
        const timer =
            timerTime > 0 && setInterval(() => setTimerTime(prev => prev - 1), 1000);
        if(timerTime == 0){
            setIsExpired(true);
        }
        return () => clearInterval(timer);
    }, [timerTime]);

    const imageList = [
        {
            image: '/studyImages/감3BDb.png',
            solution: '감3도',
        },
        {
            image: '/studyImages/감4FB.png',
            solution: '감4도',
        },
        {
            image: '/studyImages/겹감4CFbb.png',
            solution: '겹감4도',
        },
        {
            image: '/studyImages/단6AF.png',
            solution: '단6도',
        },
        {
            image: '/studyImages/완전4EA.png',
            solution: '완전4도',
        },
        {
            image: '/studyImages/증4BbE.png',
            solution: '증4도',
        }
    ]

    return (
        <Box className={classes.root}>
            <Slide in={isFade} timeout={3000}>
                <Box>
                <Box className={classes.title}>
                    <CardMedia className={classes.mainImage} component='img' image={CommonImages.study.src} />
                    <Typography>학습</Typography>
                    <Typography>{timerTime}</Typography>
                </Box>
                <Box className={classes.problem}>
                    <CardMedia component='img' image={process.env.PUBLIC_URL + imageList[problemId].image} />
                </Box>
                {isExpired?
                    <Box className={classes.answer}>
                        <Typography className={classes.answerText}>
                            {imageList[parseInt(problemId) - 1].solution}
                        </Typography>
                        <Button variant="contained" color="primary" onClick={() => history.push(`${parseInt(problemId) + 1}`)}>
                            Next
                        </Button>
                    </Box>
                :null}
                </Box>
            </Slide>
        </Box>
    )
}