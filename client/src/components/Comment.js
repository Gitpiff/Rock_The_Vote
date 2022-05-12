import React from "react"

export default function Comment(props){
    const { comment, username, page, deleteComment, _id } = props

    function deleteButton() {
        if(page === "profile"){
            return <button onClick={() => deleteComment({username, comment}, _id)}>
                        Delete Comment
                    </button>
        }
        else {
            return null
        }
    }

    return (
        <div>
            <p>{username} :</p>
            <p>{comment}</p>
            {deleteButton()}
        </div>
    )
}
