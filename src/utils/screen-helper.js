// Модуль экранный помощник
const ScreenHelper = (() => {
  /* eslint-disable no-unused-vars */
  const NAME = 'ScreenHelper';

  const Min = 320;
  const XS = 360;
  const SM = 768;
  const MD = 1025;
  const LG = 1240;

  const isMin = () => {
    return window.matchMedia(`(max-width: ${XS}px)`).matches;
  };

  const isXS = () => {
    return window.matchMedia(`(max-width: ${SM - 1}px)`).matches;
  };

  const isSM = () => {
    return window.matchMedia(`(min-width: ${SM}px) and (max-width: ${MD - 1}px)`).matches;
  };

  const isMD = () => {
    return window.matchMedia(`(min-width: ${MD}px) and (max-width: ${LG - 1}px)`).matches;
  };

  const isDesktop = () => {
    return window.matchMedia(`(min-width: ${MD}px)`).matches;
  };

  const isLG = () => {
    return window.matchMedia(`(min-width: ${LG}px)`).matches;
  };

  const getOrientation = () => {
    if (window.matchMedia('(orientation: portrait)').matches) {
      return 'portrait';
    } return 'landscape';
  };

  const getPixelRatio = () => {
    return window.devicePixelRatio
           || window.screen.deviceXDPI / window.screen.logicalXDPI;
  };

  const getScrollbarWidth = () => {
    const { body } = document;
    const bw1 = body.clientWidth;
    body.style.overflow = 'hidden';
    const bw2 = body.clientWidth;
    body.style.overflow = '';
    return bw2 - bw1;
  };

  return {
    isMin,
    isXS,
    isSM,
    isMD,
    isLG,
    isDesktop,
    getOrientation,
    getPixelRatio,
    getScrollbarWidth,
  };
})();

export default ScreenHelper;
