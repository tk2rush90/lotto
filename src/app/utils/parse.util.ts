/**
 * parse the string to numeric string
 * @param value value to parse
 */
export function parseNumericString(value: string): string {
  // remove string
  value = value.replace(/[a-zA-Z]/g, '');
  // remove starting 0
  if (value[0] === '0' && value[1] !== '.') {
    value = value.replace('0', '');
  }

  if (!value) {
    value = '0';
  }

  return value;
}
