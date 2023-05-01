import { Workspace } from "../types/types";
import { requestBody } from "../utils/utils";

export const BASE_URL = "https://39314-3000.2.codesphere.com/";

export enum HTTP {
    POST = "post"
}

export enum ENDPOINTS {
    LIST_WORKSPACES = 'listWorkspaces',
    CREATE_WORKSPACE = 'createWorkspace',
    DELETE_WORKSPACE = 'deleteWorkspace'
}

export const BASE_BODY = {
    teamId: 1,
}

export const HEADERS = {
    "Content-Type": "application/json",
}

export function createDeleteService(endpoint: ENDPOINTS, fieldName: string, field: string | number, setWorkspaces: (value: Workspace[]) => void) {
    if (ENDPOINTS.CREATE_WORKSPACE || ENDPOINTS.DELETE_WORKSPACE) {
        fetch(`${BASE_URL}${endpoint}`, {
            method: HTTP.POST,
            headers: HEADERS,
            body: requestBody(fieldName, field)
        }).then(() => listWorkspacesService(setWorkspaces));
    }
}

export function listWorkspacesService(setWorkspaces: (value: Workspace[]) => void) {
    fetch(`${BASE_URL}${ENDPOINTS.LIST_WORKSPACES}`, {
        method: HTTP.POST,
        headers: HEADERS,
        body: JSON.stringify(BASE_BODY)
    }).then(response => response.json()).then(data => setWorkspaces(data));
}