const { hex, rgb, gradient, strip, style } = require('./index');

function bench(name, fn, iterations = 100000) {
  const start = process.hrtime.bigint();
  for (let i = 0; i < iterations; i++) fn();
  const elapsed = Number(process.hrtime.bigint() - start) / 1e6;
  console.log(`${name}: ${elapsed.toFixed(2)}ms (${iterations} iterations)`);
}

console.log('=== @shellcrafts/colorize benchmarks ===\n');

bench('hex() single color', () => hex('#FF5733')('hello'));
bench('rgb() single color', () => rgb(255, 87, 51)('hello'));
bench('gradient() short string', () => gradient('hello', '#FF0000', '#0000FF'));
bench('gradient() long string', () => gradient('a'.repeat(100), '#FF0000', '#0000FF'));
bench('strip() styled text', () => strip('\x1b[31m\x1b[1mhello world\x1b[0m'));
bench('style() bold', () => style('bold')('hello'));
bench('style() combined', () => style('bold', 'underline')('hello'));

console.log('\nDone.');
