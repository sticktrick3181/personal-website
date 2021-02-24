import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-MHHPMHF8RP"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-MHHPMHF8RP');
                      `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `

              // inline utils/CheckAndAddDarkModeClass

              const CheckAndAddDarkModeClass = () => {
                if (
                  localStorage.theme === 'dark' ||
                  (!('theme' in localStorage) &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches)
                ) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              }

              window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",  e => CheckAndAddDarkModeClass() );



              CheckAndAddDarkModeClass()
              
              `,
            }}
          />
        </Head>
        <body className="bg-gray-100 dark:bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
