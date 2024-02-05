import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
	reducerPath: 'todosApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://menua7lj.beget.tech/' }),
	endpoints: builder => ({
		getfetchTodos: builder.query({
			query: () => ({ url: '/todo' }),
		}),
	}),
})

export const { useGetfetchTodosQuery } = todosApi
