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

