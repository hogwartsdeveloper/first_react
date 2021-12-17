import React from "react";
import Input from "./UI/input/Input";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <Input
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Search.."
            />
        </div>
    );
};

export default PostFilter;