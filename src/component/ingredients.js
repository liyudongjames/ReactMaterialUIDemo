import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {

    },
  });
  
class Ingredients extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){
        const { classes } = this.props;
        const { ingredients } = this.props;

        return(

            <React.Fragment>
                    <TableHead>
                    <TableRow>
                        <TableCell>Ingredient</TableCell>
                        <TableCell numeric>Quantity</TableCell>
                        <TableCell>Measure</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            ingredients.ingredients.map((ingredient) => {
                                return(
                                    <TableRow key={ingredient.id}>
                                        <TableCell component="th" scope="row">{ingredient.ingredient}</TableCell>
                                        <TableCell numeric>{ingredient.quantity}</TableCell>
                                        <TableCell component="th" scope="row">{ingredient.measure}</TableCell>
                                    </TableRow>
                                )
                            })
                        } 
                    </TableBody>
            </React.Fragment>

        );
    }
    
}

export default withStyles(styles)(Ingredients);