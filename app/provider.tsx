"use client";

import * as React from "react";

export type Theme = "light" | "dark" | "system";

export interface ThemeProviderProps {
  children: React.ReactNode;
  attribute?: string | string[];
  defaultTheme?: Theme;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
  storageKey?: string;
  themes?: string[];
  value?: Record<string, string>;
  enableColorScheme?: boolean;
}

type ThemeContextValue = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  resolvedTheme: string;
  themes: string[];
  systemTheme: string;
};

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined,
);
const defaultThemes = ["light", "dark"] as const;
const disableTransitionStyles =
  "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important;}";

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "dark",
  enableSystem = true,
  disableTransitionOnChange = false,
  storageKey = "theme",
  themes,
  value,
  enableColorScheme = true,
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<string>(defaultTheme);
  const [systemTheme, setSystemTheme] = React.useState<string>("light");

  const themeList = React.useMemo(() => themes ?? [...defaultThemes], [themes]);

  const themeValueMap = React.useMemo(
    () =>
      value ??
      Object.fromEntries(themeList.map((themeName) => [themeName, themeName])),
    [themeList, value],
  );

  const resolvedTheme =
    theme === "system" && enableSystem ? systemTheme : theme;

  React.useEffect(() => {
    const savedTheme = (() => {
      try {
        return localStorage.getItem(storageKey);
      } catch {
        return null;
      }
    })();

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(defaultTheme);
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? "dark" : "light");
    };

    setSystemTheme(media.matches ? "dark" : "light");

    if (media.addEventListener) {
      media.addEventListener("change", handleChange);
      return () => media.removeEventListener("change", handleChange);
    }

    media.addListener(handleChange);
    return () => media.removeListener(handleChange);
  }, [defaultTheme, storageKey]);

  React.useEffect(() => {
    const nextTheme = theme === "system" && enableSystem ? systemTheme : theme;
    const html = document.documentElement;
    const attributes = Array.isArray(attribute) ? attribute : [attribute];
    const themeClassName = themeValueMap[nextTheme] ?? nextTheme;
    const allClassNames = Object.values(themeValueMap);

    attributes.forEach((attr) => {
      if (attr === "class") {
        html.classList.remove(...allClassNames);
        html.classList.add(themeClassName);
      } else if (attr) {
        html.setAttribute(attr, themeClassName);
      }
    });

    if (enableColorScheme) {
      html.style.colorScheme = nextTheme;
    }

    let cleanup: (() => void) | undefined;

    if (disableTransitionOnChange) {
      const style = document.createElement("style");
      style.appendChild(document.createTextNode(disableTransitionStyles));
      document.head.appendChild(style);
      cleanup = () => {
        window.getComputedStyle(document.body);
        setTimeout(() => {
          if (style.parentNode) {
            style.parentNode.removeChild(style);
          }
        }, 1);
      };
    }

    return cleanup;
  }, [
    attribute,
    disableTransitionOnChange,
    enableColorScheme,
    enableSystem,
    resolvedTheme,
    systemTheme,
    theme,
    themeValueMap,
  ]);

  const setThemeState = React.useCallback(
    (nextTheme: React.SetStateAction<string>) => {
      setTheme((currentTheme) => {
        const resolved =
          typeof nextTheme === "function" ? nextTheme(currentTheme) : nextTheme;

        try {
          localStorage.setItem(storageKey, resolved);
        } catch {
          // ignore write errors
        }

        return resolved;
      });
    },
    [storageKey],
  );

  const contextValue = React.useMemo(
    () => ({
      theme,
      setTheme: setThemeState,
      resolvedTheme,
      themes: themeList,
      systemTheme,
    }),
    [theme, setThemeState, resolvedTheme, themeList, systemTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
