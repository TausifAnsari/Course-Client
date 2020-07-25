import React from 'react';
import { Card, CardImg, CardText,  CardTitle, CardSubtitle,Button } from 'reactstrap';
import UncontrolledCollapse from 'reactstrap/lib/UncontrolledCollapse.js';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0.1
        }}
    />
);

function RenderCard({item, isLoading, errMess}) {
    if (isLoading) {
        return(
            <Loading />
        );
    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else
        return(
            <FadeTransform in 
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card className="shadow-lg p-3 mb-5 bg-white rounded">
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                        <h4><CardTitle>{item.name}</CardTitle></h4>
                    <div>
                    <Button color="link" id="toggler" style={{ marginBottom: '1rem' }}>
                    See details
                    </Button>
                    <UncontrolledCollapse toggler="#toggler">
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                    </UncontrolledCollapse>
                </div>
                <ColoredLine color="black" />
                <Link to={`/Courses/${item._id}`} >
                <Button outline color="primary">Go To Course</Button>
                </Link>
                </Card>
            </FadeTransform>
        );
}

function RenderCard1({item, isLoading, errMess}) {
    if (isLoading) {
        return(
            <Loading />
        );
    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else
        return(
            <FadeTransform in 
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card className="shadow-lg p-3 mb-5 bg-white rounded">
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <h4><CardTitle>{item.name}</CardTitle></h4>
                    <div>
                    <Button color="link" id="toggler1" style={{ marginBottom: '1rem' }}>
                    See details
                    </Button>
                    <UncontrolledCollapse toggler="#toggler1">
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                    </UncontrolledCollapse>
                </div>
                <ColoredLine color="black" />
                <Link to={`/Courses/${item._id}`} >
                <Button outline color="primary">Go To Course</Button>
                </Link>
                </Card>
            </FadeTransform>
        );
}

function RenderCard2({item, isLoading, errMess}) {
    if (isLoading) {
        return(
            <Loading />
        );
    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else
        return(
            <FadeTransform in 
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card className="shadow-lg p-3 mb-5 bg-white rounded">
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <h4><CardTitle>{item.name}</CardTitle></h4>
                    <div>
                    <Button color="link" id="toggler2" style={{ marginBottom: '1rem' }}>
                    See details
                    </Button>
                    <UncontrolledCollapse toggler="#toggler2">
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                    </UncontrolledCollapse>
                </div>
                <ColoredLine color="black" />
                <Link to={`/Courses/${item._id}`} >
                <Button outline color="primary">Go To Course</Button>
                </Link>
                </Card>
            </FadeTransform>
        );
}

function RenderCard3({item, isLoading, errMess}) {
    if (isLoading) {
        return(
            <Loading />
        );
    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else
        return(
            <FadeTransform in 
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card className="shadow-lg p-3 mb-5 bg-white rounded">
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <h4><CardTitle>{item.name}</CardTitle></h4>
                    <div>
                    <Button color="link" id="toggler3" style={{ marginBottom: '1rem' }}>
                    See details
                    </Button>
                    <UncontrolledCollapse toggler="#toggler3">
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                    </UncontrolledCollapse>
                </div>
                <ColoredLine color="black" />
                <Link to={`/Courses/${item._id}`} >
                <Button outline color="primary">Go To Course</Button>
                </Link>
                </Card>
            </FadeTransform>
        );
}

function RenderCard4({item, isLoading, errMess}) {
    if (isLoading) {
        return(
            <Loading />
        );
    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else
        return(
            <FadeTransform in 
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card className="shadow-lg p-3 mb-5 bg-white rounded">
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <h4><CardTitle>{item.name}</CardTitle></h4>
                    <div>
                    <Button color="link" id="toggler4" style={{ marginBottom: '1rem' }}>
                    See details
                    </Button>
                    <UncontrolledCollapse toggler="#toggler4">
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                    </UncontrolledCollapse>
                </div>
                <ColoredLine color="black" />
                <Link to={`/Courses/${item._id}`} >
                <Button outline color="primary">Go To Course</Button>
                </Link>
                </Card>
            </FadeTransform>
        );
}

function RenderCard5({item, isLoading, errMess}) {
    if (isLoading) {
        return(
            <Loading />
        );
    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else
        return(
            <FadeTransform in 
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card className="shadow-lg p-3 mb-5 bg-white rounded">
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <h4><CardTitle>{item.name}</CardTitle></h4>
                    <div>
                    <Button color="link" id="toggler5" style={{ marginBottom: '1rem' }}>
                    See details
                    </Button>
                    <UncontrolledCollapse toggler="#toggler5">
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                    </UncontrolledCollapse>
                </div>
                <ColoredLine color="black" />
                <Link to={`/Courses/${item._id}`} >
                <Button outline color="primary">Go To Course</Button>
                </Link>
                </Card>
            </FadeTransform>
        );
}

function Home(props) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 text-dark">
                    <h3>Featured Courses</h3>
                    <hr />
                </div>                
            </div>
            <div className="row align-items-start ">
                <div className="col-12 col-sm-4 m-0 ">
                    <RenderCard item={props.dish} 
                        isLoading={props.dishesLoading}
                        errMess={props.dishesErrMess} />
                </div>
                <div className="col-12 col-sm-4 m-0">
                    <RenderCard1 item={props.promotion} 
                        isLoading={props.promosLoading}
                        errMess={props.promosErrMess} />
                </div>
                <div className="col-12 col-sm-4 m-0">
                    <RenderCard2 item={props.leader} 
                        isLoading={props.leaderLoading} 
                        errMess={props.leaderErrMess} />
                </div>
                <div className="col-12 col-sm-4 m-0">
                    <RenderCard3 item={props.leader2} 
                        isLoading={props.leaderLoading2} 
                        errMess={props.leaderErrMess2} />
                </div>
                <div className="col-12 col-sm-4 m-0">
                    <RenderCard4 item={props.leader3} 
                        isLoading={props.leaderLoading3} 
                        errMess={props.leaderErrMess3} />
                </div>
                <div className="col-12 col-sm-4 m-0">
                    <RenderCard5 item={props.leader1} 
                        isLoading={props.leaderLoading1} 
                        errMess={props.leaderErrMess1} />
                </div>
            </div>
        </div>
        
    );
}

export default Home;