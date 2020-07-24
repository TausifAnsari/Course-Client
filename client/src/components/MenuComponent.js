import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle,CardBody,CardHeader, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

    function RenderMenuItem({ dish, onClick }) {
        return(
            <Card>
                <Link to={`/Courses/${dish._id}`} >
                    <CardImg  height="250px" src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <h3>{dish.name}</h3>
                    </CardBody>
                </Link>
            </Card>
        );
    }

    const Menu = (props) => {

        const menu = props.dishes.dishes.map((dish) => {
            return (
                <div key={dish._id} className="col-12 col-sm-4 m-0 sks">
                    <RenderMenuItem dish={dish} />
                </div>
            );
        });

        if (props.dishes.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.dishes.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            );
        }
        else
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>All Courses</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>All Courses</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        {menu}
                    </div>
                </div>
            );
    }

export default Menu;