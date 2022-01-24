import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const countryAPI = createApi({
  reducerPath: 'countryAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v2/' }),
  endpoints: (builder) => ({
    list: builder.query({
      query: (name) => `${name ? 'name/'+name : 'all'}?fields=name,capital,population,region,flag,alpha3Code`,
    }),
    getCountryByCode: builder.query({
      query: (code) => `alpha/${code}`,
    }),
    getBorders: builder.query({
      query: (codes) => `alpha?codes=${codes}&fields=name,alpha3Code`
    }),
    getRegions: builder.query({
      query: () => `all?fields=region`
    })
  }),
})

export const {
  useListQuery,
  useGetCountryByCodeQuery,
  useGetBordersQuery,
  useGetRegionsQuery,
} = countryAPI
