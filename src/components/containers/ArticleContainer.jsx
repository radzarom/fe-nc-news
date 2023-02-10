import {useParams} from 'react-router-dom'

import Article from '../Article.jsx'
import SideBar from '../SideBar.jsx'

const ArticleContainer = ({top5}) => {
    const {article_id} = useParams();
  
    return (<main className="container">
        <Article article_id={article_id}></Article>
        <SideBar top5={top5}/>
    </main>)
}

export default ArticleContainer