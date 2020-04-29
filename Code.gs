//this is a function that fires when the webapp receives a GET request
function doGet(e) {  
  if(typeof e !== 'undefined'){
    var params = e.parameter;
    
    if(params.secret === "SECRET"){
      var dateTimeStamp = params.date_time_stamp;
      var status = params.status;
      var type = params.type;
      var timestamp = params.timestamp;
      
      var sheet = SpreadsheetApp.getActiveSheet();
      var lastRow = Math.max(sheet.getLastRow(),1);
      sheet.insertRowAfter(lastRow);
      
      sheet.getRange(lastRow + 1, 1).setValue(timestamp);
      sheet.getRange(lastRow + 1, 2).setValue(status);
      sheet.getRange(lastRow + 1, 3).setValue(type);
      return HtmlService.createHtmlOutput("Recorded successfully.");
    }
    else{
      return HtmlService.createHtmlOutput("Verification failed.");
    }
  }
  return HtmlService.createHtmlOutput("GET Request Received");
}

//this is a function that fires when the webapp receives a POST request
function doPost(e) {
  return HtmlService.createHtmlOutput("POST Request Received");
}
