var exec = require('cordova/exec');

exports.discoverPrinters = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'ZebraBluetoothPrinter', 'discoverPrinters', []);
};

exports.getBondedPrinters = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'ZebraBluetoothPrinter', 'getBondedPrinters', []);
};

exports.print = function(MACAddress, str, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'ZebraBluetoothPrinter', 'print', [MACAddress, str]);
};

exports.printZplOverSecureBluetooth = function(MACAddress, strArr, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'ZebraBluetoothPrinter', 'sendZplOverSecureBluetooth', [MACAddress, strArr]);
};

exports.printImage = function(base64, MACAddress, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'ZebraBluetoothPrinter', 'printImage', [base64, MACAddress]);
};

exports.getPrinterName = function(MACAddress, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'ZebraBluetoothPrinter', 'getPrinterName', [MACAddress]);
};

exports.getStatus = function(MACAddress, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'ZebraBluetoothPrinter', 'getStatus', [MACAddress]);
};

exports.getZPLfromImage = function(base64String, addHeaderFooter, blacknessPercentage, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'ZebraBluetoothPrinter', 'getZPLfromImage', [base64String, addHeaderFooter, blacknessPercentage]);
};
