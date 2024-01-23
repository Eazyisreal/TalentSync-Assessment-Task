import Calendar from "../assets/images/Calendar.svg"
import Lock from "../assets/images/Lock.svg"
import Noise from "../assets/images/Noise.svg"
import Rectangle from "../assets/images/Rectangle.svg"
import VideoRecorder from "../assets/images/Video.svg"
import handArrow from "../assets/images/Hand-drawn-arrow.svg"

const textContainer = [
    {
        title: "Crystal-clear HD video",
        text: "No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.",
        image: VideoRecorder
    },
    {
        title: "Noise-canceling audio",
        text: "Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.",
        image: Noise
    },
    {
        title: "Scheduling made easy",
        text: "Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.",
        image: Calendar
    },
    {
        title: "Bank-grade security",
        text: "Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.",
        image: Lock
    },
]

export default function Choose() {
    return (
        <section className="flex flex-col md:py-[6rem] w-full lg:px-[2rem] px-4 gap-20 bg-white" >
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    <p className="text-blue700 font-inter text-[.75rem] md:text-[1.125rem] font-semibold">The ClearLink Advantage</p>
                    <h1 className="text-gray800 text-3xl md:text-5xl font-semibold font-inter">Why choose ClearLink?</h1>
                </div>
                <p className="font-inter text-[.75rem] w-full md:w-3/4 lg:w-3/5 md:text-xl ">In a world where connection is everything, ClearLink takes the lead. Our cutting-edge video conferencing app offers:</p>
                <img loading="lazy" className=" hidden md:block absolute z-10  left-[61%]" src={handArrow} alt="" />
            </div>

            <div className="flex flex-col lg:flex-row relative w-full justify-between gap-10 ">
                <div className="grid grid-cols-2 gap-8 w-full ">
                    {textContainer.map((item) => (
                        <div key={item} className="flex flex-col gap-5">
                            <img loading='lazy' className="w-[4rem]" src={item.image} alt="Video recorder icon" />
                            <div className="flex flex-col gap-2">
                                <h2 className="font-inter text-gray900 md:text-xl font-semibold">{item.title}</h2>
                                <p className="text-gray600 text-[.75rem] md:text-base font-inter">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full h-[32rem] lg:w-[80%] bg-cover bg-no-repeat " style={{ backgroundImage: `url(${Rectangle})` }}>
                </div>
            </div>
        </section>
    )
}
