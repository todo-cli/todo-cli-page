const Github = require("github-api");
const {latestRelease, extractReleases} = require("./releases");
const $ = require("jquery");

const gh = new Github();
const repo = gh.getRepo("cmhteixeira", "todo-cli");

const responseP = repo.listReleases(function(error, result, request){
});


let allReleasesP = responseP.then(function(response){
   return extractReleases(response);
 });


var stateAllReleases = {};
responseP.then(function(response){
   stateAllReleases = extractReleases(response);
});


var latest = {};
allReleasesP.then((allReleases => {
    latest = latestRelease(allReleases)[0];
}))

// We know what the div 'content' contains.
$("#content").click(function(event){
    event.preventDefault();
    let downloadLink = maybeDownloadLink(event.target);
    if (downloadLink == null || downloadLink == undefined || downloadLink == "") {
        // do nothing
    } else {
        window.open(downloadLink);
    }
});


function maybeDownloadLink(clickTarget) {
    let expectedRegex = /^latest#(.*)$/gm;
    let hReference = clickTarget.getAttribute("href");
    if (hReference == null || hReference == "") {
        return null;
    } 

    let regexResult = expectedRegex.exec(hReference);
    let binaryTypeDesired = regexResult[1];
    return latest.binaries.find((element) => {
        return element.binaryType == binaryTypeDesired;
    }).downloadUrl;
}