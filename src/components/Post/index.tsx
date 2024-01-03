import { useParams } from "react-router-dom"

export const Post = () => {
    const params = useParams();
    const { id } = params;

    console.log(id);



    return (
        <div>
            <h1>Post</h1>
        </div>
    )
}