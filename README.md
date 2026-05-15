# @shellcrafts/colorize

Lightweight terminal color and theme utilities for shell prompt customization. Zero dependencies, pure ANSI escape codes.

## Install

```bash
npm install @shellcrafts/colorize
```

## Usage

```js
const { colorize, hex, gradient, style, strip } = require("@shellcrafts/colorize");

// Named colors
console.log(colorize("Hello!", "cyan"));
console.log(colorize("Warning!", "yellow"));

// Hex colors
const orange = hex("#FF7518");
console.log(orange("Pumpkin orange text"));

// Background colors
const highlight = bg("#FFFF00");
console.log(highlight("Highlighted text"));

// Text styles
console.log(style("Important", "bold"));
console.log(style("Subtle", "dim"));

// Gradients
console.log(gradient("Sunset vibes", "#FF6B6B", "#FFD93D"));
console.log(gradient("Ocean", "#0077B6", "#00B4D8"));

// Strip ANSI codes
const plain = strip(orange("colored text"));
console.log(plain); // "colored text"
```

## API

### `colorize(text, color)`
Apply a named ANSI color. Available colors: `black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`, and bright variants (`brightRed`, `brightGreen`, etc.).

### `style(text, styleName)`
Apply a text style: `bold`, `dim`, `italic`, `underline`, `blink`, `inverse`, `strikethrough`.

### `hex(hexColor)`
Returns a function that wraps text in a 24-bit true color foreground.

```js
const pink = hex("#FF69B4");
console.log(pink("Hot pink text"));
```

### `bg(hexColor)`
Returns a function that wraps text in a 24-bit true color background.

### `gradient(text, startHex, endHex)`
Apply a smooth color gradient across characters from `startHex` to `endHex`.

### `strip(text)`
Remove all ANSI escape codes from a string. Useful for calculating display width or logging to files.

### Constants

- `ANSI` - Map of color names to ANSI escape codes
- `STYLES` - Map of style names to ANSI escape codes

## Why another color library?

This is built specifically for shell prompt tools. It's tiny, has zero dependencies, and focuses on the features prompt customizers actually need: hex colors, gradients, and ANSI stripping.

## License

MIT
