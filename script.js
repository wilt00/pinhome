function pinhome() {
    // let promises = [];
    // promises.push(browser.browserSettings.homepageOverride.get({}));
    browser.tabs.query({ currentWindow: true })
        .then((allTabs) => {
            for (let tab of allTabs) {
                browser.tabs.update(tab.id, { pinned: true });
            }
        });

    // Promise.all(promises).then( (results) => {
    //     let homepage = results[0].value;
    //     let allTabs = results[1];
    //     // console.log("Homepage: " + homepage);
    //     for (let tab of allTabs) {
    //         // console.log("Tab: " + tab.id + " Url: " + tab.url);
    //         browser.tabs.update(tab.id, { pinned: true });
    //     }
    // });
}

browser.runtime.onStartup.addListener(pinhome);