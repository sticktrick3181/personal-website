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
        <body className="bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
          {/* overflow x hidden for footer border scroll issue */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
