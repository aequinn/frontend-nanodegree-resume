/*
* Extra credit programming with javascript assignment 1
* A function that takes two objects and determines if one
* is greater than the other, if they are numbers, otherwise
* it returns that it cannot determine.
*/
function getRelationship(x,y){
  var msg = "";
  /*Check if number*/
  if(isNaN(x) && isNaN(y)){ //Check if both are not numbers and return message.
    msg = "Can't compare relationships because "+ x +" and "+ y+" are not numbers";
  }else if(isNaN(x) || isNaN(y)){ //Check if one OR the other are not numbers

    if(isNaN(x)){ //if x is not a number, return that x is not.
      msg = "Can't compare relationships because "+ x +" is not a number";
    }else{ //If x is a number than y must be the one that is not a number, return message
      msg = "Can't compare relationships because "+ y +" is not a number";
    }
  }else{// If booth are numbers need to compare them
    if(x > y){
      //msg = x + " is greater than " + y;
      msg = ">";
    }else if( x < y){
      //msg = y + " is greater than " + x;
      msg = "<";
    }else if(x === y){
      //msg = x + " is equal to " + y;
      msg = "=";
    }
  }
  // Sample output "Can't compare relationships because [this value] and [that value] [is]/[are] not [a] number[s]."
  return msg;
};

console.log(getRelationship(10,5));
console.log(getRelationship("Hello",5));
console.log(getRelationship("Hello","World"));
console.log(getRelationship(2,32));
console.log(getRelationship(7,7));

/*
* Challenge #2 - Take an array of names. Swap Fist, Last name order to Last, First
* and alphabetize.
*/
var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    // Your code goes here!
    var newNames = [];
    for(name in names){//for each name do this
      //split
      var nameArray = names[name].split(" ");
      newNames.push(nameArray[1] + ", " + nameArray[0]);
    }
    //console.log("New Array: "+newNames);
    newNames.sort();
    return newNames;
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));

/*
* Manipulating PSI from google
*/

// Iterate through pageStats in the psiResults object and
// return the total number of bytes to load the website.
function totalBytes(psinsights){
  var byteCount = 0;
  for(var obj in psinsights.pageStats){
    //console.log("Obj" + obj + " : " + statsObj[obj]);
    if(obj.indexOf("Bytes") > 0){
      //console.log(statsObj[obj]);
      byteCount = byteCount + parseInt(psinsights.pageStats[obj]);
    }
  }
  return byteCount;
}

// Iterate through the localizedRuleNames in ruleResults and
// return an array of their strings.
function ruleList(psinsights){
  var localRules = [];
  for(localizedRuleName in psinsights.formattedResults.ruleResults){
    console.log(localizedRuleName);
    for(var itm in psinsights.formattedResults.ruleResults[localizedRuleName]){
      if(itm === "localizedRuleName"){
      localRules.push(psinsights.formattedResults.ruleResults[localizedRuleName][itm]);
      };
    }
  }
  return localRules;
}

// Sample PS Insights JSON
// and two console.log statements

psinsights = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
    "AvoidBadRequests": {
      "localizedRuleName": "Avoid bad requests",
      "ruleImpact": 0.0
    },
    "MinifyJavaScript": {
      "localizedRuleName": "Minify JavaScript",
      "ruleImpact": 0.1417,
      "urlBlocks": [
      {
        "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
        },
        "urls": [
        {
          "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
};

// Try logging the outputs below to test your code!
console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));
