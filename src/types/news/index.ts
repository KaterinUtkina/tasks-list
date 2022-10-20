export namespace News {
    export type Response = {
        articles: Item[];
    }
    export type Item = {
        source: Source,
        author: string;
        title: string;
        description: string;
        url: string;
        urlToImage: string;
        publishedAt: string;
        content: string;
    }

    type Source = {
        id: number | null;
        name: string;
    }
}
