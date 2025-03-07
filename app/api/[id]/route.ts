import {comments} from "../../../fake-database/data"; //FAKE DATABASE FOR API TEST


//THIS ONE IS FOR DYNAMIC ID'S ETC...url: /api/3

//read (needs request and params to grab from url)
export async function GET(request: Request, {params}){
    const {id} = await params; //store params from url
    const comment = comments.find(comment => comment.id === parseInt(id)); //find *single* comment using id from url
    return Response.json(comment); //Response is just vanilla and is fine
}



//update
export async function PATCH(request: Request, {params}){
    const {id} = await params; //store params from url
    const body = await  request.json();//store result as body
    const {text} = body; //pull out text prop from body
    const commentId = comments.findIndex(comment => comment.id === parseInt(id)); //find *single* comment using id from url
    comments[commentId].text = text; //update text in correct comment 

    return Response.json(comments[commentId]); //Response is just vanilla and is fine
}



//delete
export async function DELETE(request: Request, {params}){
    const {id} = await params; //store params from url
    const commentId = comments.findIndex(comment => comment.id === parseInt(id)); //find *single* comment using id from url
    const deletedComment = comments[commentId]; //store for later 
    comments.splice(commentId, 1)

    return Response.json(deletedComment); //Response is just vanilla and is fine
}


