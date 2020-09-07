type Action = {
    type: string,
    icon: string,
    label: string,
    actionName: string,
    transparent: boolean,
    actionHandler: () => void,
}

export type Actions = Action[];
