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
    constructor(title, custom_id) {
        this.title = title;
        this.custom_id = custom_id;
        this.title = title;
        this.custom_id = custom_id;
        this.components = [];
    }
    addShortInput({ label, custom_id, required, min_length, max_length, placeholder, value }) {
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
    constructor() {
        this.type = Types.ComponentTypes.ActionRow;
        this.components = [];
    }
    addButton({ style, label, custom_id, disabled, emoji, url }) {
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
    addOption({ label, value, description, emoji, default: isDefault }) {
        let option = {
            label,
            value,
        };
        if (description)
            option.description = description;
        if (emoji)
            option.emoji = emoji;
        if (isDefault)
            option.default = isDefault;
        this.components[0].options.push(option);
        return this;
    }
}
exports.SelectMenu = SelectMenu;
//# sourceMappingURL=index.js.map