import * as React from 'react';
import './article-content.component.css'

class ArticleContentComponent extends React.Component<{articleTitle: string}> {

    public render() {
        return(
            <article>
                <h3>标题</h3>
                <section>
                    正文
                </section>

            </article>
        )
    }
}


export default ArticleContentComponent