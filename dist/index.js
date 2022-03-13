"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectMenu = exports.ButtonGroup = exports.Modal = void 0;
const Types = __importStar(require("./deps"));
class Modal {
    /**
     * **Creates a new modal.**
     * @param title - The title of the modal.
     * @param custom_id - The custom id of the modal.
     */
    constructor({ title, custom_id }) {
        this.title = title;
        this.custom_id = custom_id;
        this.components = [];
    }
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
    addShortInput({ label, custom_id, required, min_length, max_length, placeholder, value }) {
        let component = {
            type: Types.ComponentTypes.TextInput,
            label,
            style: Types.TextInputStyle.Short,
            custom_id,
        };
        if (required)
            component.required = required;
        if (min_length)
            component.min_length = min_length;
        if (max_length)
            component.max_length = max_length;
        if (placeholder)
            component.placeholder = placeholder;
        if (value)
            component.value = value;
        this.components.push({
            type: Types.ComponentTypes.ActionRow,
            components: [component]
        });
        return this;
    }
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
    addLongInput({ label, custom_id, required, min_length, max_length, placeholder, value }) {
        let component = {
            type: Types.ComponentTypes.TextInput,
            label,
            style: Types.TextInputStyle.Paragraph,
            custom_id,
        };
        if (required)
            component.required = required;
        if (min_length)
            component.min_length = min_length;
        if (max_length)
            component.max_length = max_length;
        if (placeholder)
            component.placeholder = placeholder;
        if (value)
            component.value = value;
        this.components.push({
            type: Types.ComponentTypes.ActionRow,
            components: [component]
        });
        return this;
    }
}
exports.Modal = Modal;
class ButtonGroup {
    /**
     * **Creates a new button group.**
     */
    constructor() {
        this.type = Types.ComponentTypes.ActionRow;
        this.components = [];
    }
    /**
     * **Adds a button to the button group.**
     * @param label - The label of the button.
     * @param custom_id - The custom id of the button. - *(default: `null`, required if no `url`)*
     * @param style - The style of the button. - *(default: `Primary`)*
     * @param disabled - Whether the button is disabled. - *(default: `false`)*
     * @param emoji - The emoji of the button. - *(default: `null`)*
     * @param url - The url of the button. - *(default: `null`, required if no `custom_id`)*
     */
    addButton({ label, custom_id, style, disabled, emoji, url }) {
        let button = {
            type: Types.ComponentTypes.Button,
            style: Types.ButtonStyle[style] || Types.ButtonStyle.Primary,
            label,
        };
        if (custom_id)
            button.custom_id = custom_id;
        if (disabled)
            button.disabled = disabled;
        if (emoji)
            button.emoji = emoji;
        if (url)
            button.url = url;
        this.components.push(button);
        return this;
    }
}
exports.ButtonGroup = ButtonGroup;
class SelectMenu {
    /**
     * **Creates a new select menu.** - *(Can have upto 25 options)*
     * @param custom_id - The custom id of the select menu.
     * @param placeholder - The placeholder of the select menu. - *(default: `null`)*
     * @param min_values - The minimum number of values. - *(default: `1`)*
     * @param max_values - The maximum number of values. - *(default: `1`)*
     * @param disabled - Whether the select menu is disabled. - *(default: `false`)*
     */
    constructor({ custom_id, placeholder, min_values, max_values, disabled }) {
        this.type = Types.ComponentTypes.ActionRow;
        let selectMenu = {
            type: Types.ComponentTypes.SelectMenu,
            custom_id,
            options: [],
        };
        if (placeholder)
            selectMenu.placeholder = placeholder;
        if (min_values)
            selectMenu.min_values = min_values;
        if (max_values)
            selectMenu.max_values = max_values;
        if (disabled)
            selectMenu.disabled = disabled;
        this.components = [selectMenu];
    }
    /**
     * **Adds an option to the select menu.**
     * @param label - The label of the option.
     * @param value - The value of the option.
     * @param description - The description of the option. - *(default: `null`)*
     * @param emoji - The emoji of the option. - *(default: `null`)*
     * @param selected - Whether the option is selected. - *(default: `false`)*
     */
    addOption({ label, value, description, emoji, selected }) {
        let option = {
            label,
            value,
        };
        if (description)
            option.description = description;
        if (emoji)
            option.emoji = emoji;
        if (selected)
            option.default = selected;
        this.components[0].options.push(option);
        return this;
    }
}
exports.SelectMenu = SelectMenu;
//# sourceMappingURL=index.js.map