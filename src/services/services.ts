import { BASE_BODY, BASE_URL, ENDPOINTS, HEADERS, HTTP } from "../constants/constants";
import { Workspace } from "../types/types";
import { requestBody } from "../utils/utils";

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