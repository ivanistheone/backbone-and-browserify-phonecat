
// basic error reporting functionnality

module.exports = function(error) {
    var errorString = '[' + error.plugin + ']';
    errorString += ' ' + error.message.replace("\n",''); // Removes new line at the end
    if(error.fileName) {errorString += ' in ' + error.fileName; }
    if(error.lineNumber) {errorString += ' on line ' + error.lineNumber;}
    console.error(errorString);
}

