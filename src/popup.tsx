import { DownloadTranscriptButton } from "~features/DownloadTranscriptButton"

import "~style.css"

function IndexPopup() {
  return (
    <div className="flex flex-col w-64 p-4 bg-gradient-to-br from-white to-gray-50">
      <h2 className="text-lg font-semibold text-gray-800 mb-3 text-center">
        YouTube Utils
      </h2>
      <div className="flex justify-center">
        <DownloadTranscriptButton />
      </div>
      <div className="mt-3 text-center">
        <span className="text-xs text-gray-500">Works on YouTube video pages</span>
      </div>
    </div>
  )
}

export default IndexPopup