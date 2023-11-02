import { useState } from "react";
import {useHistory} from 'react-router-dom';

const Create = () => {

const [title, setTitle] = useState('')
const [body, setBody] = useState('')
const[author, setAuthor] = useState('Mainak')
const [isPending, setIsPending] = useState(false)
const history = useHistory();

const handleSubmit = (e) =>{
    setIsPending(true)
    e.preventDefault();
    const blog={title,body,author}
    fetch('http://localhost:8000/blogs',{
        method:'POST',
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(blog)
    }).then(()=>{
        console.log('New blog added')
        setIsPending(false)
        history.push('/')
    })

    
}    

return (  
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog title:</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                 />
                 <label >Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author</label>
                <select 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Mainak">Mainak</option>
                    <option value="Hitasha">Hitasha</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding Blog</button>}
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
            </form>
        </div>
    );
}
 
export default Create;