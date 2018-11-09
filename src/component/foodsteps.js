import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FoodStep from './foodstep';

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
});

class FoodSteps extends React.Component{
      state = {
          activeStep: 0,
      };
      
      handleNext = () => {
        this.setState(state => ({
          activeStep: state.activeStep + 1,
        }));
      };
      
      handleBack = () => {
        this.setState(state => ({
          activeStep: state.activeStep - 1,
        }));
      };
      
      handleReset = () => {
        this.setState({
          activeStep: 0,
        });
      };

      render(){
        const { classes } = this.props;
        const steps = this.props.steps;
        const { activeStep } = this.state;
        const handleNext = this.handleNext;
        const handleBack  = this.handleBack;
        const handleReset  = this.handleReset;

        return(
          <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
              <FoodStep handleNext={handleNext} 
                        handleBack={handleBack} 
                        handleReset={handleReset}
                        steps={steps}
                        activeStep={activeStep}></FoodStep>
            </Stepper>
          </div>
        )
      }
}

export default withStyles(styles)(FoodSteps);