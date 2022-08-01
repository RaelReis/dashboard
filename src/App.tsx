import styled from "styled-components"
import { AsideBar } from "./components/AsideBar/AsideBar"
import { MainContent } from "./components/MainContent/MainContent"

function App() {

  return (
    <Container>
      <AsideBar/>
      <MainContent/>
    </Container>
  )
}

export default App

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
`