import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
      width: '90%',
    },
    button: {
      marginTop: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    actionsContainer: {
      marginBottom: theme.spacing.unit * 2,
    },
    resetContainer: {
      padding: theme.spacing.unit * 3,
    },
    video: {
        width:'50%',
        height: 'auto',
    },
});

class FoodStep extends React.Component{
    render(){
        const { classes } = this.props;
        const steps = this.props.steps;
        const activeStep= this.props.activeStep;
        const handleNext = this.props.handleNext;
        const handleBack  = this.props.handleBack;
        const handleReset  = this.props.handleReset;

        return(
            <React.Fragment>
                {
                    steps.map((label, index) => {
                        return(
                            <Step key={label.id}>
                                <StepLabel>{label.shortDescription}</StepLabel>
                                <StepContent active={activeStep === index? true:false}>
                                    <div>
                                        <Grid container >
                                            <Grid item>
                                                <video className={classes.video} controls="controls" src={label.videoURL}></video>
                                            </Grid>
                                            <Grid item>
                                                <p>{label.description}</p>
                                            </Grid>

                                        </Grid>
                                    </div>
                                    <div className={classes.actionsContainer}>
                                        <div>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            className={classes.button}
                                        >
                                            Back
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            className={classes.button}
                                        >
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                        </div>
                                    </div>
                                </StepContent>
                            </Step>
                        );
                    })
                }
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(FoodStep);