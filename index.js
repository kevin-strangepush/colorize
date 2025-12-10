const RESET = "\x1b[0m";

const ANSI = {
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  brightBlack: "\x1b[90m",
  brightRed: "\x1b[91m",
  brightGreen: "\x1b[92m",
  brightYellow: "\x1b[93m",
  brightBlue: "\x1b[94m",
  brightMagenta: "\x1b[95m",
  brightCyan: "\x1b[96m",
  brightWhite: "\x1b[97m",
};

const STYLES = {
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  italic: "\x1b[3m",
  underline: "\x1b[4m",
  blink: "\x1b[5m",
  inverse: "\x1b[7m",
  strikethrough: "\x1b[9m",
};

function colorize(text, color) {
  const code = ANSI[color];
  if (!code) return text;
  return `${code}${text}${RESET}`;
}

function style(text, styleName) {
  const code = STYLES[styleName];
  if (!code) return text;
  return `${code}${text}${RESET}`;
}

function hex(hexColor) {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  return function (text) {
    return `\x1b[38;2;${r};${g};${b}m${text}${RESET}`;
  };
}

function bg(hexColor) {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  return function (text) {
    return `\x1b[48;2;${r};${g};${b}m${text}${RESET}`;
  };
}

function gradient(text, startHex, endHex) {
  const sr = parseInt(startHex.slice(1, 3), 16);
  const sg = parseInt(startHex.slice(3, 5), 16);
  const sb = parseInt(startHex.slice(5, 7), 16);
  const er = parseInt(endHex.slice(1, 3), 16);
  const eg = parseInt(endHex.slice(3, 5), 16);
  const eb = parseInt(endHex.slice(5, 7), 16);

  const len = text.length;
  let result = "";
  for (let i = 0; i < len; i++) {
    const ratio = len > 1 ? i / (len - 1) : 0;
    const r = Math.round(sr + (er - sr) * ratio);
    const g = Math.round(sg + (eg - sg) * ratio);
    const b = Math.round(sb + (eb - sb) * ratio);
    result += `\x1b[38;2;${r};${g};${b}m${text[i]}`;
  }
  return result + RESET;
}

function strip(text) {
  return text.replace(/\x1b\[[0-9;]*m/g, "");
}

module.exports = { colorize, style, hex, bg, gradient, strip, ANSI, STYLES };
