import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';


function About(props) {

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12 text-black">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6 text-black">
                    <h2>Our History</h2>
                    <p>Muffakham Jah College of Engineering and Technology (MJCET) is an engineering college located at Mount Pleasant, Road number 3, Banjara Hills, in the heart of the city of Hyderabad in India. The college is named after Prince Muffakham Jah - grandson of the 7th Nizam - Mir Osman Ali Khan, who had donated part of his personal land for this educational institution.</p>
                    <p>MJCET is affiliated to <em>Osmania University</em> and is approved by the AICTE (All India Council for Technical Education). The college is run and maintained by the Sultan-ul-Uloom Educational Society. The college offers Bachelor of engineering (B.E) courses in eight disciplines out of which seven courses, namely, Civil Engineering, Computer Science and Engineering, Electronics and Communication Engineering, Electrical and Electronics Engineering, Mechanical Engineering and Production Engineering - have been accredited by the National Board of Accreditation (NBA, AICTE) and the Institution of Engineers (India).</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Muffakham Jah College Of Engineering and Technology</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt class="col-6">Motto</dt>
                                <dd class="col-6">Lighted to Enlighten. </dd>
                                <dt class="col-6">Type</dt>
                                <dd class="col-6">Private Institution</dd>
                                <dt class="col-6">Established</dt>
                                <dd class="col-6">1980</dd>
                                <dt class="col-6">Affiliation</dt>
                                <dd class="col-6">Osmania University</dd>
                                <dt class="col-6">Website</dt>
                                <dd class="col-6"><a href="http://mjcollege.ac.in/">Visit College Website</a></dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">Leadership and learning are indispensable to each other</p>
                                <footer className="blockquote-footer">John F. Kennedy
                                <cite title="Source Title"></cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default About;    