import * as Types from './deps';
declare class Modal {
    components: Array<Types.ActionRow>;
    title: string;
    custom_id: string;
    /**
     * **Creates a new modal.**
     * @param title - The title of the modal.
     * @param custom_id - The custom id of the modal.
     */
    constructor({ title, custom_id }: Types.ModalGenerator);
    /**
     * **Adds a short input field to the modal.**
     * @param label - The label of the input.
     * @param custom_id - The custom id of the input.
     * @param required - Whether the input is required. - *(default: `false`)*
     * @param placeholder - The placeholder of the input. - *(default: `null`)*
     * @param value - The value of the input. - *(default: `null`)*
     * @param min_length - The minimum length of the input. - *(default: `0`)*
     * @param max_length - The maximum length of the input. - *(default: `4000`)*
     */
    addShortInput({ label, custom_id, required, min_length, max_length, placeholder, value }: Types.TextInputGenerator): this;
    /**
     * **Adds a long input field to the modal.**
     * @param label - The label of the input.
     * @param custom_id - The custom id of the input.
     * @param required - Whether the input is required. - *(default: `false`)*
     * @param placeholder - The placeholder of the input. - *(default: `null`)*
     * @param value - The value of the input. - *(default: `null`)*
     * @param min_length - The minimum length of the input. - *(default: `0`)*
     * @param max_length - The maximum length of the input. - *(default: `4000`)*
     */
    addLongInput({ label, custom_id, required, min_length, max_length, placeholder, value }: Types.TextInputGenerator): this;
}
declare class ButtonGroup {
    components: Array<Types.Button>;
    type: Types.ComponentTypes;
    /**
     * **Creates a new button group.**
     */
    constructor();
    /**
     * **Adds a button to the button group.**
     * @param label - The label of the button.
     * @param custom_id - The custom id of the button. - *(default: `null`, required if no `url`)*
     * @param style - The style of the button. - *(default: `Primary`)*
     * @param disabled - Whether the button is disabled. - *(default: `false`)*
     * @param emoji - The emoji of the button. - *(default: `null`)*
     * @param url - The url of the button. - *(default: `null`, required if no `custom_id`)*
     */
    addButton({ label, custom_id, style, disabled, emoji, url }: Types.ButtonGenerator): this;
}
declare class SelectMenu {
    components: Array<Types.SelectMenu>;
    type: Types.ComponentTypes;
    /**
     * **Creates a new select menu.** - *(Can have upto 25 options)*
     * @param custom_id - The custom id of the select menu.
     * @param placeholder - The placeholder of the select menu. - *(default: `null`)*
     * @param min_values - The minimum number of values. - *(default: `1`)*
     * @param max_values - The maximum number of values. - *(default: `1`)*
     * @param disabled - Whether the select menu is disabled. - *(default: `false`)*
     */
    constructor({ custom_id, placeholder, min_values, max_values, disabled }: Types.SelectMenuGenerator);
    /**
     * **Adds an option to the select menu.**
     * @param label - The label of the option.
     * @param value - The value of the option.
     * @param description - The description of the option. - *(default: `null`)*
     * @param emoji - The emoji of the option. - *(default: `null`)*
     * @param selected - Whether the option is selected. - *(default: `false`)*
     */
    addOption({ label, value, description, emoji, selected }: Types.SelectMenuOptionGenerator): this;
}
export { Modal, ButtonGroup, SelectMenu };
