import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Ingredients from './ingredients';
import FoodSteps from './foodsteps';

const styles = theme => ({
    root: {
      flexGrow: 1,
      margin:10,
    },
    paper: {
      height: 140,
      width: 100,
    },

    control: {
      padding: theme.spacing.unit * 2,
    },

  });
  

class Foods extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){
        const { ingredients } = this.props;
        const { classes } = this.props;
        return(
            <React.Fragment>
                <Table className={classes.table}>
                            {
                                ingredients === null ? 
                                "loading" : 
                                <Ingredients ingredients = {ingredients}></Ingredients>
                            } 
                </Table>
                {
                    ingredients === null ? 
                    "loading" : 
                    <FoodSteps steps={ingredients.steps}></FoodSteps>
                }
            </React.Fragment>
        );
    }

}

export default withStyles(styles)(Foods);