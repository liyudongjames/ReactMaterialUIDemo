import React, {Component} from 'react';
import '../App.css';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom'

const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  })

class Navigation extends React.Component  {

    state = {
        value:0,
    }

    constructor(props){
        super(props);
    }

    handleChange = (event, value) => { 
        this.setState({value:value});
    }

    render(){

        const { classes } = this.props;
        const { value } = this.state;
        const HomeLink = props => <Link to="/" {...props} />
        const HelpLink = props => <Link to="/help" {...props} />
        const AboutLink = props => <Link to="/about" {...props} />
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="首页" component={HomeLink}></Tab>
                        <Tab label="帮助"  component={HelpLink}></Tab>
                        <Tab label="关于"  component={AboutLink}></Tab>
                    </Tabs>
                </AppBar>
    
            </div>
        );
    }
};

export default withStyles(styles)(Navigation);