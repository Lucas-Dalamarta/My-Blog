import styled from 'styled-components'

import { Layout as AntLayout } from "antd"
import { Content as AntContent } from "antd/lib/layout/layout"

export const Layout = styled(AntLayout)`
  min-height: 100vh;
`

export const Content = styled(AntContent)`
  padding: 3rem 5rem;
`