import { downloadYoutubeTranscript } from "~content"
import { invoke } from "~middlewares/ScriptInvoker"

export const DownloadTranscriptButton = () => {
    return (
        <button
            onClick={() => {
                invoke(downloadYoutubeTranscript)
            }}
            type="button"
            className="flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg 
                       transition-all duration-200 shadow-md hover:shadow-lg 
                       bg-white hover:bg-gray-50 
                       text-gray-800 hover:text-black
                       border border-gray-200
                       active:transform active:scale-[1.02]">
            <svg 
                className="w-4 h-4 mr-2" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Transcript
        </button>
    )
}