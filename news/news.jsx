import React from "react";
import ArticlesList from "./articlesList";
import './news.css'
import { useNavigate } from "react-router-dom";
export default function news() {
    
    const nav = useNavigate();
     const handleGoBack = () => {
    nav('/')
  };
    return <>
       <div>
       <button className="btnBack" onClick={handleGoBack}>Trở về</button>
        <ArticlesList/>
       </div>

       
    </>
    
}