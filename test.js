const { colorize, style, hex, bg, gradient, strip } = require("./index");

let passed = 0;
let failed = 0;

function assert(name, condition) {
  if (condition) {
    passed++;
    console.log(`  PASS: ${name}`);
  } else {
    failed++;
    console.log(`  FAIL: ${name}`);
  }
}

console.log("Running tests...\n");

assert("colorize returns colored text", colorize("hi", "red").includes("\x1b[31m"));
assert("colorize unknown color returns plain text", colorize("hi", "nope") === "hi");
assert("style bold wraps text", style("hi", "bold").includes("\x1b[1m"));
assert("hex returns a function", typeof hex("#FF0000") === "function");
assert("hex function wraps text", hex("#FF0000")("hi").includes("38;2;255;0;0"));
assert("bg returns a function", typeof bg("#00FF00") === "function");
assert("bg function wraps text", bg("#00FF00")("hi").includes("48;2;0;255;0"));
assert("gradient produces output", gradient("abc", "#FF0000", "#0000FF").length > 3);
assert("strip removes ANSI codes", strip("\x1b[31mhi\x1b[0m") === "hi");
assert("strip handles clean text", strip("hello") === "hello");

console.log(`\nResults: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
