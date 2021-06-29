import { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { RadioGroup } from '@headlessui/react'

export default function Home({ ret }) {
  const [me, setMe] = useState('')
  return (
    <>
      <Head>
        <title>Hakkımızda</title>
        <link
          rel="icon"
          href="http://localhost:1337/global/uploads/logo_5a601a795e.png'"
        />
      </Head>
      <div className="site-container mt-6">
        <div className="space-y-5">
          <h1 className="text-2xl font-bold">
            Merhaba ben
            <p className="bg-yellow-100 px-1 mx-1 inline-block">
              Ekrem Günden.
            </p>
            "Geleceğin Milyarderiyim."
          </h1>
          <p className="font-medium flex items-center font-semibold">
            <Image src="/school.svg" className="pr-4" width={24} height={24} />
            15 yaşında Meram Anadolu Lisesi Öğrencisiyim.
          </p>
          <p className="text-lg font-medium text-gray-700 font-semibold my-8 italic ">
            "Yazılım en büyük hobim ve iş alanıma dönüşmüş durumda."
          </p>
        </div>
        <div className="mx-6 xl:mt-8 relative h-96 md:mt-24 mt-16">
          <div className="grid items-center justify-center sm:h-96 h-16">
            <h3 className="font-bold text-xl">Temel Becerilerim</h3>
          </div>
          <div className="space-y-3 ml-auto my-auto ">
            <h4 className="box-special top-3 left-4">Html</h4>
            <h4 className="box-special bottom-3 left-4">React & Next</h4>
            <h4 className="box-special top-3 right-4">Javascript</h4>
            <h4 className="box-special bottom-3 right-4">CSS</h4>
          </div>
        </div>
        <div className="flex sm:flex-row space-x-4 mt-24 md:mt-36 xl:mt-6 items-center flex-col sm:py-4">
          <div className="flex-1 flex items-center space-x-2 bg-red-200 p-3 pr-6 rounded-sm shadow-lg">
            <Image
              className="max-w-3xl border-blue-400 shadow"
              src="/imageMe.jpg"
              width={100}
              height={197}
              alt="Ekrem"
            />
            <span>
              <Image src="/arrow-left.svg" width={48} height={48} />
            </span>
            <h2 className="text-lg font-semibold mb-2">Bu ben</h2>
          </div>
          <RadioGroup
            value={me}
            onChange={setMe}
            className="flex space-x-6 flex-1 justify-center items-center sm:space-x-3 mt-4 sm:mt-0"
          >
            <RadioGroup.Label>
              <p className="text-xl sm:text-xl">Nasilim ?</p>
            </RadioGroup.Label>
            <RadioGroup.Option value="iyi">
              {({ checked }) => (
                <span
                  className={
                    checked
                      ? 'bg-blue-600 border-1 rounded-sm px-3 py-1 shadow-lg shadow-inner'
                      : 'border-1 rounded-sm bg-red-400 px-3 py-1 shadow-md'
                  }
                >
                  İyi
                </span>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option value="kötü">
              {({ checked }) => (
                <span
                  className={
                    checked
                      ? 'bg-blue-600 border-1 rounded-sm px-3 py-1 shadow-lg shadow-inner'
                      : 'border-1 rounded-sm bg-red-400 px-3 py-1 shadow-md'
                  }
                >
                  Kötü
                </span>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option value="fena">
              {({ checked }) => (
                <span
                  className={
                    checked
                      ? 'bg-blue-600 border-1 rounded-sm px-3 py-1 shadow-lg shadow-inner'
                      : 'border-1 rounded-sm bg-red-400 px-3 py-1 shadow-md'
                  }
                >
                  Fenaa
                </span>
              )}
            </RadioGroup.Option>
          </RadioGroup>
        </div>
        <p className="mb-4 mt-6">
          <span className="pl-4">Merhaba</span> ben Ekrem. 15 yaşındayım. Meram
          Anadolu Lisesinde 10. sınıf öğrencisiyim. En sevdiğim renk
          siyah(elbette siyahın bir renk olmadığını biliyorum). Hobilerim kitap
          okumak(çok olmasada), müzik dinlemek ~ En sevdiğim müzik "Elbet bir
          gün buluşacağız - Müzeyyen Senar" ~ vee Yazılım.
        </p>
        <p className="pb-6">
          <span className="pl-4">Yazılım</span> konusuna gelecek olursak.
          Yaklaşık 2 yıldır yazılım alanıyla ilgileniyorum. Önceleri mekaniğe
          olan ilgim liseye geçince tanıştığım arkadaşım sayesinde değişti.
          Başlangıç olarak siber güvenlik alanı seçmiş olsam da şu anda
          Front-End Developer olarak projeler yapmaktayım. Yazılım hayatımda KTO
          gibi bir üniversiteden sertika almış ve hala devam etmekte olan
          Deneyap Atölyelerinde şimdilik online olsa da ders görmekteyim.
        </p>
      </div>
    </>
  )
}
