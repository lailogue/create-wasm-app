import * as wasm from "rust-wasm";

const count = prompt("Enter a calculation number:");
wasm.calc_pi(count);
