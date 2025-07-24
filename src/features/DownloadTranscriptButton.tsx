import { downloadYoutubeTranscript } from "~content"
import { invoke } from "~middlewares/ScriptInvoker"

export const DownloadTranscriptButton = () => {
    return (
        <button
            onClick={() => {
                invoke(downloadYoutubeTranscript)
            }}
            type="button"
            className="plasmo-flex plasmo-flex-row plasmo-items-center plasmo-px-4 plasmo-py-2 plasmo-text-sm plasmo-rounded-lg plasmo-transition-all plasmo-border-none plasmo-shadow-lg hover:plasmo-shadow-md active:plasmo-scale-105 plasmo-bg-slate-50 hover:plasmo-bg-slate-100 plasmo-text-slate-800 hover:plasmo-text-slate-900">
            <span className="plasmo-mr-2">Download Transcript</span>
        </button>
    )
}
