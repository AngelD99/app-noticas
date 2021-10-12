export const getNews = async( categoria ) => {
        
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=d1866c1b2a6e44ef8f1b4ef376be42cb`;
    const resp = await fetch( url );
    const data = await resp.json();
    
    console.log(data);

    return data;

}