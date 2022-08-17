import { Html, Head, Main, NextScript } from 'next/document'
import { ThisTagDoesEvilThingsDontLookIntoItPlease } from '../components/ThisTagDoesEvilThingsDontLookIntoItPlease';

const Document = () => {
  return (
    <Html>
      <Head />
      <body>
        {/* Carregando tema pré hydrate */}
        <ThisTagDoesEvilThingsDontLookIntoItPlease />
        
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;