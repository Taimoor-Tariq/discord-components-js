import * as Types from './deps';
declare class Modal {
    title: string;
    custom_id: string;
    components: Array<Types.ActionRow>;
    constructor(title: string, custom_id: string);
    addShortInput({ label, custom_id, required, min_length, max_length, placeholder, value }: Types.TextInputGenerator): this;
    addLongInput({ label, custom_id, required, min_length, max_length, placeholder, value }: Types.TextInputGenerator): this;
}
declare class ButtonGroup {
    components: Array<Types.Button>;
    type: Types.ComponentTypes;
    constructor();
    addButton({ style, label, custom_id, disabled, emoji, url }: Types.ButtonGenerator): this;
}
declare class SelectMenu {
    components: Array<Types.SelectMenu>;
    type: Types.ComponentTypes;
    constructor({ custom_id, placeholder, min_values, max_values, disabled }: Types.SelectMenuGenerator);
    addOption({ label, value, description, emoji, default: isDefault }: Types.SelectMenuOption): this;
}
export { Modal, ButtonGroup, SelectMenu };
