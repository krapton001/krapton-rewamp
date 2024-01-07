export const HOST = 'https://www.krapton.com';
export const APP_TITLE = 'Krapton';

export const DEFAULT_BG_STYLE = {
    background: 'black',
};

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randomNumber = generateRandomNumber(999, 999999);
