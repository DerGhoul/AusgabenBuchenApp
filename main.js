/*

#!/usr/bin/gjs

imports.gi.version.Gtk = "3.0";
const { Gtk } = imports.gi;

*/
//importe
const fs = require('fs');
const file = "D:/Programmierung_und_Lernen/TestFile.txt";

//Globale Variablen

logingofAExpenditure();

function logingofAExpenditure() {

  var d = new Date();
  var day = d.getDate();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();


  //Hier werden die vier Inputwerte vorgeschrieben
    var logId       = getLogId();
    var description = "A lot of Books";
    var amount      = 89.98;
    var date        = getDateOfToday();
    var reason      = "Education";

    saveFile(logId, description, amount, date, reason);


}
//Gibt das heutige Datum zurück
function getDateOfToday() {

  var d = new Date();
  var day = d.getDate();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();

  var date        = (day +'-'+ month +'-'+ year);

  return(date);
}


function getLogId() {
return 1;
}











function saveFile(logIdValue, descriptionValue, amountValue, dateValue, reasonValue) {

var logId = logIdValue;
var description = descriptionValue;
var amount = amountValue;
var date  = dateValue;
var reason = reasonValue;


//var string = (logId + ';' +description + ';' + amount + ';' + date + ';' + reason + ';' + '\n');
var string = (description + ';' + amount + ';' + date + ';' + reason + ';' + '\n');


  fs.appendFile(file, string, function (err) {
    if(err) throw err;
    console.log('Wurde erfolgreich geschrieben');
  } );

}









/*
  var d = new Date();
  var day = d.getDate();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();


  //Hier werden die vier Inputwerte vorgeschrieben
    var description = "A lot of Books";
    var amount = 89.98;
    var date = (day +'-'+ month +'-'+ year);
    var reason = "Education";
*/
  //var string = (description + ';' + amount + ';' + date + ';' + reason + '\n');
  //var fileLocation = "D:/Programmierung_und_Lernen/TestFile.txt";
  //var description = document.getElementById("description");
  //var forFailures = document.getElementById("forFailures");
  //forFailures.innerHTML = description.innerHTML;
