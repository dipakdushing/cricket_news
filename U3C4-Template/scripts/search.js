import {apiCall, appendArticles} from "./main.js"

function storeSearchterm(term) {
    localStorage.setItem('search_term',term)
    window.location.href='search.html'
}

export default storeSearchterm