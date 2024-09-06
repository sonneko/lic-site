export const getLocation = () => {
    // pathnameの取得
    const pathname = window.location.pathname;

    // URL parameterの取得
    const href = window.location.href;
    let params;
    if (href.split("?")[1] === undefined) {
        params = [];
    } else {
        const parameters = href.split("?")[1].split("&");
        params = parameters.map((item) => {
            params[item.split("=")[0]] = item.split("=")[1];
        })
    }

    // return
    return {pathname, params};
}

