export const invoke = (callback: () => any) => {
    if (typeof chrome.tabs === "undefined") {
        callback()
    } else {
        chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tabs) {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    func: callback
                })
            }
        )
    }
}
