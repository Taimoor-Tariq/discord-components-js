type Emoji = {
    id: string;
    name: string;
    animated?: boolean;
}

type ActionRow = {
    type: number;
    components: [Button | TextInput | SelectMenu];
};

type Button = {
    type: number;
    style: number;
    label?: string;
    custom_id?: string;
    emoji?: Emoji;
    url?: string;
    disabled?: boolean;
}

type SelectMenu = {
    type: number;
    custom_id: string;
    options: [SelectMenuOption];
    placeholder?: string;
    min_values?: number;
    max_values?: number;
    disabled?: boolean;
}

type SelectMenuOption = {
    label: string;
    value: string;
    description?: string;
    emoji?: Emoji;
    selected?: boolean;
}


type TextInput = {
    label: string;
    type: number;
    style: number;
    custom_id: string;
    required?: boolean;
    min_length?: number;
    max_length?: number;
    placeholder?: string;
    value?: string;
};

type Modal = {
    title: string;
    custom_id: string;
    components: [ActionRow];
};

export { ActionRow, Button, SelectMenu, SelectMenuOption, TextInput, Modal };
