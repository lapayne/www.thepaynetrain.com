import "@testing-library/jest-dom";
import React from "react";

// Mock next/link for tests
jest.mock("next/link", () => {
  return {
    __esModule: true,
    default: ({ children, href, ...props }: any) =>
      React.createElement("a", { href, ...props }, children),
  };
});

// Mock framer-motion and motion/react to avoid complex browser APIs in unit tests
jest.mock("framer-motion", () => {
  const React = require("react");

  const filterMotionProps = (props: any) => {
    const {
      initial,
      animate,
      transition,
      whileInView,
      whileHover,
      whileTap,
      variants,
      exit,
      onViewportEnter,
      onViewportLeave,
      ...rest
    } = props || {};
    return rest;
  };

  const motion = new Proxy(
    {},
    {
      get: (_target, prop) => (props: any) =>
        React.createElement(
          prop as string,
          filterMotionProps(props),
          props.children,
        ),
    },
  );

  return {
    __esModule: true,
    motion,
    useScroll: () => ({ scrollYProgress: { current: 0 } }),
    useTransform: () => 0,
    useMotionValueEvent: () => {},
  };
});

jest.mock("motion/react", () => {
  const React = require("react");

  const filterMotionProps = (props: any) => {
    const {
      initial,
      animate,
      transition,
      whileInView,
      whileHover,
      whileTap,
      variants,
      exit,
      onViewportEnter,
      onViewportLeave,
      ...rest
    } = props || {};
    return rest;
  };

  const motion = new Proxy(
    {},
    {
      get: (_target, prop) => (props: any) =>
        React.createElement(
          prop as string,
          filterMotionProps(props),
          props.children,
        ),
    },
  );

  return {
    __esModule: true,
    motion,
    useAnimationFrame: (_cb: any) => {},
    useMotionValue: () => ({ get: () => 0, set: () => {} }),
    useTransform: () => 0,
    useMotionTemplate: () => "",
  };
});

jest.mock("next-themes", () => ({
  useTheme: () => ({ theme: "light" }),
}));

jest.mock("react-icon-cloud", () => ({
  __esModule: true,
  Cloud: ({ children }: any) => React.createElement("div", null, children),
  fetchSimpleIcons: async () => ({ simpleIcons: {} }),
  renderSimpleIcon: () => React.createElement("span", null, "icon"),
}));

// Mock complex visual components that rely on browser APIs not available in JSDOM
jest.mock("./components/ui/dotted-glow-background", () => ({
  __esModule: true,
  default: () => React.createElement("div", { "data-testid": "dotted-glow" }),
}));

jest.mock("./components/ui/IconCloud", () => ({
  __esModule: true,
  IconCloud: ({ iconSlugs }: any) =>
    React.createElement(
      "div",
      { "data-testid": "icon-cloud" },
      iconSlugs.length,
    ),
}));

// Polyfill some browser APIs used by components
// @ts-ignore
global.matchMedia =
  global.matchMedia ||
  (() => ({
    matches: false,
    addEventListener: () => {},
    removeEventListener: () => {},
  }));

// Provide a fetch polyfill for tests
// @ts-ignore
global.fetch = global.fetch || jest.fn();

// @ts-ignore
global.ResizeObserver =
  global.ResizeObserver ||
  class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };

// JSDOM does not implement canvas getContext; provide a minimal stub
// @ts-ignore
if (!HTMLCanvasElement.prototype.getContext) {
  // @ts-ignore
  HTMLCanvasElement.prototype.getContext = function () {
    return {
      setTransform: () => {},
      clearRect: () => {},
      fillRect: () => {},
      createRadialGradient: () => ({ addColorStop: () => {} }),
      fill: () => {},
      beginPath: () => {},
      arc: () => {},
      save: () => {},
      restore: () => {},
      globalAlpha: 1,
      shadowColor: "",
      shadowBlur: 0,
    };
  };
}

// @ts-ignore
global.requestAnimationFrame =
  global.requestAnimationFrame || ((cb) => setTimeout(() => cb(Date.now()), 0));
// @ts-ignore
global.cancelAnimationFrame =
  global.cancelAnimationFrame || ((id) => clearTimeout(id));
