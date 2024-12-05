import { Host, h } from "@stencil/core";
export class MtHeading {
    constructor() {
        this.type = 'h1';
        this.color = undefined;
    }
    getTypeElement() {
        switch (this.type) {
            case 'h1':
                return (h("h1", null, h("slot", null)));
            case 'h2':
                return (h("h2", null, h("slot", null)));
            case 'h3':
                return (h("h3", null, h("slot", null)));
            case 'h4':
                return (h("h4", null, h("slot", null)));
            case 'h5':
                return (h("h5", null, h("slot", null)));
            case 'h6':
                return (h("h6", null, h("slot", null)));
            default:
                return (h("h1", null, h("slot", null)));
        }
    }
    render() {
        var _a;
        return h(Host, { key: '3cc32411d6743ab8be54b93b10d123eff1b4e188', style: { '--color': (_a = this.color) !== null && _a !== void 0 ? _a : 'inherit' } }, this.getTypeElement());
    }
    static get is() { return "mt-heading"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["mt-heading.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["mt-heading.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",
                    "resolved": "\"h1\" | \"h2\" | \"h3\" | \"h4\" | \"h5\" | \"h6\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "type",
                "reflect": true,
                "defaultValue": "'h1'"
            },
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "color",
                "reflect": true
            }
        };
    }
}
//# sourceMappingURL=mt-heading.js.map
