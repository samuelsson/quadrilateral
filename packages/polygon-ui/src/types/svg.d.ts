declare module '*.svg' {
  const svgUrl: string;
  const svgComponent: SvgrComponent;
  export { svgComponent as ReactComponent };
  export default svgUrl;
}
