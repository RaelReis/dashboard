import styled from "styled-components"
import { AsideBar } from "./components/AsideBar/AsideBar"

function App() {

  return (
    <Container>
      <AsideBar/>
    </Container>
  )
}

export default App

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
`