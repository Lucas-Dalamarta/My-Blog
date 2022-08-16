import { Html, Head, Main, NextScript } from 'next/document'
import { MagicScriptTag } from '../components/MagicScriptTag';

const Document = () => {
  return (
    <Html>
      <Head />
      <body>
        <MagicScriptTag />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;