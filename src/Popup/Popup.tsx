import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Workspace } from "../types/types";
import { isNameAvailable } from "../utils/utils";

interface Props {
    workspaces: Workspace[];
    createWorkspace: (value: string) => void;
    show: boolean;
    handleClose: () => void;
}


function Popup({ workspaces, createWorkspace, show, handleClose }: Props) {
    const [value, setValue] = useState<string>("");
    const [error, setError] = useState<string | null>();
    

    const setValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError(null)
        isNameAvailable(workspaces, e.target.value) && setError('This name is not available');
        setValue(e.target.value);
    }

    const onClickHandler = () => {
        !error && createWorkspace(value);
        handleClose();
        setValue("");
    }

    const onCloseHandler = () => {
        handleClose();
        setValue("");
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create Workspace</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control required value={value} onChange={setValueHandler} className="mb-2" placeholder='Workspace name' type='text' />
                {!!error && <span className="text-danger">{error}</span>}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onCloseHandler}>
                    Close
                </Button>
                <Button disabled={!!error || value === ""} variant="primary" onClick={onClickHandler}>
                    Create
                </Button>
            </Modal.Footer>
        </Modal >
    )
}

export default Popup;
