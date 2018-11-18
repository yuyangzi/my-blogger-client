import {IconProp} from "@fortawesome/fontawesome-svg-core";

export interface ArticleMetaModel {
    // 更新时间
    updateTime: string;

    // 阅读次数
    viewsCount: number;

    // 阅读时长
    readTime: number;

    // 字数
    wordCount: number;
}

export interface ArticleHeaderModel {

    meta: ArticleMetaModel

    articleTitle: string;
}

export interface ArticleSummaryModel extends ArticleHeaderModel {
    articleSummary: string;

    articleImageURL: string

    articleURL: string;
}


export interface ArticleModel extends ArticleSummaryModel {
}

export interface ArticleSummaryMetaComponentDataModel {
    icon: IconProp,

    text: string;
}