import {useParams} from 'react-router-dom'

import Article from '../Article.jsx'
import SideBar from '../SideBar.jsx'

const ArticleContainer = ({top5}) => {
    const {article_id} = useParams();
  
    return (<main className="container">
        <div id="content-sidebar">
            <Article article_id={article_id}></Article>
            <SideBar top5={top5}/>
        </div>
    </main>)
}

export default ArticleContainer