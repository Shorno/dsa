import { expect, test } from "bun:test";
import tribu from "./tribu";

test("tribu(0) === 0", () => {
  expect(tribu(0)).toBe(0);
});

test("tribu(1) === 0", () => {
  expect(tribu(1)).toBe(0);
});

test("tribu(2) === 1", () => {
  expect(tribu(2)).toBe(1);
});

test("tribu(3) === 1", () => {
  expect(tribu(3)).toBe(1);
});

test("tribu(4) === 2", () => {
  expect(tribu(4)).toBe(2);
});

test("tribu(5) === 4", () => {
  expect(tribu(5)).toBe(4);
});

test("tribu(6) === 7", () => {
  expect(tribu(6)).toBe(7);
});

test("tribu(7) === 13", () => {
  expect(tribu(7)).toBe(13);
});

test("tribu(8) === 24", () => {
  expect(tribu(8)).toBe(24);
});

test("tribu(9) === 44", () => {
  expect(tribu(9)).toBe(44);
});

test("tribu(10) === 81", () => {
  expect(tribu(10)).toBe(81);
});

test("tribu(11) === 149", () => {
  expect(tribu(11)).toBe(149);
});

test("tribu(12) === 274", () => {
  expect(tribu(12)).toBe(274);
});

test("tribu(13) === 504", () => {
  expect(tribu(13)).toBe(504);
});

test("tribu(14) === 927", () => {
  expect(tribu(14)).toBe(927);
});

test("tribu(15) === 1705", () => {
  expect(tribu(15)).toBe(1705);
});

test("tribu(16) === 3136", () => {
  expect(tribu(16)).toBe(3136);
});

test("tribu(17) === 5768", () => {
  expect(tribu(17)).toBe(5768);
});

test("tribu(18) === 10609", () => {
  expect(tribu(18)).toBe(10609);
});

test("tribu(19) === 19513", () => {
  expect(tribu(19)).toBe(19513);
});