import React, {PureComponent} from "react";
import "./article-image.component.css"

class ArticleImageComponent extends PureComponent<{ articleImageURL: string }> {
    render() {
        return (
            <div className="post-gallery" itemScope itemType="http://schema.org/ImageGallery">
                <div className="post-gallery-row">
                    <a className="post-gallery-img fancybox"
                       href={this.props.articleImageURL}
                       rel="gallery_cjo0anxim0000y6he52acmews" itemScope
                       itemType="http://schema.org/ImageObject"
                       itemProp="url">
                        <img src={this.props.articleImageURL} itemProp="contentUrl"/>
                    </a>
                </div>
            </div>
        )
    }
}

export default ArticleImageComponent;