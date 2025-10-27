import { nobrRu } from "../../utils/typography";
import { HERO_CONST } from "./hero.constants";
import heroImg from '@/assets/images/hero/hero.webp'

export default function Hero(){

    return(
        <section>
           <div className="flex flex-col items-center max-w-2/3 m-auto text-center font-inter">
            <h1 className="flex flex-col font-heading tracking-tight text-4xl xs:text-5xl md:text-7xl font-semibold mb-6  gap-[1vh]">
                <span className="text-7xl font-medium">{HERO_CONST.firstTitle}</span>
                <span className="text-7xl font-medium text-[#ffba00]">{HERO_CONST.secondTitle}</span>
                
            </h1>
            <p className="min-w-2/4 md:max-w-md lg:max-w-lg mx-auto text-lg text-gray-500 mb-10">{nobrRu(HERO_CONST.heroDescription)}</p>
           </div>

           <img className= 'max-w-3/4 mx-auto'src={heroImg} alt="" />
        </section>
    )
}