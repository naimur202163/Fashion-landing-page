import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import sideImge from '../../Images/Rectangle 168.png'
import sideImge1 from '../../Images/Rectangle 61.png'
import sideImge2 from '../../Images/Rectangle 169.png'
import sideImge3 from '../../Images/Rectangle 170.png'
import sideImge4 from '../../Images/Rectangle 64.png'
import sideImge5 from '../../Images/Rectangle 171.png'
import sideImge6 from '../../Images/Rectangle 59.png'

const Banner = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={5} lg={5}>
                        <div><img style={{ width: "550px", height: '278px' }} src={sideImge} alt="" /> </div>
                    </Col>
                    <Col md={2} lg={2}> <div><img src={sideImge1} alt="" /> </div> </Col>
                    <Col md={5} lg={5}> <div><img src={sideImge2} alt="" /></div> </Col>
                </Row>
                {/* Scound Row */}
                <Row>
                    <Col md={3} lg={3}>
                        <img src={sideImge6} alt="" />  </Col>
                    <Col md={4} lg={4}> <div style={{ width: "100%" }}><img src={sideImge3} alt="" /> </div> </Col>
                    <Col md={3} lg={3}><div> <img style={{ width: "330px", height: '302px' }} src={sideImge4} alt="" /></div> </Col>
                    <Col md={2} lg={2}><div>< img style={{ width: '249px', height: '302px' }} src={sideImge5} alt="" /></div>

                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Banner;