function sidebar() {


    // return your html component here
    //Make sure to give input search box id as ""
    return `
    <a href="index.html">Home</a>
    <a href="search.html">Search News</a>
    <a href="news.html">Detailed News</a>
    <input type="text" placeholder="Search Here..." id="searchbar">
    `;
}
export default sidebar;