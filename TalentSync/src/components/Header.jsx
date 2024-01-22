import Button from "../components/Button"

export default function Header() {
    return (
        <header className=" flex py-4 px-8 justify-between w-full items-center rounded-[6.25rem] bg-gray100 border-gray300">
            <div className="flex items-center gap-[.625rem]">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28" fill="none">
                    <path d="M19.7058 16.9781L23.6024 13.0815C23.6024 10.4095 22.9344 7.84888 21.7098 5.62224L12.6362 14.0278V28H14.3619C20.4295 28 25.3837 23.1014 25.3837 16.9781H19.7058Z" fill="#1570EF" />
                    <path d="M5.67793 11.0219L1.78131 14.9185C1.78131 17.5905 2.4493 20.1511 3.67396 22.3777L12.7475 13.9722V0H11.0219C4.95427 0 0 4.89861 0 11.0219H5.67793Z" fill="#53B1FD" />
                </svg>
                <h1 className="font-inter text-gray900 text-xl font-semibold">ClearLink <span className="text-blueDark400 ">.</span></h1>
            </div>

            <ul className="hidden lg:flex gap-10">
                <l1 className="flex items-center gap-[.375rem] font-inter font-semibold text-[1.125rem] text-gray500">
                    Products
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                        <path d="M5.19183 6.75L9.69183 11.25L14.1918 6.75" stroke="#667085" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                    </svg>
                </l1>
                <l1 className="flex items-center gap-[.375rem] font-inter font-semibold text-[1.125rem] text-gray500">
                    Solutions
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                        <path d="M5.19183 6.75L9.69183 11.25L14.1918 6.75" stroke="#667085" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                    </svg>
                </l1>
                <l1 className="flex items-center gap-[.375rem] font-inter font-semibold text-[1.125rem] text-gray500">
                    Resources
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                        <path d="M5.19183 6.75L9.69183 11.25L14.1918 6.75" stroke="#667085" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                    </svg>
                </l1>
                <l1 className="flex items-center gap-[.375rem] font-inter font-semibold text-[1.125rem] text-gray500">
                    Pricing
                </l1>

            </ul>

            <div className="hidden lg:flex items-center gap-2">
                <Button buttonText="Talk to sales" addtionalClassName="font-inter bg-white whitespace-nowrap text-gray900 font-semibold" />
                <Button buttonText="Sign up for free" addtionalClassName="font-inter whitespace-nowrap text-white font-semibold border-none bg-blue700" />
            </div>
        </header>
    )
}
