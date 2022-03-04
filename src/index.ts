import * as Types from './types';

enum ComponentTypes {
    ActionRow = 1,
    Button,
    SelectMenu,
    TextInput,
}

enum TextInputStyle {
    Short = 1,
    Paragraph,
}

enum ButtonStyle {
    Primary = 1,
    Secondary,
    Success,
    Danger,
    Link,

    Blurple = 1,
    Grey,
    Green,
    Red,
}

const ActionRow = ({components}: Types.ActionRow) => {
    return {
        type: ComponentTypes.ActionRow,
        components,
    }
};

const Button = ({ style, label, custom_id, emoji, url, disabled }: Types.Button) => {
    return {
        type: ComponentTypes.Button,
        style,
        label,
        custom_id,
        emoji,
        url,
        disabled,
    }
}

const SelectMenu = ({ custom_id, options, placeholder, min_values, max_values, disabled }: Types.SelectMenu) => {
    return {
        type: ComponentTypes.SelectMenu,
        custom_id,
        options,
        placeholder,
        min_values,
        max_values,
        disabled,
    }
}

const SelectMenuOption = ({ label, value, description, emoji, selected }: Types.SelectMenuOption) => {
    return {
        label,
        value,
        description,
        emoji,
        default: selected,
    }
}

const TextInput = ({ label, style, custom_id, required, min_length, max_length, placeholder, value }: Types.TextInput) => {
    return {
        type: ComponentTypes.TextInput,
        label,
        style,
        custom_id,
        required,
        min_length,
        max_length,
        placeholder,
        value,
    }
};

const Modal = ({ title, custom_id, components }: Types.Modal) => {
    return {
        title,
        custom_id,
        components,
    }
};


export { ActionRow, Button, SelectMenu, SelectMenuOption, TextInput, Modal, ButtonStyle, TextInputStyle };