import styled from "styled-components"

interface StyledTextProps {
    fontSize?: 'large' | 'medium' | 'small';
    letterSpacing?: 'normal' | 'wide' | 'wider';
    lineHeight?: 'normal' | 'relaxed' | 'loose';    
    color?: string;
}

const StyledText = styled.span<StyledTextProps>`
    font-size: ${props => {
        switch (props.fontSize) {
            case 'large': return '18px';
            case 'medium': return '16px';
            case 'small': return '14px';
            default: return '16px';
        }
    }};
    letter-spacing: ${props => {
        switch (props.letterSpacing) {
            case 'wide': return '0.05em';
            case 'wider': return '0.1em';
            default: return 'normal';
        }
    }};
    line-height: ${props => {
        switch (props.lineHeight) {
            case 'relaxed': return '1.5';
            case 'loose': return '2';
            default: return 'normal';
        }
    }};
    color: ${props => props.color || "black"};

    @media (max-width: 768px) {
        font-size: ${props => {
            switch (props.fontSize) {
                case 'large': return '16px';
                case 'medium': return '14px';
                case 'small': return '12px';
                default: return '14px';
            }
        }};
    }
`;

interface TextProps extends StyledTextProps {
    children: React.ReactNode;
}

const Text = ({ fontSize, letterSpacing, lineHeight, color, children }: TextProps) => {
    return (
        <StyledText
            fontSize={fontSize}
            letterSpacing={letterSpacing}
            lineHeight={lineHeight}
            color={color}
        >
            {children}
        </StyledText>
    );
};

export default Text;
