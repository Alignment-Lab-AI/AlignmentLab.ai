import Button from '@/components/Button'
import CoolBG from '@/components/CoolBg'
import FrontSvg from '@/components/frontSvg'
import WaySvg from '@/components/waySvg'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className='container mx-auto'>
        <div className="flex flex-col justify-center items-center gap-6 min-h-screen">
          <h1 className="mt-24 text-6xl font-bold hover:text-teal-400 transition duration-300 text-center">
            Alignment Lab AI
          </h1>
          <img src="/images/abstract.png" alt="Abstract" style={{ filter: 'invert(100%)' }} />
          <h2 className="text-2xl font-bold text-center">
            leaders in open development
          </h2>
        </div>
      </div>
      <hr className="border-slate-600 dark:border-slate-400 my-6" />
      <div className='container mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-2 md:mx-auto py-6">
          <div className='col-span-1 md:col-span-2'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold underline decoration-4 transition duration-300 hover:text-teal-400 text-center md:text-left'>
              Access for all
            </h2>
          </div>
          <div className='col-span-1'>
            <p className='text-lg md:text-xl lg:text-2xl leading-loose text-center md:text-left'>
              By making AI accessible to everyone, we can educate them more rapidly, and reduce the expertise gap to help avoid social issues related to AI
            </p>
          </div>
          <div className='flex justify-center col-span-1'>
            <div className='max-h-60 md:max-h-96 w-60 md:w-96 fill-black dark:fill-white'>
            <FrontSvg />
            </div>
          </div>

          <div className='col-span-1 md:col-span-2 mt-6'>
            <Button href='/projects' className='w-full' text='Our Projects' />
          </div>

        </div>
      </div>
      <hr className="border-slate-600 dark:border-slate-400 my-6" />
      <div className='container mx-auto'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-2 md:mx-auto py-6">
          <div className='col-span-1 md:col-span-2'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold underline decoration-4 transition duration-300 hover:text-teal-400 text-center md:text-left'>
              Leading the Way
            </h2>
          </div>
          <div className='col-span-1'>
            <p className='text-lg md:text-xl lg:text-2xl leading-loose text-center md:text-left'>
              State of the art quality. <br />
              Cutting edge models. <br />
              long term planning. <br />
              proven results.

            </p>
          </div>
          <div className='flex justify-center col-span-1'>
            <div className='max-h-60 md:max-h-96 w-60 md:w-96 fill-black dark:fill-white'>
            <WaySvg />
            </div>
          </div>

          <div className='col-span-1 md:col-span-2 mt-6'>
            <Button href='/team' className='w-full' text='Our Team' />
          </div>

        </div>
      </div>
    </main>
  )
}
