import { useState, useEffect } from 'react'
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Popup from './Popup/Popup'
import Workspaces from './Workspaces/Workspaces';
import Card from 'react-bootstrap/Card';

import { Workspace } from './types/types';
import { ENDPOINTS } from './constants/constants';
import { createDeleteService, listWorkspacesService } from './services/services';

function App() {

  const [popup, togglePopup] = useState<boolean>(false);
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);

  useEffect(() => {
    listWorkspacesService(setWorkspaces);
  }, []);

  const onClickHandler = () => {
    togglePopup(!popup);
  }

  const handleClose = () => togglePopup(false);

  const deleteWorkspaceHandler = (workspaceId: number) => {
    createDeleteService(ENDPOINTS.DELETE_WORKSPACE, "workspaceId", workspaceId, setWorkspaces);
  }

  const createWorkspaceHandler = (value: string) => {
    createDeleteService(ENDPOINTS.CREATE_WORKSPACE, "name", value, setWorkspaces);
    togglePopup(false);
  }

  return (
    <Container>

      <Card style={{ marginTop: '50px' }}>
        <ListGroup>
          <ListGroup.Item>
            <Button onClick={onClickHandler} variant="info">New Workspace</Button>{' '}
          </ListGroup.Item>
          <ListGroup.Item style={{ display: 'flex', justifyContent: "space-between" }}>
            <p className='mb-0'>Name</p>
            <p className='mb-0'>Actions</p>
          </ListGroup.Item>
          <ListGroup.Item>
            {workspaces?.map(workspace => <Workspaces deleteWorkspace={deleteWorkspaceHandler} workspace={workspace} />)}
          </ListGroup.Item>
          <Popup createWorkspace={createWorkspaceHandler} workspaces={workspaces} show={popup} handleClose={handleClose} />
        </ListGroup>
      </Card>
    </Container>

  )
}

export default App
