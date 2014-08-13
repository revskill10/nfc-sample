var app = {
	
	initialize: function() {
this.bindEvents();
console.log("Starting NFC Reader app");
},
/*
bind any events that are required on startup to listeners:
*/
bindEvents: function() {
document.addEventListener('deviceready', this.onDeviceReady, false);
},
onDeviceReady: function() {
nfc.addTagDiscoveredListener(
app.onNfc, // tag successfully scanned
function (status) { // listener successfully initialized
app.display("Tap a tag to read its id number.");
},
function (error) { // listener fails to initialize
app.display("NFC reader failed to initialize " +
JSON.stringify(error));
}
);
},
onNfc: function(nfcEvent) {
var tag = nfcEvent.tag;
app.display("Read tag: " + nfc.bytesToHexString(tag.id));
PhoneGap
