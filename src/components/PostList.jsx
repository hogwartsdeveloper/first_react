import React from "react";
import Card from "./UI/card/Card";
import '../styles/App.css'

const PostList = ({posts, title, remove}) => {
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены!
            </h1>
        );
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <div className="posts">
                {posts.map((post, index) => 
                    <Card post={post} index={index + 1} remove={remove}/>
                )}
            </div>
        </div>
    )
};

export default PostList;