import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'


export const SidebarData = [

    {
        title: 'Dashboard',
        path: "/dashboard",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Compliance',
                path: "/dashboard/compliance",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'C.A.S',
                path: "/dashboard/cas",
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Reports',
        path: "/reports",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Reports 1',
                path: "/reports/reports1",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Reports 2',
                path: "/reports/reports2",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Reports 3',
                path: "/reports/reports3",
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus />
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople />
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />
    }

]