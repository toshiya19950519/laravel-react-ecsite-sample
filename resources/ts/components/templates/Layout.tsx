
import styled from "styled-components"
import Footer from "../organisms/Footer"
import Header from "../organisms/Header"

const StyledMain = styled.main`
    background-color: #e6e6e6;
`

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({children}:LayoutProps) => {
    return (
        <>
        <Header/>
        <StyledMain>
        <div className="container mx-auto">{children}</div>
        </StyledMain>
        <Footer/>
        </>
    )
}

export default Layout