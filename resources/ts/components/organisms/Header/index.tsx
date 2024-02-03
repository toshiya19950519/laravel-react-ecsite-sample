import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { getUser,logout } from "../../../services/appClient";
import { Link, useNavigate } from "react-router-dom";
import Text from "../../atoms/Text";
import Image from "../../atoms/Image";
import styled from "styled-components";

const StyledHeader = styled.header`
    padding: 1.5rem 3.0rem;
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        padding: 1.0rem 0.5rem;
    }
`

const StyledFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledUl = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
        margin-left: 20px;
    }
`;

const StyledLl = styled.li`
    position: relative;
`;

interface StyledMenuProps {
    isOpen: boolean;
}

const StyledMenu = styled.div<StyledMenuProps>`
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: absolute;
    left: 0;
    top: 100%;
    background-color: white;
    border: 1px solid #ccc;
    z-index: 10;
    min-width: 150px; /* 最小幅の設定 */
    max-width: 300px; /* 最大幅の設定 */
    border: 1px solid #ccc;
    z-index: 10;
    white-space: nowrap; 
`;

const DesktopMenu = styled.nav`
    @media (max-width: ${props => props.theme.breakpoints.desktop}) {
        display: none;
    }
    // デスクトップ特有のスタイル
`;

const MobileMenu = styled.nav`
    display: none;
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        display: block;
    }
    // モバイル特有のスタイル
`;


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { user, setUser } = useAuth();
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logout();
        setUser(null);
        navigate('/login');
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick)
        return () => document.removeEventListener("mousedown", handleOutsideClick)
    },[])

    const handleOutsideClick = (e: any) => {
        if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
            setIsOpen(false)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getUser();
                setUser(userData);
                navigate("/login");
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <StyledHeader>
            <StyledFlex>
                <div>
                    <Link to="/">
                        <Image src="/storage/logo/logo.png" width={100} height="auto" alt="ロゴ" />
                    </Link>
                </div>
                <DesktopMenu>
                    <div>
                        <StyledUl>
                            {user ? (
                                <>
                                    <StyledLl>
                                        <a onClick={() => setIsOpen(!isOpen)}>
                                            <Text fontSize="small">{user.name}</Text>
                                        </a>
                                        {isOpen && (
                                        <StyledMenu ref={dropdownRef} isOpen={isOpen}>
                                            <li>
                                                <Link to="/cart">
                                                    <Text fontSize="small">カート</Text>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/login" onClick={handleLogout}>
                                                    <Text fontSize="small">ログアウト</Text>
                                                </Link>
                                            </li>
                                        </StyledMenu>
                                        )}
                                    </StyledLl>
                                </>
                            ) : (
                                <li>
                                    <Link to="/cart">
                                        <Text fontSize="small">ログイン</Text>
                                    </Link>
                                </li>
                            )}
                            <li>
                                <Link to="/contact">
                                    <Text fontSize="small">お問い合わせ</Text>
                                </Link>
                            </li>
                        </StyledUl>
                    </div>
                </DesktopMenu>
                <MobileMenu>
                    
                </MobileMenu>
            </StyledFlex>
        </StyledHeader>
    );
};

export default Header;
