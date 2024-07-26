import "./header.css";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
            <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand style={{fontSize:"27px"}} href="#home">CaridinatheHouse</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <ul className="items">
                <li><a href="#anasayfa" className="item">Anasayfa</a></li>
                <li><a href="#card" className="item">Post</a></li>
                <li><a href="#iletisim" className="item">İletişim</a></li>
            </ul>
          </Navbar.Text>
            <img src="/Group.svg" onClick={handleShow} className="me-2 menu"/>
            <Offcanvas placement="end" style={{width:"200px"}}  show={show} onHide={handleClose} {...props} >
                <Offcanvas.Header  closeButton>
                    <Offcanvas.Title>CaridinatheHouse</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul>
                        <li><a href="#anasayfa" className="item">Anasayfa</a></li>
                        <li><a href="#card" className="item">Post</a></li>
                        <li><a href="#iletisim" className="item">İletişim</a></li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>     
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}


















export const Headers = () => {
    return (
        <>
        <div className="container">
        <div className="fix">
        <div className="navbar">
            <a href="index.html" className="name">Selim Blog</a>
            <ul className="items">
                <li><a href="#anasayfa" className="item">Anasayfa</a></li>
                <li><a href="#hakkimda" className="item">Post</a></li>
                <li><a href="#yetenekler" className="item">İletişim</a></li>
            </ul>
        </div>
    </div>      
</div>
        </>
    )
    }