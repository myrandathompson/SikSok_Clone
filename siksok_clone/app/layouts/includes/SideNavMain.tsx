"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import MenuItems from "@/app/layouts/includes/MenuItems";
import ClientOnly from "@/app/components/ClientOnly";
import MenuItemFollow from "@/app/layouts/includes/MenuItemFollow";



export default function SideNavMain() {
    const pathname = usePathname();
    return (
        <>
        <div
            id="SideNavMain"
            className={`
                display-flex z-20 bg-white pt-[70px] h-full lg:border-r-0  w-[75px] overflow-auto
                ${pathname === '/' ? 'lg:w-[310px]' : 'lg:w-[220px'}
            `}
            >
                <div className="lg:w-full w-[55px] mx-auto">
                    <Link href='/'>
                        <MenuItems
                            iconString="For You"
                            colorString={pathname == '/' ? '#532cf0' : ''}
                            sizeString="25"
                            />
                    </Link>
                    <MenuItems iconString="Following" colorString="#000000" sizeString="25"/>
                    <MenuItems iconString="LIVE" colorString="#000000" sizeString="25"/>

                    <div className="items-right lg:ml-2 mt-2" />
                    <h3 className="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">Suggested</h3>

                    <div className="lg:hidden block pt-3" />
                    <ClientOnly>
                        <div className="cursor-pointer">
                            <MenuItemFollow user={{ id: "1", name: "Test User", image: "https://placeholder.co/40" }} />
                        </div>
                    </ClientOnly>

                    <button className="lg:block hidden text-[#F02C56] pt-1.5 pl-2 text-[13px]">
                        See all
                    </button>

                    {true ? (
                        <div>
                            <div className="lg:ml-2 mt-2" />
                            <h3 className="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">Following</h3>
                            
                            <div className="lg:hidden block pt-3" />
                            <ClientOnly user={undefined}>
                                <div className="cursor-pointer">
                                    <MenuItemFollow user={{ id: "1", name: "Test User", image: "https://placeholder.co/40" }} />
                                </div>
                            </ClientOnly>
                            <button className="lg:block hidden text-[#F02C56] pt-1.5 pl-2 text-[13px]">
                                See more
                            </button>
                        </div>
                    ) : null}
                    <div className="lg:block hidden lg:ml-2 mt-2" />

                    <div className="lg block hidden text-[11px] text-gray-500">
                        <p className="pt-4 px-2">About Newsroom SikSok Shop Contact Careers</p>
                        <p className="pt-4 px-2">SikSok for Good Advertise Developers Terms Privacy Policy & Safety How SikSok works Test new features</p>
                        <p className="pt-4 px-2">© 2023 SikSok</p>
                    </div>                    
                </div>
            </div>
        </>
    )
}
