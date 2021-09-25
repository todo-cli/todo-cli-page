const semVer = require("semver");


function extractReleases(response) {
    const releases = [];
    for (const release of response.data) {
        releases.push({
            name: release.name,
            version: extractVersion(release.name),
            binaries: extractBinaries(release.assets)            
        })
    }
    return releases;
}

function extractVersion(release){
    const semanticVersionWithOption_v_prefix = /^(?:v?)(.*)$/mg;
    return semanticVersionWithOption_v_prefix.exec(release)[1];
}

function extractBinaries(assets) {
    const binaries = [];
    for (const asset of assets) {
        binaries.push({
            binaryType: typeOfArtefact(asset.name),
            name: asset.name,
            downloadUrl: asset.browser_download_url
        })
    }

    return binaries;
}

function typeOfArtefact(name) {
    const deb = /^todo-cli.*.deb$/gm;
    const rpm = /^todo-cli.*.rpm$/gm;
    const linuxBinary = /^todo-cli$/gm;
    const windowsBinary = /^todo-cli.exe$/gm;

    switch (true) {
        case deb.test(name):
            return "deb";
        case rpm.test(name):
            return "rpm";
        case linuxBinary.test(name):
            return "linuxBinary";
        case windowsBinary.test(name):
            return "windowsBinary";            
        default:
            return "unknown";
    }
}


function latestRelease(releases){
    return releases.sort(function(a, b) {
        return semVer.compare(b.version, a.version);
    });
}

module.exports = { extractReleases, typeOfArtefact, latestRelease};