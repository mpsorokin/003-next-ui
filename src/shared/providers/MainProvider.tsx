'use client'

import { PropsWithChildren } from 'react'

import { TanstackQueryProvider } from '@/shared/providers/TanstackQueryProvider'

import { ThemeProvider } from './ThemeProvider'

export function MainProvider({ children }: PropsWithChildren<unknown>) {
	return (
		<TanstackQueryProvider>
			<ThemeProvider
				attribute='class'
				defaultTheme='light'
				disableTransitionOnChange={true}
			>
				{children}
			</ThemeProvider>
		</TanstackQueryProvider>
	)
}
