import Post from './Post'
import "./Posts.css"
const Posts=({posts})=>{return(<div className='posts'>{posts.map((p)=>(<Post post={p}/>))}</div>)}
export default Posts