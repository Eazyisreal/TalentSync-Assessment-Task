import Button from "./Button"
import ReadyImage from "../assets/images/Ready.svg"

const action = [
    "30 days free trial",
    "Cancel at any time",
    "Access to all features",
    "Peronalized onboarding"
]

export default function Ready() {
    return (
        <section className="flex flex-col lg:flex-row md:py-[6rem] w-full justify-between lg:pl-[2rem] pl-4 gap-20 " >
            <div className="flex w-full self-center  flex-col gap-10">
                <div className="flex flex-col gap-8">
                    <h1 className="text-gray900 whitespace-nowrap font-inter text-2xl md:text-5xl font-semibold">Ready to clear the path to <br /> perfect communication?</h1>
                    <div className="flex pl-4 flex-col gap-5">
                        {action.map((item) => (
                            <div key={item} className="flex gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                                    <path d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z" stroke="#175CD3" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="text-gray600 font-inter md:text-2xl">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex gap-2 items-center">
                    <Button buttonText="Talk to sales" addtionalClassName="bg-white text-gray900 text-[.95rem] md:text-base font-inter font-semibold" />
                    <Button buttonText="Start your free trial" addtionalClassName="bg-blue700 text-white text-[.95rem] md:text-base font-inter font-semibold" />
                </div>
            </div>
            <div className="flex w-full h-full">
                <img loading="lazy" src={ReadyImage} alt="Image of People Smiling during a video call" />
            </div>
        </section>
    )
}
