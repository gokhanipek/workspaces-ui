import { BASE_BODY } from "../constants/constants";
import { Workspace } from "../types/types";

export const isNameAvailable = (workspaces: Workspace[], value: string): boolean => {
    const nameArray = workspaces.filter(space => space.name === value);
    return !!nameArray.length;
}

export const requestBody = (field: string, value: string | number): string => {
    return JSON.stringify({
        ...BASE_BODY,
        [field]: value
    })
}