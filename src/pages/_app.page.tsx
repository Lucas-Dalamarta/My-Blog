import { GlobalStyle } from "../styles/global";
import { AppProps } from "next/app";
import { ViewportProvider } from "../contexts/Viewport";
import { LayoutType } from "../lib/types";
import { ThemeProvider } from "../contexts/Theme";

type ComponentWithLayout = AppProps & {
  Component: AppProps['Component'] & LayoutType
}

const App = ({ Component, pageProps }: ComponentWithLayout) => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <ViewportProvider>
        {
          Component.Layout ? (
            <Component.Layout>
              <Component {...pageProps} />
            </Component.Layout>
          ) : (
            <Component {...pageProps} />
          )
        }
      </ViewportProvider>
    </ThemeProvider>
  )
}
// dangerouslySetInnerHTML = {{ __html: postData.contentHtml }}

export default App;