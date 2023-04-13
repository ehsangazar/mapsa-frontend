import type { AppProps } from 'next/app'
import { Global, css } from '@emotion/react'
import theme from '../configs/theme'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Global
      styles={css`
        :root {
            --dark: ${theme.colors.dark};
            --white: ${theme.colors.white};
            --primary-color: ${theme.colors.primary};
            --secondary-color: ${theme.colors.secondary};
        }

        body {
            background-color: var(--dark);
            color: var(--white);
            font-family: Arial, Helvetica, sans-serif;
            font-size: ${theme.fontSize.body};}; 
        }
      `}
    />
  <Component {...pageProps} />
  </>
}
