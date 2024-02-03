import React from "react";
import { Typography } from "@material-tailwind/react";
import styled from "styled-components";
import Text from "../../atoms/Text";
import Image from "../../atoms/Image";

const StyledFooter = styled.footer`
    background-color: #dcdcdc;
    padding: 32px 0;
    color: white;
    width: 100%;
`;

const StyledBox = styled.div`
    text-align: center;
`;

export function Footer() {
    return (
        <StyledFooter>
            <StyledBox>
                <Text>
                    @React・Laravelで作成したECです
                </Text>
            </StyledBox>
        </StyledFooter>
    );
}

export default Footer;
