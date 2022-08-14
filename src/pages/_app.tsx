import 'antd/dist/antd.css';
import { GlobalStyle } from "../styles/global";
import { AppProps } from "next/app";
import { ViewportProvider } from "../contexts/Viewport";
import { BlogLayout } from "../components/BlogLayout";

type ComponentWithLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: React.ComponentType;
  }
}

const App = ({ Component, pageProps }: ComponentWithLayout) => {
  return (
    <>
      <GlobalStyle />
      <ViewportProvider>
        <BlogLayout>
          <Component {...pageProps} />
        </BlogLayout>
      </ViewportProvider>
    </>
  )
}

export default App;