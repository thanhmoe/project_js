import React, { useState } from "react";
import { articles } from "../../assets/data/newsData";
import InfiniteScroll from "react-infinite-scroll-component";
import './news.css'



const ArticlesList =()=>{
    const [visibleArticles, setVisibleArticles]=useState(articles.slice(0,20))
    const [loadMore, setLoadMore]= useState(true)

    const fetchMoreData =()=>{
        if (visibleArticles.length >= articles.length) {
            setLoadMore(false);
            return;
        }
        setTimeout(() => {
            setVisibleArticles(articles.slice(0,visibleArticles.length+5));
        }, 500);
    }

    return<>
        <InfiniteScroll
        dataLength={visibleArticles.length}
        next={fetchMoreData}
        hasMore={loadMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>Loaded!</p>}
        >

        <div className="news-container">
      {visibleArticles.map((article, index) => (
        <div className="article" key={index}>
          <img src={article.imageUrl} alt={article.title} />
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
    </InfiniteScroll>
    </>
}
export default ArticlesList;