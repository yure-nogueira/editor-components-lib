import { p as proxyCustomElement, H, h, c as Host } from './p-8b6b9b3e.js';

const mtHeadingCss = ":host{--color:inherit;display:block}h1,h2,h3,h4,h5,h6{padding:0;margin:0;margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:0;color:var(--color)}h1{font-size:48px;line-height:60px}h2{font-size:42px;line-height:48px}h3{font-size:36px;line-height:40px}h4{font-size:30px;line-height:36px}h5{font-size:24px;line-height:32px}h6{font-size:18px;line-height:24px}";
const MtHeadingStyle0 = mtHeadingCss;

const MtHeading$1 = /*@__PURE__*/ proxyCustomElement(class MtHeading extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    static get style() { return MtHeadingStyle0; }
}, [1, "mt-heading", {
        "type": [513],
        "color": [513]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["mt-heading"];
    components.forEach(tagName => { switch (tagName) {
        case "mt-heading":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MtHeading$1);
            }
            break;
    } });
}
defineCustomElement$1();

const MtHeading = MtHeading$1;
const defineCustomElement = defineCustomElement$1;

export { MtHeading, defineCustomElement };

//# sourceMappingURL=mt-heading.js.map