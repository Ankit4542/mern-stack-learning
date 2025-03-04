import React from "react";

const Body = () => {
    return (
        <div className="space-y-4  lg:flex">
            <div className="flex justify-center lg:flex-1 lg:order-2 lg:justify-end">
                <img src="./assets/Blue-Shape.svg" alt="Blue Shape" className="-rotate-[15deg] h-64 md:h-72 lg:h-[320px]"/>
                <img src="./assets/Pink-Shape.svg" alt="Blue Shape" className="absolute -rotate-[30deg] h-64 md:h-72 lg:h-[320px]"/>
                <img src="./assets/Purple-Shape.svg" alt="Blue Shape" className="absolute -rotate-[15deg] h-64 md:h-72 lg:h-[320px]" />
                <img src="./assets/Hero-Model.png" alt="Blue Shape" className="absolute h-64 md:h-72 lg:h-[320px]" />
            </div>
            <div className="lg:flex-1 lg:order-1">
                <h1 className="text-5xl font-bold font-playFair leading-tight">Host your website in less than 5 minutes</h1>
                <p className="font-lato text-gray-400">With Hoster, get your website up and running in no less than 5 minutes with the most competitive pricing packages available online.</p>
                <form action="" className="flex flex-col gap-4 md:flex-row lg:mt-8">
                    <input className="rounded-md px-4 py-3 placeholder:text-gray-400" type="email" placeholder="Enter email Address" />
                    <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join Waitlist</button>
                </form>
                <div className="flex gap-2 py-6">
                    <img src="./assets/Checkmark.svg" alt="Check" className="px-2"/>
                    <p className="font-lato text-gray-400">No spam, ever, Unsubscribe anytime</p>
                </div>
            </div>
        </div>
    )
}

export default Body