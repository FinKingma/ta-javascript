var getButtonWithText = function(buttonText) {
    return element(by.cssContainingText('button', buttonText));
}

module.exports = getButtonWithText;