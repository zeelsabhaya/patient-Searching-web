import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { getdata } from "../servis/storegData";
import { useNavigate } from "react-router";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import './style.css'
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";


const Home = () => {
    const navigate = useNavigate();

    const [storeg, setstoreg] = useState(getdata());
    const [Search, setSearch] = useState("");
    const [modalShow, setModalShow] = React.useState(false);

    const deleteData = (id) => {
        const deletes = storeg.filter((item) => item.id !== id);
        setstoreg(deletes);
        localStorage.setItem("products", JSON.stringify(deletes));
    }

    const editData = (id) => {
        navigate(`/Edit/${id}`)
    }

    const viewData = (id) => {
        navigate(`/View/${id}`)
    }

    const hendelserch = (e) => {
        let datas = getdata()
        let serchdata = datas.filter((value) => {
            return value.Name.toLowerCase() == Search || value.Contacts == Search || value.gender == Search || value.bod == Search || value.id == Search
        })
        if(Search==""){
            document.getElementById("mt").innerHTML="your value is Mt "
            document.getElementById("mt").style.color = "red";
            document.getElementById("mt").style.fontFamily="bold";
            document.getElementById("mt").style.fontSize="25px";
            document.getElementById("mt").style.display="block";
            document.getElementById("mtcard").style.display="none";
        }else{
            document.getElementById("mt").style.display="none";
            document.getElementById("mtcard").style.display="block";
            setstoreg(serchdata)
        }
    }

    const handelSort = (type,field) => {
        let datas = getdata()
        let sortdata = datas.sort((a, b) => {
            if (type == "asc") {
                setModalShow(false)
                return a[field].localeCompare(b[field])
            } else if (type == "desc") {
                setModalShow(false)
                return b[field].localeCompare(a[field])
            }
        })
        setstoreg(sortdata)
    }

    return (
        <>
            <Container className="mt-5">
                <h3 className="pb-5 fw-bold fs-1">Patient Card</h3>
                <input type="text" className="me-4" value={Search} onChange={(e) => setSearch(e.target.value)} />
                <Button className="btn btn-primary py-1" onClick={hendelserch}>Search</Button>
                {/* <Button onClick={handelAsc}  ms-5">filter</Button> */}
                <Button variant="primary" className="mx-2" onClick={() => setModalShow(true)}>
                    filter
                </Button>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    handelSort={handelSort}
                />
                <div className="d-block card-list">
                    <div id="mt"> </div>
                    <Row id="mtcard">
                        {
                            storeg.map((value, index) => (
                                <Col className="col" xs={4} key={index}>
                                    <div className="card bg-white p-5 rounded-4 m-3 ">
                                        <div className="card-title">
                                            <div className="patient-img d-flex justify-content-between align-items-start">
                                                <div className="img border rounded-circle overflow-hidden"><img src="https://png.pngtree.com/png-vector/20200425/ourmid/pngtree-single-person-character-in-vector-png-image_2194492.jpg" alt="patient" /></div>
                                                <p className="p-id border border-success-subtle rounded-pill px-2 bg-success-subtle text-success mt-1">{value.id}</p>
                                            </div>
                                            <div className="name d-flex pt-3">
                                                <h5 className="me-2">{value.Name}</h5>
                                                <p className="border px-1 rounded p-tage bg-dark-subtle">{value.gender}</p>
                                            </div>
                                            <div className="all-bts d-flex">
                                                <Button className="bts p-0 px-3 py-1 me-2 mt-3" onClick={() => editData(value.id)}>
                                                    <FaEdit /> Edit
                                                </Button>
                                                <Button className="bts p-0 px-3 py-1 me-2 mt-3" onClick={() => viewData(value.id)}>
                                                    <FaEye /> View
                                                </Button>
                                            </div>
                                            <div className="border my-4"></div>
                                            <p className="text-secondary mb-2">DOB</p>
                                            <p>{value.bod}</p>
                                            <p className="text-secondary mb-2">Address</p>
                                            <p>{value.Address}</p>
                                            <p className="text-secondary mb-2">Contacts</p>
                                            <p>{value.Contacts}</p>
                                            <div className="border my-4"></div>
                                            <Button className="p-0 px-3 py-1 me-2 mt-3" onClick={() => deleteData(value.id)}>
                                                <MdDelete /> Delete
                                            </Button>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }

                    </Row>

                </div>
            </Container>
        </>
    )
}
export default Home;