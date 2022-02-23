


async function apiCall(url) {

    let res= await fetch(url);
    let data= await res.json();
    return data

    //add api call logic here


}


function appendArticles(articles, main) {
    main.innerHTML='';
    //add append logic here
    articles.forEach((elem)=>{
        let ndiv= document.createElement('div');
        let newsArr=[]
        ndiv.id='news_div';
        ndiv.addEventListener('click', () => {
            window.location.href= "news.html"
            newsArr.push(elem.urlToImage)
            newsArr.push(elem.title)
            newsArr.push(elem.description)
            newsArr.push(elem.publishedAt)
            newsArr.push(elem.content)
            localStorage.setItem('clicked_news', JSON.stringify(newsArr))
            displayDetailedNews();
        })

        let pic= document.createElement('img')
        pic.src= elem.urlToImage;

        let heading= document.createElement('h3')
        heading.textContent= elem.title;

        ndiv.append(pic,heading)
        main.append(ndiv);
    })

}

export { apiCall, appendArticles }

function displayDetailedNews(elem, parent){
    parent.innerHTML="";
    let ndiv= document.createElement('div');
    ndiv.id='dn';

    let pic= document.createElement('img')

    pic.src= elem[0];

    let heading= document.createElement('h3')
    heading.textContent= elem[1];

    let info= document.createElement('p');
    info.textContent= elem[2];

    let date= document.createElement('p');
    date.textContent= elem[3];

    let dinfo= document.createElement('p');
    dinfo.textContent= elem[4];

    ndiv.append(heading,pic,info,date,dinfo)
    main.append(ndiv);
}
export {displayDetailedNews};