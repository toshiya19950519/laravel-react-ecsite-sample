
import styled from "styled-components"
import Footer from "../organisms/Footer"
import Header from "../organisms/Header"

const StyledMain = styled.main`
    padding: 50px 0 80px;
`

const StyledContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
`

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({children}:LayoutProps) => {
    return (
        <>
        <Header/>
        <StyledMain>
        <StyledContainer>
        <div className="container mx-auto">{children}</div>
        </StyledContainer>
        </StyledMain>
        <Footer/>
        </>
    )
}

export default Layout