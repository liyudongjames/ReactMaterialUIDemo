import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import Foods from './foods';
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
      flexGrow: 1,
      margin:20,
    },
    paper: {
      height: 140,
      width: 100,
    },
    title: {
        margin:10,
    }
});
  
class Home extends Component{

    constructor(props){
        super(props);
        this.state =  {
            json: null,
        }
    }

    getJson = () => {
        axios.get("./foods.json")
            .then(response => {
                var json = response.data;
                console.log(json);
                this.setState({
                    json: json,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidMount(){
        this.getJson();
    }

    render(){
        const { classes } = this.props;
        return(
            <div>
                {
                    this.state.json === null ? "":
                    this.state.json.map((ingredient) =>{
                        return(
                            <Paper className={classes.root}>
                                <h1 className={classes.title}>{ingredient.name}</h1>
                                <Foods key={ingredient.id} ingredients={ingredient}></Foods>
                            </Paper>
                        );
                    })
                }
            </div>
        );
    }

}

export default withStyles(styles)(Home);