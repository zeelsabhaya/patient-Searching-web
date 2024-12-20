import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getdata } from '../servis/storegData';
import { useState } from 'react';


function MyVerticallyCenteredModal(props) {
    const [storeg, setstoreg] = useState(getdata());

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className='fs-2 fw-bold'>
                    Filter Data
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='d-flex'>
                <div className="mx-2">
                    <h2 className='text-center col'>Name Filter</h2>
                    <hr />
                    <Button className='mx-4 mt-4 mb-4' onClick={() => props.handelSort('asc', 'Name')} >A-Z</Button>
                    <Button className='mx-4 mt-4 mb-4' onClick={() => props.handelSort('desc', 'Name')}> Z-A</Button>|
                </div>
                <div className="mx-2">
                    <h2 className='text-center col'>B.O.D</h2>
                    <hr />
                    |<Button className='mx-4 mt-4 mb-4' onClick={() => props.handelSort('asc', "bod")} >small</Button>
                    <Button className='mx-4 mt-4 mb-4' onClick={() => props.handelSort('desc', "bod")}> Big</Button>|
                </div>
                <div className="mx-2">
                    <h2 className='text-center col'>Address</h2>
                    <hr />
                    |<Button className='mx-4 mt-4 mb-4' onClick={() => props.handelSort('asc', "Address")} >A-Z</Button>
                    <Button className='mx-4 mt-4 mb-4' onClick={() => props.handelSort('desc', "Address")}>Z-A</Button>|
                </div>
                <div className="mx-2">
                    <h2 className='text-center col'>Gender</h2>
                    <hr />
                    |<Button className='mx-4 mt-4 mb-4' onClick={() => props.handelSort('asc', 'gender')} > Female</Button>
                    <Button className='mx-4 mt-4 mb-4' onClick={() => props.handelSort('desc', 'gender')}>Male</Button>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default MyVerticallyCenteredModal;