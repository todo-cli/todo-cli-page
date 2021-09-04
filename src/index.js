const Github = require("github-api");
const extractAssets = require("./releases");

const gh = new Github();
const repo = gh.getRepo("cmhteixeira", "todo-cli");

const t = repo.listReleases(function(error, result, request){
});

// t.then(extractAssets).then(function(res){
//     console.log(res);
//     // console.log(JSON.stringify(res));
// });


t.then(function(a){
    // console.log(a);
    let y = extractAssets(a);
    console.log(y.names());

    // console.log(JSON.stringify(y.names));
})

