export const handleNumberInput = (event) => {
    let value = event.target.value.replace(/\D/g, "");
    if (value.length > 16) {
        value = value.slice(0, 16);
    }
    event.target.value = value;
};

export const handleExpirationInput = (event) => {
    let value = event.target.value.replace(/\D/g, "");
    if (value.length > 4) {
        value = value.slice(0, 4);
    }
    event.target.value = value;
};

export const handleCvvInput = (event) => {
    let value = event.target.value.replace(/\D/g, "");
    if (value.length > 4) {
        value = value.slice(0, 4);
    }
    event.target.value = value;
};

// Handles blur event for credit card number field
export const handleNumberBlur = (event, errors, errorName) => {
    const value = event.target.value;
    errors[errorName] = validateNumber(value) ? "" : "Invalid credit card number";
};

// Handles blur event for credit card expiration date field
export const handleExpirationBlur = (event, errors, errorName) => {
    const value = event.target.value;
    errors[errorName] = validateExpiration(value) ? "" : "Invalid expiration date";
};

// Handles blur event for credit card CVV field
export const handleCvvBlur = (event, errors, errorName) => {
    const value = event.target.value;
    errors[errorName] = validateCvv(value) ? "" : "Invalid CVV";
};

/**
 * Validates the credit card number using the Luhn algorithm.
 * @param {string} number - The credit card number.
 * @returns {boolean} - True if the number is valid, false otherwise.
 */
export const validateNumber = (number) => {
    const luhnCheck = (num) => {
        let arr = (num + '')
            .split('')
            .reverse()
            .map(x => parseInt(x));
        let lastDigit = arr.splice(0, 1)[0];
        let sum = arr.reduce(
            (acc, val, i) =>
                i % 2 !== 0
                    ? acc + val
                    : acc + ((val *= 2) > 9 ? val - 9 : val),
            0
        );
        sum += lastDigit;
        return sum % 10 === 0;
    };

    return luhnCheck(number);
};

/**
 * Validates the expiration date of the credit card.
 * @param {string} expiration - The expiration date in MMYY format.
 * @returns {boolean} - True if the expiration date is valid, false otherwise.
 */
export const validateExpiration = (expiration) => {
    const month = parseInt(expiration.substring(0, 2), 10);
    const year = parseInt(expiration.substring(2, 4), 10) + 2000;

    if (isNaN(month) || isNaN(year) || month < 1 || month > 12) {
        return false;
    }

    const currentDate = new Date();
    const expirationDate = new Date(year, month - 1); // Month is 0-indexed in JavaScript Date

    return expirationDate >= currentDate;
};


/**
 * Validates the CVV of the credit card.
 * @param {string} value - The CVV value.
 * @returns {boolean} - True if the CVV is valid, false otherwise.
 */
export const validateCvv = (value) => {
    return value.length >= 3 && value.length <= 4;
};