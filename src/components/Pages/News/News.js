import React, {useState, useEffect} from 'react'
import axios from "axios"

import Posts from "./../../Posts/Posts"
import "./News.scss"
import Pagination from './../../Pagination/Pagination';

function News() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(() => {
        const getPosts = async() => {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            
            setPosts(response.data);
        };
            getPosts();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

  return (
    <section className="news">
        <h1>This is News Page</h1>
        <div className="container">
            <Posts posts={currentPosts} />
            <Pagination 
            postsPerPage = {setPostsPerPage} 
            totalPosts = {posts.length}
            paginate = {paginate}
            />
        </div>
        
    </section>
  )
}

export default News