'use client'

import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren, useState } from 'react'

export function TanstackQueryProvider({
	children
}: PropsWithChildren<unknown>) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false
				}
			}
		})
	)
	return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
