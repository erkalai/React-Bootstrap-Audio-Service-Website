import React from 'react'
import '../App.css';
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Image from 'react-bootstrap/Image';

const AppFooter = () => {
  return (
   <>

    <footer className='footBg bg-secondary  text-white py-'>
        <div className=' bg-dark '>
            <div className='  text-center '> Get connected cith us on social networks
            
            <a className='text-end ms-5' href="https://wa.me/8098353500"><i className=' btn bi bi-instagram  text-white text-end'></i></a>
            <a className='ms-5' href="https://www.youtube.com/"><i className=' btn bi bi-youtube  text-white text-end '></i></a>
            <a className='ms-5' href="https://wa.me/8098887469"><i className=' btn bi bi-whatsapp  text-white text-end'></i></a>
            <a className='m-5' href="https://wa.me/8098353500"><i className='  btn bi bi-whatsapp  text-white text-end'></i></a>
            
            </div>
        </div>
        <Container >
            <Row className='ms-3'>
                <Col sm={12}>
                <Image className='w-5 h-5 d-block' src={require('../assets/Logo.png')} fluid />
                <div className='fw-bold'>Contact Us</div>
                    <div>+91 80983 53500</div>
                    <div>+91 80988 87469</div>
                </Col>
                <Col sm={12} className='mt-2'>
                <div className='fw-bold'>Kachanam</div>
                    <div>Thiruthuraipoondi Taluk,</div>
                    <div>Thiruvarur Dt,</div>
                    <div>Tamilnadu -610 201</div>
                </Col>
                <Col sm={12} className='mt-2'>
                <div className='fw-bold'>Ammanur</div>
                    <div>Near Elementry School, Ammanur,</div>
                    <div>Thiruthuraipoondi Taluk,</div>
                    <div>Thiruvarur Dt,</div>
                    <div>Tamilnadu -610 201</div>
                </Col>
                <Col sm={12} className='mt-2'>
                <h5>Quick Links</h5>
                <ul className='list-unstyled'>
                    <li><a href='#home'className='text-white'>Home</a></li>
                    <li><a href='#services'className='text-white'>Services</a></li>
                    <li><a href='#gallery'className='text-white'>Gallery</a></li>
                    <li><a href='#about_us'className='text-white'>About Us</a></li>
                </ul>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col className='text-center'>
                    <p>&copy; {new Date().getFullYear()} Muthamizh Audios. All rights reserved.</p>
                </Col>
            </Row>
        </Container>

    </footer>

   </>
  )
}

export default AppFooter