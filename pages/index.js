import { useState } from "react";
import Image from 'next/image'
import { RadioGroup } from "@headlessui/react"

export default function Home() {
    let [plan, setPlan] = useState("startup");
    return (
        <div className="site-container">
            <div className="space-y-5">
                <h1 className="text-2xl font-bold">Merhaba ben<p
                    className="bg-yellow-100 px-1 mx-1 inline-block">Ekrem Günden.</p>"Geleceğin Milyarderiyim."</h1>
                <p className="font-medium flex items-center font-semibold">
                    <Image src="/school.svg"
                           className="pr-4"
                           width={24}
                           height={24}
                />
                    15 yaşında Meram Anadolu Lisesi Öğrencisiyim.
                </p>
                <p className="text-lg font-medium text-gray-700 font-semibold my-8 italic ">
                    "Yazılım en büyük hobim ve iş alanıma dönüşmüş durumda."</p>
            </div>
            <div className="mx-6 mt-8 relative h-96">
                <div className="grid items-center justify-center h-96">
                    <h3 className="font-bold text-xl">Temel Skillerim</h3>
                </div>
                <div className="space-y-3 ml-auto my-auto ">
                    <h4 className="box-special top-3 left-4">Html</h4>
                    <h4 className="box-special bottom-3 left-4">CSS</h4>
                    <h4 className="box-special top-4 right-4">Javascript</h4>
                    <h4 className="box-special bottom-3 right-4">React & Next</h4>
                </div>
            </div>
        </div>
    )
}
