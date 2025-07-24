export async function getOverlayEnabled(): Promise<boolean> {
    return new Promise((resolve) => {
        chrome.storage.local.get(["overlayEnabled"], (result) => {
            resolve(result.overlayEnabled ?? false)
        })
    })
}

export async function setOverlayEnabled(value: boolean): Promise<void> {
    return new Promise((resolve) => {
        chrome.storage.local.set({ overlayEnabled: value }, resolve)
    })
}
