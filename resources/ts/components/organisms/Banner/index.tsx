import styled from "styled-components"

const StyledBanner = styled.div`
    margin-bottom: 20px;
`

const Banner = () => {
    return (
        <StyledBanner>
            <img src={`/storage/bunner/bunner_01.jpg`} />
        </StyledBanner>
    )
}

export default Banner