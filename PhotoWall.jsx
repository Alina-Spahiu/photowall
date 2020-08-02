import React from 'react'
import Photo from "./Photo"
import {Container} from "react-bootstrap"

function PhotoWall(props){
    return (
        <Container>
            <div className="photoGrid">

            {props.posts.map((post, id) => 
            <Photo key={id} posts={post} onRemovePhoto = {props.onRemovePhoto} />)}
        </div>
        </Container>
    )

}
export default PhotoWall
