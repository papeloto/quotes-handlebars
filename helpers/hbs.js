module.exports = {
    calcColumnSize(text) {
        if (text.length < 20) return 3;

        return 4;
    },
    equals(arg1, arg2) {
        return arg1 === arg2;
    },
    currentNavigation(text, desiredUrl, currentUrl) {
        if (desiredUrl === currentUrl) {
            return `<strong>${text}</strong>`;
        }

        return text;
    }
};