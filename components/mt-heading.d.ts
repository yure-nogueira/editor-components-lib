import type { Components, JSX } from "../types/components";

interface MtHeading extends Components.MtHeading, HTMLElement {}
export const MtHeading: {
    prototype: MtHeading;
    new (): MtHeading;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
