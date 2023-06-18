import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'write your key');
            headers.set('X-RapidAPI-Host', 'write your host');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        }),
    }),
})

export const { useLazyGetSummaryQuery } = articleApi