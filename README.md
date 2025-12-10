# @shellcrafts/colorize

Lightweight terminal color and theme utilities for shell prompt customization. Zero dependencies, pure ANSI escape codes.

## Install

```bash
npm install @shellcrafts/colorize
```

## Usage

```js
const { colorize, hex, gradient, style } = require("@shellcrafts/colorize");

// Named colors
console.log(colorize("Hello!", "cyan"));
console.log(colorize("Warning!", "yellow"));

// Hex colors
const orange = hex("#FF7518");
console.log(orange("Pumpkin orange text"));

// Text styles
console.log(style("Important", "bold"));
console.log(style("Subtle", "dim"));

// Gradients
console.log(gradient("Sunset vibes", "#FF6B6B", "#FFD93D"));

// Strip ANSI codes
const plain = strip(orange("colored text"));
```

## API

### `colorize(text, color)`
Apply a named ANSI color. Available colors: `black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`, and bright variants.

### `style(text, styleName)`
Apply a text style: `bold`, `dim`, `italic`, `underline`, `blink`, `inverse`, `strikethrough`.

### `hex(hexColor)`
Returns a function that wraps text in a 24-bit true color.

### `bg(hexColor)`
Like `hex()` but for background colors.

### `gradient(text, startHex, endHex)`
Apply a color gradient across characters.

### `strip(text)`
Remove all ANSI escape codes from a string.

## Why another color library?

This is built specifically for shell prompt tools. It's tiny, has zero dependencies, and focuses on the features prompt customizers actually need: hex colors, gradients, and ANSI stripping.

## License

MIT
