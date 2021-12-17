import React from "react";
import { useState } from "react/cjs/react.development";
import Button from "./UI/button/Button";
import Input from "./UI/input/Input";


const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        };
        create(newPost);

        setPost({title: '', body: ''});
    }

    return (
        <form>
            <Input
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Title post:"
            />
            <Input
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Title content:"
            />
            <Button onClick={addNewPost}>Send</Button>
        </form>
    );
};

export default PostForm;