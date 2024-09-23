document.addEventListener('DOMContentLoaded', loadHistory);

function performSearch() {
    const searchInput = document.getElementById('search-input').value;
    if (searchInput.trim() === "") return;

    let searchHistory = getHistory();
    searchHistory.push(searchInput);
    updateHistory(searchHistory);
}

function getHistory() {
    return JSON.parse(localStorage.getItem('searchHistory')) || [];
}

function updateHistory(history) {
    localStorage.setItem('searchHistory', JSON.stringify(history));
    loadHistory();
}

function loadHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    let searchHistory = getHistory();
    searchHistory.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
}

function clearHistory() {
    localStorage.removeItem('searchHistory');
    loadHistory();
}