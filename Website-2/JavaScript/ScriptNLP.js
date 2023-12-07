function summarizeText() {
    const inputText = document.getElementById("inputText").innerText;

    // Implement a simple truncation summarization logic to show the first 150 characters as the summary.
    const summary = inputText.slice(0, 209) + (inputText.length > 220 ? "..." : "");

    document.getElementById("summary").innerText = summary;
}
