import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {createDevice, fetchBrands, fetchTypes} from "../../http/deviceAPI";

const CreateDevice = observer(  ({show, onHide}) => {
    const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = number => {
        setInfo(info.filter(i => i.number !== number))
    }

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    ADD NEW DEVICE
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{device.selectedType.name || "Select a type"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map( type =>
                                <Dropdown.Item
                                    onClick={() => device.setSelectedType(type)}
                                    key={type.id}>
                                    {type.name}
                                </Dropdown.Item>
                        )}</Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{device.selectedBrand.name || "Select a brand"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map( brand =>
                                <Dropdown.Item
                                    onClick={() => device.setSelectedBrand(brand)}
                                    key={brand.id}>
                                    {brand.name}
                                </Dropdown.Item>
                        )}</Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Enter name of device"
                    />
                    <Form.Control
                        onChange={e => {setPrice(Number(e.target.value))}}
                        className="mt-3"
                        placeholder="Enter price of device"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter image of device"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        Add new property
                    </Button>
                    {info.map( item =>
                    <Row key={item.number} className="mt-2">
                        <Col md={4}>
                            <Form.Control
                                value={item.name}
                                placeholder="Enter name or property"
                                onChange={(e) => changeInfo('title', e.target.value, item.number)}
                            />
                        </Col>
                        <Col md={4}>
                            <Form.Control
                                value={item.description}
                                placeholder="Enter description of property"
                                onChange={(e) => changeInfo('description', e.target.value, item.number)}

                            />
                        </Col>
                        <Col md={4}>
                            <Button variant="outline-danger" onClick={() => removeInfo(item.number)}>
                                Delete
                            </Button>
                        </Col>
                    </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick={addDevice}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;