// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// Tests for isPhoneNumber
test('890-123-4567 is phone number', () => {
  expect(isPhoneNumber("abc-123-4567")).toBe(true);
});

test('(123) 456-7890 is phone number', () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});

test('1234567890 is not phone number', () => {
  expect(isPhoneNumber("123456789")).toBe(false);
});

test('123 456 7890 is not phone number', () => {
  expect(isPhoneNumber("123 456 7890")).toBe(false);
});

// Tests for isEmail
test('user@example.com is a valid email', () => {
  expect(isEmail("user@example.com")).toBe(true);
});

test('xiaogengxu_cse110@uc.sd is a valid email', () => {
  expect(isEmail("xiaogengxu_cse110@uc.sd")).toBe(true);
});

test('xiaogeng@.xu is not a valid email', () => {
  expect(isEmail("xiaogeng@.xu")).toBe(false);
});

test('cse@ucsd.xiaogengxu is not a valid email', () => {
  expect(isEmail("cse@ucsd.xiaogengxu")).toBe(false);
});


// Tests for isStrongPassword
test('Abc_123 is a strong password', () => {
  expect(isStrongPassword("Abc_123")).toBe(true);
});

test('a123 is a strong password', () => {
  expect(isStrongPassword("a123")).toBe(true);
});

test('123abc is not a strong password', () => {
  expect(isStrongPassword("123abc")).toBe(false);
});

test('Too$hort is not a strong password', () => {
  expect(isStrongPassword("Too$hort")).toBe(false);
});

// Tests for isDate
test('5/5/2025 is a valid date', () => {
  expect(isDate("5/5/2025")).toBe(true);
});

test('12/31/1999 is a valid date', () => {
  expect(isDate("12/31/1999")).toBe(true);
});

test('05-05-2025 is not a valid date', () => {
  expect(isDate("05-05-2025")).toBe(false);
});

test('5/5/25 is not a valid date', () => {
  expect(isDate("5/5/25")).toBe(false);
});

// Tests for isHexColor
test('#fff is a valid hex color', () => {
  expect(isHexColor("#fff")).toBe(true);
});

test('A1B2C3 is a valid hex color', () => {
  expect(isHexColor("A1B2C3")).toBe(true);
});

test('#12345 is not a valid hex color', () => {
  expect(isHexColor("#12345")).toBe(false);
});

test('G12FFF is not a valid hex color', () => {
  expect(isHexColor("G12FFF")).toBe(false);
});
