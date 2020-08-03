import React from "react";


class AddPhoto extends React.Component {

    constructor()
       {
          super()
          this.handleSubmit = this.handleSubmit.bind(this)
       }

    handleSubmit(event)
    {
        event.preventDefault()
        const imageLink = event.target.elements.link.value
        const imageDescription = event.target.elements.description.value
        const post={
              id: Number(new Date),
              description: imageDescription,
              image: imageLink
            }
        if(imageLink && imageDescription)
            {  this.props.addPost(post)  
               this.props.onHistory.push("/")
            }
    }

    render(){
        return(
                <div>
                       <h1 className="addPhoto-h1">add Photos</h1>
                   <div className='form'>
                      <form onSubmit={this.handleSubmit}>
                         <input type = "text" placeholder="Link" name="link" />
                         <input type ="text" placeholder="Description" name="description" />
                         <button className="form-button"> Post </button>
                      </form>
                   </div>
                </div>
        )
    }
}

export default AddPhoto;