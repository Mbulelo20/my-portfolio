import React, { Fragment } from 'react'
import {Grid, Cell, Card, CardTitle, CardText, CardActions} from 'react-mdl';

const Python = () => {
    return (
        <Fragment>
            <Grid style={{marginTop:'5em', marginLeft:'1.5em'}}>
                <a href="/MyProjects" class="-btn -bg -txt">
                    <div>
                        Javascript
                    </div>
                </a>
                <div style={{width:'216px',height:"35px", backgroundColor:'peru', borderRadius:'12px'}}>
                    <div style={{margin:'0.5em', marginLeft:'6em', color:'white'}}>
                        Python
                    </div>
                </div>
            </Grid>
            <Grid className="demo-grid-ruler">
                <Cell col={4}>
                    <Card shadow={5} style={{width:'85%',height:'75%', marginTop:'3em', marginLeft:'1em'}}>
                        <CardTitle style={{color: 'white', height:'350px',  backgroundImage:'url(https://www.101computing.net/wp/wp-content/uploads/lottery-numbers1.png)'}}>
                        </CardTitle>
                        <CardText style={{width: '100%',color: 'white',backgroundColor:'grey'}}>
                        <h3 style={{marginTop:"0em", fontFamily:'fantasy'}}><center>PyLott</center></h3>
                            <h5 style={{marginBottom:"2em"}}>
                                Python lottery game to validate user eligibility, generate random numbers and print out results.
                            </h5>
                        </CardText>
                        <CardActions style={{backgroundColor:'silver'}}>
                            <button>
                                <a href="https://github.com/Mbulelo20/PyLot.git" rel="noopener noreferrer" target="_blank" class="btn btn-primary stretched-link">Github link</a>                        
                            </button>
                            
                        </CardActions>
                    </Card>
                </Cell>
                <Cell col={4}>
                    <Card shadow={5} style={{width:'85%',height:'75%', marginTop:'3em', marginLeft:'1em'}}>
                        <CardTitle style={{color: 'white', height:'350px', backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRAqrWaLw2xinigyREAPI5B5NA93h0_18zHQ&usqp=CAU)',backgroundColor:'brown'}}>
                        </CardTitle>
                        <CardText style={{width:'100%',color: 'white',backgroundColor:'gray'}}>
                            <h3 style={{marginTop:"0em", fontFamily:'fantasy'}}><center>UserLog</center></h3>
                            <h5 style={{marginBottom:"2em"}}>Programme to register, signin/out employees and students, with MySQL</h5>
                        </CardText>
                        <CardActions style={{backgroundColor:'silver'}}>
                            <button>
                                <a href="https://github.com/Mbulelo20/Userlog.git" rel="noopener noreferrer" target="_blank" class="btn btn-primary stretched-link">Github</a>                        
                            </button>
                        </CardActions>
                    </Card>
                </Cell>
                <Cell col={4}>
                    <Card shadow={5} style={{width:'85%',height:'75%', marginTop:'3em', marginLeft:'1em'}}>
                        <CardTitle style={{ color: 'orange', height:'350px', background:'url(https://www.enca.com/sites/default/files/1388612_58676202.jpg)'}}>
                        </CardTitle>
                        <CardText style={{width: '100%',color: 'white',backgroundColor:'gray', marginTop:"0em"}}>
                            <h3 style={{marginTop:"0em", fontFamily:'fantasy'}}><center>Currency Exchange</center></h3>
                            <h5 style={{marginBottom:"2em"}}>Python app that fetches data from api, and perfoms currency conversion based on user input.</h5>
                        </CardText>
                        <CardActions style={{backgroundColor:'silver'}}>
                        <button>
                            <a href="https://github.com/Mbulelo20/Currency-Exchange.git" rel="noopener noreferrer" target="_blank" class="btn btn-primary stretched-link">Github link</a> 
                        </button>                     
                        </CardActions>
                    </Card>
                </Cell>
            </Grid>
            
        </Fragment>
    )
}

export default Python;