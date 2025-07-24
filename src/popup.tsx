import { DownloadTranscriptButton } from "~features/DownloadTranscriptButton"

import "~style.css"

function IndexPopup() {
  return (
    <div className="plasmo-flex plasmo-items-center plasmo-justify-center plasmo-h-16 plasmo-w-40">
      <DownloadTranscriptButton />
    </div>
  )
}

export default IndexPopup
