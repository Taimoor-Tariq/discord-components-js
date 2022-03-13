import * as Types from './deps';

class Modal {
    components: Array<Types.ActionRow>;

    constructor(public title: string, public custom_id: string) { 
        this.title = title;
        this.custom_id = custom_id;
        this.components = [];
    }

    addShortInput({label, custom_id, required, min_length, max_length, placeholder, value}: Types.TextInputGenerator) {
        this.components.push({
            type: Types.ComponentTypes.ActionRow,
            components: [
                {
                    type: Types.ComponentTypes.TextInput,
                    label,
                    style: Types.TextInputStyle.Short,
                    custom_id,
                    required: required || false,
                    min_length: min_length || 0,
                    max_length: max_length || 4000,
                    placeholder: placeholder || '',
                    value: value || '',
                }
            ]
        });

        return this;
    }

    addLongInput({label, custom_id, required, min_length, max_length, placeholder, value}: Types.TextInputGenerator) {
        let component:Types.TextInput = {
            type: Types.ComponentTypes.TextInput,
            label,
            style: Types.TextInputStyle.Paragraph,
            custom_id,
        };

        if (required) component.required = required;
        if (min_length) component.min_length = min_length;
        if (max_length) component.max_length = max_length;
        if (placeholder) component.placeholder = placeholder;
        if (value) component.value = value;

        this.components.push({
            type: Types.ComponentTypes.ActionRow,
            components: [ component ]
        });

        return this;
    }
}

class ButtonGroup {
    components: Array<Types.Button>;
    type: Types.ComponentTypes = Types.ComponentTypes.ActionRow;

    constructor() {
        this.components = [];
    }

    addButton({style, label, custom_id, disabled, emoji, url}: Types.ButtonGenerator) {
        let button:Types.Button = {
            type: Types.ComponentTypes.Button,
            style: Types.ButtonStyle[style] || Types.ButtonStyle.Primary,
            label,
        }

        if (custom_id) button.custom_id = custom_id;
        if (disabled) button.disabled = disabled;
        if (emoji) button.emoji = emoji;
        if (url) button.url = url;

        this.components.push(button);

        return this;
    }
}

class SelectMenu {
    components: Array<Types.SelectMenu>;
    type: Types.ComponentTypes = Types.ComponentTypes.ActionRow;

    constructor({custom_id, placeholder, min_values, max_values, disabled}: Types.SelectMenuGenerator) {
        let selectMenu:Types.SelectMenu = {
            type: Types.ComponentTypes.SelectMenu,
            custom_id,
            options: [],
        }

        if (placeholder) selectMenu.placeholder = placeholder;
        if (min_values) selectMenu.min_values = min_values;
        if (max_values) selectMenu.max_values = max_values;
        if (disabled) selectMenu.disabled = disabled;

        this.components = [ selectMenu ];
    }

    addOption({label, value, description, emoji, default: isDefault}: Types.SelectMenuOption) {
        let option:Types.SelectMenuOption = {
            label,
            value,
        };

        if (description) option.description = description;
        if (emoji) option.emoji = emoji;
        if (isDefault) option.default = isDefault;

        this.components[0].options.push(option);

        return this;
    }
}


export { Modal, ButtonGroup, SelectMenu };