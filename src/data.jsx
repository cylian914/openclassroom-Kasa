const data = fetch("../logements.json").then((e) => e.json())

function onLoadedData(callBack) {
    data.then(callBack);
}
export default onLoadedData