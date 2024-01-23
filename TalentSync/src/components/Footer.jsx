import Appstore from "../assets/images/Appstore.svg"
import Facebook from "../assets/images/Facebook.svg"
import Github from "../assets/images/Github.svg"
import Instagram from "../assets/images/Instagram.svg"
import Linkedin from "../assets/images/Linkedin.svg"
import Playstore from "../assets/images/Playstore.svg"
import Twitter from "../assets/images/Twitter.svg"
import Youtube from "../assets/images/Youtube.svg"

const products = [
    {
        title: "Product",
        items: [
            { text: "Overview", path: "" },
            { text: "Features", path: "" },
            { text: "Solutions", path: "" },
            { text: "Tutorials", path: "", },
            { text: "Pricing", path: "" },
        ],
    },
];


const company = [
    {
        title: "Company",
        items: [
            { text: "About us", path: "" },
            { text: "Careers", path: "" },
            { text: "Press", path: "" },
            { text: "News", path: "", },
            { text: "Contact", path: "" },
        ],
    },
];


const resources = [
    {
        title: "Resources",
        items: [
            { text: "Blog", path: "" },
            { text: "Events", path: "" },
            { text: "Help centre", path: "" },
            { text: "Tutorials", path: "", },
            { text: "Support", path: "" },
        ],
    },
];


const legal = [
    {
        title: "Legal",
        items: [
            { text: "Terms", path: "" },
            { text: "Privacy", path: "" },
            { text: "Cookies", path: "" },
            { text: "Licenses", path: "", },
            { text: "Contact", path: "" },
        ],
    },
];

const socialIcons = [
    { image: Linkedin },
    { image: Twitter },
    { image: Facebook },
    { image: Instagram },
    { image: Github },
    { image: Youtube },
];


export default function Footer() {
    return (
        <footer className="flex w-full flex-col">
            <section className="flex flex-col lg:flex-row pt-[6rem] pb-[3rem] w-full lg:px-[2rem] px-4 gap-16 " >
                <div className="flex flex-col lg:flex-row w-full justify-center gap-8 md:gap-[6.25rem]">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-[.625rem]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28" fill="none">
                                <path d="M19.7058 16.9781L23.6024 13.0815C23.6024 10.4095 22.9344 7.84888 21.7098 5.62224L12.6362 14.0278V28H14.3619C20.4295 28 25.3837 23.1014 25.3837 16.9781H19.7058Z" fill="#1570EF" />
                                <path d="M5.67793 11.0219L1.78131 14.9185C1.78131 17.5905 2.4493 20.1511 3.67396 22.3777L12.7475 13.9722V0H11.0219C4.95427 0 0 4.89861 0 11.0219H5.67793Z" fill="#53B1FD" />
                            </svg>
                            <h1 className="font-inter text-gray900 text-xl font-semibold">ClearLink <span className="text-blueDark400 ">.</span></h1>
                        </div>
                        <p className="text-gray600 font-inter md:text-[1.125rem] whitespace-nowrap">ClearLink is your gateway to effortless, high- <br />quality video conferencing. Join us in shaping <br /> the future of communication!</p>
                    </div>

                    <div className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-5">
                        <Product />
                        <Company />
                        <Resources />
                        <Legal />

                        <div className="flex flex-col gap-4">
                            <h2 className="text-blue700 font-inter font-semibold">Get the app</h2>
                            <div className="flex flex-col gap-4">

                                <img className="w-[9rem]" src={Appstore} alt="Appstore Logo" />
                                <img className="w-[9rem]" src={Playstore} alt="Playstore Logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" py-12 w-full  bg-gray50">
                <div className="flex  items-center px-4 lg:px-6 justify-center">
                    <div className="flex flex-col gap-4 items-center md:flex-row w-full justify-between ">
                        <p className="text-gray500 font-inter ">© 2023 ClearLink. All rights reserved.</p>
                        <div className="flex items-center gap-5">
                            <SocialIcons />
                        </div>
                    </div>
                </div>
            </section>
        </footer >
    )
}



function Product() {
    return (
        <>
            {products.map((link, index) => (
                <div className="flex flex-col gap-4" key={index}>
                    <h2 className="text-gray500 font-inter font-semibold text-[.75rem] md:text-base">
                        {link.title}
                    </h2>
                    <ul className="flex flex-col gap-4">
                        {link.items.map((nav, i) => (
                            <li className="text-gray800 font-inter md:text-[1.125rem] font-semibold" key={i}>
                                {nav.text}
                            </li>
                        )
                        )}
                    </ul>
                </div>
            ))}
        </>
    )
}



function Company() {
    return (
        <>
            {company.map((link, index) => (
                <div className="flex flex-col gap-4" key={index}>
                    <h2 className="text-gray500 font-inter font-semibold text-[.75rem] md:text-base">
                        {link.title}
                    </h2>
                    <ul className="flex flex-col gap-4">
                        {link.items.map((nav, i) => (
                            <li className="text-gray800 font-inter md:text-[1.125rem] font-semibold" key={i}>
                                {nav.text}
                            </li>
                        )
                        )}
                    </ul>
                </div>
            ))}
        </>
    )
}


function Resources() {
    return (
        <>
            {resources.map((link, index) => (
                <div className="flex flex-col gap-4" key={index}>
                    <h2 className="text-gray500 font-inter font-semibold text-[.75rem] md:text-base">
                        {link.title}
                    </h2>
                    <ul className="flex flex-col gap-4">
                        {link.items.map((nav, i) => (
                            <li className="text-gray800 font-inter md:text-[1.125rem] font-semibold" key={i}>
                                {nav.text}
                            </li>
                        )
                        )}
                    </ul>
                </div>
            ))}
        </>
    )
}

function Legal() {
    return (
        <>
            {legal.map((link, index) => (
                <div className="flex flex-col gap-4" key={index}>
                    <h2 className="text-gray500 font-inter font-semibold text-[.75rem] md:text-base">
                        {link.title}
                    </h2>
                    <ul className="flex flex-col gap-4">
                        {link.items.map((nav, i) => (
                            <li className="text-gray800 font-inter md:text-[1.125rem] font-semibold" key={i}>
                                {nav.text}
                            </li>
                        )
                        )}
                    </ul>
                </div>
            ))}
        </>
    )
}


function SocialIcons() {
    return (
        <nav className="flex gap-6">
            {socialIcons.map((item) => (
                <img key={item} src={item.image} alt={`${item}'s image`} />
            ))}
        </nav>
    );
}