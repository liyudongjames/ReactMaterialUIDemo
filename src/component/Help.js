import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import { Fade, Grow } from '@material-ui/core';

const styles = theme => ({
    root: {
      height: 180,
    },
    container: {
      display: 'flex',
    },
    paper: {
      margin: theme.spacing.unit,
    },
    svg: {
      width: 100,
      height: 100,
    },
    polygon: {
      fill: theme.palette.common.white,
      stroke: theme.palette.divider,
      strokeWidth: 1,
    },
  });
  

class Help extends Component{

    state = {
        check:false,
    };

    handleCheck = () => {
        this.setState((state) => ({check : !state.check}));
    }

    render(){
        const { classes } = this.props;
        const { check }  = this.state;

        return(
            <div className={classes.root}>
                <Switch checked={check} onChange={this.handleCheck} aria-label="Collapse"/>
                <div className={classes.container}>
                    <Grow in={check}>
                        <Paper elevation={4} className={classes.paper}>
                            <svg className={classes.svg}>
                                <polygon
                                points="0,100 50,00, 100,100"
                                className={classes.polygon}
                                />
                            </svg>
                        </Paper>
                    </Grow>
                    <Grow in={check} timeout={1000}>
                        <Paper elevation={4} className={classes.paper}>
                        <svg className={classes.svg}>
                            <polygon
                            points="0,100 50,00, 100,100"
                            className={classes.polygon}
                            />
                        </svg>
                        </Paper>
                    </Grow>
                </div>
            </div>
        );
    }

}

Help.propTypes = {
    classes: PropTypes.object.isRequired
};
  
export default withStyles(styles)(Help);