type Emoji = {
    id: string;
    name: string;
    animated?: boolean;
}

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

interface ActionRow {
    type: ComponentTypes.ActionRow;
    components: Array<TextInput | Button | SelectMenu>;
}


interface ButtonGenerator {
    style: 'Primary' | 'Secondary' | 'Success' | 'Danger' | 'Link' | 'Blurple' | 'Grey' | 'Green' | 'Red';
    label: string;
    custom_id?: string;
    emoji?: Emoji;
    url?: string;
    disabled?: boolean;
}

interface Button extends Omit<ButtonGenerator, 'style'> {
    type: ComponentTypes.Button;
    style: ButtonStyle;
}


interface SelectMenuOptionGenerator {
    label: string;
    value: string;
    description?: string;
    emoji?: Emoji;
    selected?: boolean;
}

interface SelectMenuOption extends Omit<SelectMenuOptionGenerator, 'selected'> {
    default?: boolean;
}

interface SelectMenuGenerator {
    custom_id: string;
    placeholder?: string;
    min_values?: number;
    max_values?: number;
    disabled?: boolean;
}

interface SelectMenu extends SelectMenuGenerator {
    type: ComponentTypes.SelectMenu;
    options: Array<SelectMenuOption>;
}


interface ModalGenerator {
    title: string;
    custom_id: string;
}

interface Modal extends ModalGenerator {
    components: Array<ActionRow>;
}

interface TextInputGenerator {
    label: string; 
    custom_id: string;
    required?: boolean;
    min_length?: number;
    max_length?: number;
    placeholder?: string;
    value?: string;
}

interface TextInput extends TextInputGenerator {
    type: ComponentTypes.TextInput;
    style: TextInputStyle;
}

export { ActionRow, Modal, Button, SelectMenu, SelectMenuOption, TextInput, ButtonGenerator, ModalGenerator, TextInputGenerator, SelectMenuGenerator, SelectMenuOptionGenerator, ComponentTypes, TextInputStyle, ButtonStyle };
