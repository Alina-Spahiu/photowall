import React, { Component } from 'react'
import {Button, Row} from "react-bootstrap"

export default class Photo extends Component {
    render() {
        const post = this.props.posts
        return (
            <Row className="col-sm-6 col-md-4 justify-content-center">
           <figure className="figure">
              
               <img className="photo" src={post.image} alt={post.description}/>
           <Row className="justify-content-center">
           <figcaption className="p-container"><p > {post.description} </p></figcaption>
        <div className="button-container">
        <Button className="remove-button" 
                variant="danger"
                 onClick={()=>{ this.props.onRemovePhoto(post)}}> 
                Remove </Button>
        </div>
        </Row>
           </figure>
           
           </Row>
        )
    }
}
