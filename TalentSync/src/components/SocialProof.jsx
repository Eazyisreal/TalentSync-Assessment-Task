/* eslint-disable no-unused-vars */

import Automattic from "../assets/images/Automattic.svg"
import Coinbase from "../assets/images/Coinbase.svg"
import Dropbox from "../assets/images/Dropbox.svg"
import Intercom from "../assets/images/Intercom.svg"
import Marvel from "../assets/images/Marvel.svg"
import Shopify from "../assets/images/Shopify.svg"

const logo =[
    { image: Shopify},
    { image: Coinbase},
    { image: Dropbox},
    { image: Intercom},
    { image: Marvel},
    { image: Automattic},
    
]
export default function SocialProof() {
    return (
        <section className="flex py-[6rem] w-full lg:px-[2rem] px-4 justify-center bg-white" >
                <div className="flex  md:px-[2rem] flex-col gap-12">
                    <h1 className="text-gray600 text-center font-inter text-[.75rem] md:text-xl font-medium">Join 1,500+ companies already video conferencing the ClearLink way</h1>
                    <div className="flex md:items-center w-full gap-4 md:gap-[4.3125rem]">
                    {logo.map((item) => (
                            <img loading="lazy" className=" w-[2.8rem] md:w-[3.5rem] lg:w-[7rem]"  key={item} src={item.image} alt={`${item}'s logo` }/>
                        ))}
                    </div>
                </div>
        </section>
    )
}
