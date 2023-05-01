import Dropdown from 'react-bootstrap/Dropdown';
import { Workspace } from '../types/types';


interface Props {
    workspace: Workspace;
    deleteWorkspace: (value: number) => void;
}

function Workspaces({ workspace, deleteWorkspace }: Props): JSX.Element {
    const buttonClickHandler = () => {
        deleteWorkspace(workspace.id);
    }

    return (
        <>
            <div key={workspace.id} className="mb-2" style={{ display: 'flex', justifyContent: "space-between" }}>
                <p className='workspaces-name'>{workspace.name}</p>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        More
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" onClick={buttonClickHandler}>Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </div>
        </>
    )
}

export default Workspaces;
