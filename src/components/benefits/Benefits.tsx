import { nobrRu } from "../../utils/typography";
import { BENEFIT_IMAGES } from "./benefits.constants";

export default function Benefits(){

    return(
        <section className="flex flex-col">
            <div className="flex flex-col gap-[15vh] max-w-3/4 justify-self-center mx-auto max-xl:max-w-full max-lg:max-w-3/4 max-md:max-w-full max-md:px-2 max-md:gap-15">

                    {BENEFIT_IMAGES.map((el, i) => (

                        <div className={`flex justify-around ${i % 2 === 0 ? 'flex-row-reverse' : ''} max-lg:flex-col `} key={i}>
                            <img className="max-lg:mb-5" src={el.image} alt="" />
                            <div className="flex flex-col gap-[2vh] max-w-1/3 max-lg:max-w-full max-lg:text-center ">
                                <p className="font-bold text-5xl max-w-xs max-xl:text-4xl max-lg:max-w-full max-md:text-2xl">{el.title}</p>
                                <p className="text-gray-500 max-xl:text-base">{nobrRu(el.description)}</p>
                            </div>
                        </div>

                    ))}

            </div>           
        </section>
    )
}