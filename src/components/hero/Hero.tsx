import { nobrRu } from "../../utils/typography";
import { HERO_CONST } from "./hero.constants";
import heroImg from '@/assets/images/hero/hero.webp'

export default function Hero(){

    return(
        <section className="max-md:mt-10!">
           <div className="flex flex-col items-center max-w-2/3 m-auto text-center font-inter max-lg:max-w-full max-md:px-2">
            <h1 className="flex flex-col font-heading tracking-tight text-4xl font-semibold mb-6  gap-[1vh]">
                <span className="text-7xl font-semibold max-xl:text-6xl max-md:text-3xl">{HERO_CONST.firstTitle}</span>
                <span className="text-7xl font-semibold text-[#ffba00] max-xl:text-6xl max-md:text-3xl">{HERO_CONST.secondTitle}</span>
                
            </h1>
            <p className="min-w-2/4 max-md:max-w-md max-lg:max-w-lg mx-auto text-lg text-gray-500 mb-10 max-xl:text-base">{nobrRu(HERO_CONST.heroDescription)}</p>
           </div>

           <img className= 'max-w-3/4 mx-auto'src={heroImg} alt="" />
        </section>
    )
}