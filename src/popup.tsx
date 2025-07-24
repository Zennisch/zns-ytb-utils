import { useEffect, useState } from "react"
import { getOverlayEnabled, setOverlayEnabled } from "~configs/Storage"
import { DownloadTranscriptButton } from "~features/DownloadTranscriptButton"
import { ToggleSwitch } from "~features/ToggleSwitch"

import "~style.css"

function IndexPopup() {
    const [overlayEnabled, setOverlayEnabledState] = useState(false)

    useEffect(() => {
        getOverlayEnabled().then(setOverlayEnabledState)
    }, [])
    
    const handleToggle = async (value: boolean) => {
        await setOverlayEnabled(value)
        setOverlayEnabledState(value)
    }

    return (
        <div className="flex flex-col w-64 p-4 bg-gradient-to-br from-white to-gray-50">
            <h2 className="text-lg font-semibold text-gray-800 mb-3 text-center">
                YouTube Utils
            </h2>
            <div className="flex justify-center">
                <DownloadTranscriptButton />
            </div>

            <div className="flex justify-center py-4 border-t border-gray-100">
                <ToggleSwitch
                    enabled={overlayEnabled}
                    onChange={handleToggle}
                />
            </div>

            <div className="text-center">
                <span className="text-xs text-gray-500">
                    Works on YouTube video pages
                </span>
            </div>
        </div>
    )
}

export default IndexPopup
