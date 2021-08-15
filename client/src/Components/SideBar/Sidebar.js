import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as CgIcons from "react-icons/cg";
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';



const Nav = styled.div`
    background: #15171c;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const RightNavIcon = styled.div`
    color: #fff;
    margin-right: 2rem;
    font-size: 1.5rem;
    height: 80px;
    display: flex;
    justify-content:space-between;
    align-items: center;
`

const NotIcon = styled.div`
    color: #fff;
    margin-right: 1rem;
    align-items: center;
`

const SidebarNav = styled.nav`
    background: #15171c;
    width: 20rem;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 3rem;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition:  350ms;
    z-index: 10;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <Nav>
                <NavIcon to="#" style={{ color: '#fff' }}>
                    <FaIcons.FaBars onClick={showSidebar} />
                </NavIcon>
                <IconContext.Provider value={{ color: '#ffff' }}>


                    <SidebarNav sidebar={sidebar}>
                        <SidebarWrap>
                            <NavIcon to="#">
                                <AiIcons.AiOutlineClose onClick={showSidebar} />
                            </NavIcon>
                            {SidebarData.map((item, index) => {
                                return <SubMenu item={item} key={index} />
                            })}
                        </SidebarWrap>
                    </SidebarNav>
                </IconContext.Provider>

                <RightNavIcon to="#">
                    <NotIcon>
                        <AiIcons.AiFillBell />
                    </NotIcon>
                    <CgIcons.CgProfile />
                </RightNavIcon>
            </Nav>
        </>
    )
}

export default Sidebar;
