import {News} from "../../../types/news";
import axiosInstance from "../../../axios";
import {AxiosError, AxiosResponse} from "axios";

export default class NewsTickerApi {
    static readonly URL_NEWS =
        '/everything?q=tesla&from=2022-10-21&sortBy=publishedAt&apiKey=f73ef60816864fca98923f99ef65246f';

    static getNews(): Promise<News.Response> {
        return new Promise((resolve, reject) => {
            axiosInstance
                .request({
                    method: 'get',
                    url: this.URL_NEWS,
                })
                .then((response: AxiosResponse) => {
                    resolve(response.data);
                })
                .catch((err: AxiosError) => {
                    reject(err.response?.data);
                });
        });
    }
}
