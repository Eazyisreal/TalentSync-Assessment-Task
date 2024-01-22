/* eslint-disable no-unused-vars */

import Automattic from "../assets/images/Automattic.svg"
import Coinbase from "../assets/images/Coinbase.svg"
import Dropbox from "../assets/images/Dropbox.svg"
import Intercom from "../assets/images/Intercom.svg"
import Marvel from "../assets/images/Marvel.svg"
import Shopify from "../assets/images/Shopify.svg"

const logo =[
    "Shopify",
    "Coinbase",
    "Dropbox",
    "Intercom",
    "Marvel",
    "Automattic",
    
]
export default function SocialProof() {
    return (
        <section className="flex py-[6rem] w-full lg:px-[2rem] px-4 justify-center bg-white" >
                <div className="flex  px-[2rem] flex-col gap-12">
                    <h1 className="text-gray600 text-center font-inter text-xl font-medium">Join 1,500+ companies already video conferencing the ClearLink way</h1>
                    <div className="flex items-center w-full gap-[4.3125rem]">
                    {logo.map((item) => (
                            <img className=" w-10 md:w-[2.5rem] lg:w-[7rem]"  key={item} src={eval(item)} alt={`${item}'s logo` }/>
                        ))}
                    </div>
                </div>
        </section>
    )
}
