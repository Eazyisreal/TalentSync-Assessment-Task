import { useState } from "react"

const Faqs = [
    {
        question: "How many participants can join a ClearLink video conference?",
        answer: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs."
    },
    {
        question: "Can I use ClearLink on multiple devices?",
        answer: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs."
    },
    {
        question: "Is ClearLink compatible with other video conferencing platforms?",
        answer: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs."
    },
    {
        question: "How does ClearLink ensure the security of my video conferences?",
        answer: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs."
    },
    {
        question: "Do I need to download any software to use ClearLink?",
        answer: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs."
    },
    {
        question: "What kind of customer support does ClearLink provide?",
        answer: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs."
    },
]
export default function Faq() {
    const [expandedQuestion, setExpandedQuestion] = useState(null);

    const toggleQuestion = (id) => {
        setExpandedQuestion((prev) => (prev === id ? null : id));
    };
    return (
        <section className="flex flex-col py-[6rem] w-full lg:px-[2rem] px-4 gap-20 " >
            <div className="flex flex-col lg:flex-row w-full gap-8 justify-between">
                <div className="flex w-full flex-col gap-5">
                    <div className="flex flex-col gap-3">
                        <p className="text-blue700 font-inter md:text-[1.125rem] font-semibold">Support</p>
                        <h2 className="text-gray800 text-4xl md:text-5xl font-inter font-semibold tracking-tight">FAQs</h2>
                    </div>
                    <p className="text-gray500 font-inter text-[.95rem] md:text-xl">Everything you need to know about the product <br />
                        and billing. Can’t find the answer you’re looking <br />
                        for? Please <span className="underline">chat to our friendly team.</span></p>
                </div>

                <div className="flex flex-col w-full items-center gap-3">
                    {Faqs.map((item) => (
                        <div key={item.question} className={`flex p-4 md:p-8 w-full flex-col rounded-2xl border-b ${expandedQuestion === item.question ? 'bg-gray50 border border-gray200' : ''}`}>
                            <div className="flex w-full md:whitespace-nowrap justify-between" onClick={() => toggleQuestion(item.question)}>
                                <h3 className="font-inter text-gray900 font-bold text-[.75rem] md:text-xl">{item.question}</h3>
                                {expandedQuestion === item.question ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </div>
                            {expandedQuestion === item.question &&
                                <div className="mt-3">
                                    <p className="text-gray600 font-inter text-[.75rem] md:text-[1.125rem]">{item.answer}</p>
                                </div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
