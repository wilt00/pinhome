function pinhome() {
    browser.tabs.query({ currentWindow: true })
        .then((allTabs) => {
            for (let tab of allTabs) {
                browser.tabs.update(tab.id, { pinned: true });
            }
        });
}

browser.runtime.onStartup.addListener(pinhome);
