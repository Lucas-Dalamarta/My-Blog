import { GlobalStyle } from "../styles/global";
import { AppProps } from "next/app";
import { ViewportProvider } from "../contexts/Viewport";
import { LayoutType } from "../lib/types";

type ComponentWithLayout = AppProps & {
  Component: AppProps['Component'] & LayoutType
}

const App = ({ Component, pageProps }: ComponentWithLayout) => {
  return (
    <>
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
    </>
  )
}

export default App;