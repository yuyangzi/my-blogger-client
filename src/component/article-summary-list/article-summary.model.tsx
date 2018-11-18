import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {ArticleMetaModel} from "../article/article.model";

export interface ArticleSummaryModel {
    articleTitle: string;

    meta: ArticleMetaModel;

    articleSummary: string;

    articleImageURL: string

    articleURL: string;
}

export interface ArticleSummaryMetaModel {
    icon: IconProp,

    text: string;

}