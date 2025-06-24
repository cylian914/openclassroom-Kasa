const data = fetch("../logements.json").then((e) => e.json())
const mapedData = data.then((d) => {
        let temp = new Map();
        d.map((md) => temp.set(md.id, md));
        return temp;
    });

function onLoadedData(callBack) {
    return data.then(callBack);
}

export default onLoadedData