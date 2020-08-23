import React from 'react';
import { Card, CardImg, CardText,  CardTitle, CardSubtitle,Button } from 'reactstrap';
import UncontrolledCollapse from 'reactstrap/lib/UncontrolledCollapse.js';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { Link } from 'react-router-dom';
import { FadeTransform,Fade } from 'react-animation-components';

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

function RenderHomeItem({ dish}) {
       
    return(
        <FadeTransform 
        in
        transformProps={{
            exitTransform: 'translateX(-200px)'
        }}
        fadeProps={{
            enterOpacity: 100,
        }}><Fade in={false} exitOpacity={100}>
       
            <Card className="shadow-lg p-3 mb-5 bg-white rounded">
                <CardImg height="200px" src={baseUrl + dish.image} alt={dish.name} />
                    <h4><CardTitle>{dish.name}</CardTitle></h4>
            <ColoredLine color="black" />
            <Link to={`/Courses/${dish._id}`} >
            <Button outline color="primary">Go To Course</Button>
            </Link>
            </Card>
            </Fade>
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
    const home = props.dishes.dishes.filter(dish => dish.featured).map((dish) => {
        return (
            <div key={dish._id} className="col-12 col-md-4  sks">
                <RenderHomeItem dish={dish} />
            </div>
        );
    });
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 text-dark">
                    <h3>Featured Courses</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                {home}
            </div>
        </div>
        
    );
}

export default Home;