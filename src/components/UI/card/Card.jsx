import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import classes from './Card.module.css';


const Card = (props) => {
    const router = useNavigate();
    return (
        <div className={classes.card}>
            <div>
                <h5 className={classes.card_title}>{props.post.title}</h5>
                <h6 className={classes.card_id}>{props.index}</h6>
                <p className={classes.card_body}>{props.post.body}</p>
            </div>
            <div className={classes.card_btns}>
                <Button style={{marginRight: 20}} onClick={() => router(`/posts/${props.post.id}`)}>Open</Button>
                <Button onClick={() => props.remove(props.post)}>Delete</Button>
            </div>
        </div>
    );
};

export default Card;