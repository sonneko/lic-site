import { getLocation } from "./asset";

try{
const rootEle = document.getElementById("root");

function rendering() {
    const locationData = getLocation();
    const {pathname, params} = locationData;
    let jsPath;
    switch (pathname) {
        case "index.html":
            jsPath = "index.js";
            break;
        case "team.html":
            jsPath = "team.js";
            break;
    }
    return "./page/" + jsPath;
}

const {default: obj} = await import(rendering());
const {default: layout} = await import("layout.js");

rootEle.innerHTML = layout(obj());

}catch(e){alert(e)}