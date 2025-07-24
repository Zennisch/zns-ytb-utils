import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"
import { useEffect } from "react"

import { CountButton } from "~features/count-button"

export const config: PlasmoCSConfig = {
    matches: ["<all_urls>"]
}

/**
 * Generates a style element with adjusted CSS to work correctly within a Shadow DOM.
 *
 * Tailwind CSS relies on `rem` units, which are based on the root font size (typically defined on the <html>
 * or <body> element). However, in a Shadow DOM (as used by Plasmo), there is no native root element, so the
 * rem values would reference the actual page's root font size—often leading to sizing inconsistencies.
 *
 * To address this, we:
 * 1. Replace the `:root` selector with `:host(plasmo-csui)` to properly scope the styles within the Shadow DOM.
 * 2. Convert all `rem` units to pixel values using a fixed base font size, ensuring consistent styling
 *    regardless of the host page's font size.
 */
export const getStyle = (): HTMLStyleElement => {
    const baseFontSize = 16

    let updatedCssText = cssText.replaceAll(":root", ":host(plasmo-csui)")
    const remRegex = /([\d.]+)rem/g
    updatedCssText = updatedCssText.replace(remRegex, (match, remValue) => {
        const pixelsValue = parseFloat(remValue) * baseFontSize

        return `${pixelsValue}px`
    })

    const styleElement = document.createElement("style")

    styleElement.textContent = updatedCssText

    return styleElement
}

export const logTitle = () => {
    console.log(`Document Title: ${document.title}`)
}

export const changeTitle = (newTitle: string) => {
    document.title = newTitle
    console.log(`Document Title changed to: ${document.title}`)
}

export const downloadYoutubeTranscript = () => {
    const href = window.location.href
    console.log(`Current URL: ${href}`)

    if (!href.includes("youtube.com/watch")) {
        console.error("Not a YouTube video page")
        alert("Not a YouTube video page")
        return
    }

    let extraContent = null
    let buttonRenderer = null
    let buttonShape = null
    let button = null

    try {
        extraContent = document.querySelectorAll(
            "div.style-scope.ytd-watch-metadata[slot='extra-content']"
        )
        buttonRenderer = extraContent[0]?.querySelectorAll(
            "ytd-button-renderer.style-scope.ytd-video-description-transcript-section-renderer[button-renderer][button-next]"
        )
        buttonShape = buttonRenderer[0]?.querySelectorAll(
            "div.yt-spec-touch-feedback-shape__fill"
        )
        button = buttonShape[0] as HTMLElement

        console.log("Extra Content:", extraContent)
        console.log("Button Renderer:", buttonRenderer)
        console.log("Button Shape:", buttonShape)
        console.log("Button Element:", button)
    } catch (error) {
        console.error("Error accessing YouTube transcript section: ", error)
        alert("YouTube transcript section not found or inaccessible")
        return
    }

    if (button) {
        button.click()
    } else {
        console.error("Transcript button not found")
        alert("Transcript button not found")
        return
    }

    setTimeout(() => {
        let segments = null
        let text = null
        try {
            segments = document.querySelectorAll(
                "yt-formatted-string.segment-text.style-scope.ytd-transcript-segment-renderer"
            )
            text = Array.from(segments)
                .map((el) => el.textContent.trim())
                .join("\n")
        } catch (error) {
            console.error(
                "Transcript segments not found or inaccessible: ",
                error
            )
            alert("Transcript segments not found or inaccessible")
            return
        }

        const blob = new Blob([text], { type: "text/plain" })
        const url = URL.createObjectURL(blob)
        const clickable = document.createElement("a")
        clickable.href = url
        clickable.download = "transcript.txt"
        clickable.click()
        URL.revokeObjectURL(url)
    }, 3000)
}

const PlasmoOverlay = () => {
    return (
        <div className="plasmo-z-50 plasmo-flex plasmo-fixed plasmo-top-32 plasmo-right-8">
            <CountButton />
        </div>
    )
}

export default PlasmoOverlay
