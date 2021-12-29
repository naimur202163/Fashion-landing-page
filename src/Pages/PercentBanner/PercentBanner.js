import React from 'react';
import { Container } from 'react-bootstrap';
import './PercentBanner.css'
import vactor1 from '../../Images/Vector 1.png'
import vactor2 from '../../Images/Vector 2.png'
const PercentBanner = () => {
    return (
        <div className='my-5' >
            <Container>

                <div style={{ height: "auto" }} className='bg-img'>
                    <div className='flex-container'>
                        <div className='itmes'> <img src={vactor1} alt="" /></div>
                        <div></div>
                        <div> <img src={vactor2} alt="" /></div>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default PercentBanner;