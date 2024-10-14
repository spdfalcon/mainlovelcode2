import React, { ReactNode } from 'react'
import Topbar from '../_components/templates/topbar/Topbar'
import Footer from '../_components/templates/home/Footer/Footer'

export default function layout({
    children
}: {
    children: ReactNode
}) {
    return (
        <>
            <div className="">
                <Topbar></Topbar>
                <div className="">{children}</div>
            </div>
            <div className="">
                <Footer></Footer>
            </div>
        </>
    )
}
