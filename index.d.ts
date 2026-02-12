export type AnsiColor =
  | "black" | "red" | "green" | "yellow" | "blue"
  | "magenta" | "cyan" | "white"
  | "brightBlack" | "brightRed" | "brightGreen" | "brightYellow"
  | "brightBlue" | "brightMagenta" | "brightCyan" | "brightWhite";

export type StyleName =
  | "bold" | "dim" | "italic" | "underline"
  | "blink" | "inverse" | "strikethrough";

export function colorize(text: string, color: AnsiColor): string;
export function style(text: string, styleName: StyleName): string;
export function hex(hexColor: string): (text: string) => string;
export function bg(hexColor: string): (text: string) => string;
export function gradient(text: string, startHex: string, endHex: string): string;
export function strip(text: string): string;

export const ANSI: Record<AnsiColor, string>;
export const STYLES: Record<StyleName, string>;
