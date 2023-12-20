export default class Validator {
  validateUsername(str) {
    // set regex array
    // accept symbols
    // except numbers in the begin
    // except numbers in the end
    // except more than 3 numbers in row
    this.regex = [
      /[A-Za-z\d_-]+/,
      /^[^\d_-]/,
      /[^\d_-]$/,
      /^((?!\d{4}).)*$/,
    ];

    for (const re of this.regex) {
      if (!re.test(str)) {
        return false;
      }
    }

    return true;
  }
}
