import {useState} from "react";
import {News} from "../../../types/news";
import {useQuery} from "react-query";
import NewsTickerApi from "../api/NewsTickerApi";

export function useNewsTicker() {
    const [news, setNews] = useState<News.Item[]>([]);
    const [error, setError] = useState<string | null>(null);
    useQuery('news ticker', () => NewsTickerApi.getNews(),{
        onSuccess: ({ articles }) => {
            setNews(articles);
        },
        onError: (error: any) => {
            setError(error.message);
        }
    })

    return {
        news,
        error,
    }
}
