declare module 'vanta/dist/vanta.waves.min' {
    interface VantaOptions {
        el: HTMLElement;
        mouseControls: boolean;
        touchControls: boolean;
        gyroControls: boolean;
        minHeight: number;
        minWidth: number;
        scale: number;
        scaleMobile: number;
        color: number;
        backgroundColor: number;
    }

    const WAVES: (options: VantaOptions) => () => void;
    export default WAVES;
}