import React from "react";
import styled from 'styled-components'


interface StyledButtonProps {
    size?: 'small' | 'medium' | 'large';
    backgroundColor?: string;
    width?: number | string; 
  }

const StyledButton = styled.button<StyledButtonProps>`
  font-size: ${props => props.size === 'large' ? '18px' : props.size === 'small' ? '12px' : '14px'};
  padding: ${props => props.size === 'large' ? '15px 30px' : props.size === 'small' ? '5px 10px' : '10px 20px'};
  background-color: ${props => props.backgroundColor || 'blue'};
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 0.5em;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: ${props => typeof props.width === 'number' ? `${props.width}px` : props.width};

  /* レスポンシブデザインのためのメディアクエリ */
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.size === 'large' ? '16px' : props.size === 'small' ? '10px' : '12px'};
    padding: ${props => props.size === 'large' ? '12px 24px' : props.size === 'small' ? '4px 8px' : '8px 16px'};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.size === 'large' ? '14px' : props.size === 'small' ? '8px' : '10px'};
    padding: ${props => props.size === 'large' ? '10px 20px' : props.size === 'small' ? '3px 6px' : '6px 12px'};
  }
`

interface ButtonProps extends StyledButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({
  size = 'medium',
  backgroundColor,
  width,
  children,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      type="submit"
      backgroundColor={ backgroundColor }
      size={size}
      width={width}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
