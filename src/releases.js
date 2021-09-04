


class MyRelease {

    constructor(assets) {
        this.assets = assets;
    }

    names() {
        var names = [];
        for (const asset of this.assets) {
            names.push(asset.name);
        }
        return names;
    }

}


function typeOfArtefact(name) {
    const deb = /asdsa/;
    const rpm = /adasd/;
    const binaryLinux = /adas/;
    const binaryWindows = /adas/;

    switch (true) {
        case deb.test(name):
            break;
        case rpm.test(name):
            break;
        case binaryLinux.test(name):
            break;
        case binaryWindows.test(name):
            break;
        case _:
            break
    }
}

class Artefact {
    constructor(name, downloadUrl) {
        this.type = "Undefined-Artefact"
        this.name = name;
        this.downloadUrl = downloadUrl;
    }
}

class DebArtefact extends Artefact {
    constructor(name, downloadUrl) {
        this.name = name;
        this.downloadUrl = downloadUrl;
    }
}


class RpmArtefact extends Artefact {
    constructor(name, downloadUrl) {
        this.name = name;
        this.downloadUrl = downloadUrl;
    }
}


class BinaryLinux extends Artefact {
    constructor(name, downloadUrl) {
        this.name = name;
        this.downloadUrl = downloadUrl;
    }
}

class BinaryWindows extends Artefact {
    constructor(name, downloadUrl) {
        this.name = name;
        this.downloadUrl = downloadUrl;
    }
}


function extractAssets(response){
    let foo = response.data;
    return new MyRelease(foo[0].assets);
}

module.exports = extractAssets;