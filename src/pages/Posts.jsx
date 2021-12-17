import React, { useEffect, useState, useRef } from "react";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import '../styles/App.css';
import Modal from "../components/UI/modal/Modal";
import PostForm from "../components/PostForm";
import { usePosts } from "../hooks/usePosts";
import Button from "../components/UI/button/Button";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Loader from "../components/UI/loader/Loader";
import { useObserver } from "../hooks/useObserver";

const Post = () => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit/*, setLimit*/] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef();

    const [fetchPosts, isPostsLoading/*, postError*/] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);

        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    });

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    })

    useEffect(() => {
        fetchPosts(limit, page);
    }, [page, limit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div>
            <div>
                <Button onClick={() => fetchPosts()}>GET POSTS</Button>
                <Button onClick={() => setModal(true)}>Create Post</Button>
            </div>
            <div>
                <Modal visible={modal} setVisible={setModal}>
                    <PostForm create={createPost}/>
                </Modal>
            </div>
            <div>
                <PostFilter
                    filter={filter}
                    setFilter={setFilter}
                />
            </div>
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Fearst React App'/>
            <div ref={lastElement} style={{height: 20}}></div>

            {isPostsLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
                    <Loader/>
                </div>
            }
        </div>
    );
};

export default Post;