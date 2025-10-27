import { nobrRu } from "../../utils/typography";
import { BENEFIT_IMAGES } from "./benefits.constants";

export default function Benefits(){

    return(
        <section className="flex flex-col">
            <div className="flex flex-col gap-[15vh] max-w-3/4 justify-self-center mx-auto">

                    {BENEFIT_IMAGES.map((el, i) => (

                        <div className={`flex justify-around ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                            <img src={el.image} alt="" />
                            <div className="flex flex-col gap-[2vh] max-w-1/3">
                                <p className="font-semibold text-5xl max-w-xs">{el.title}</p>
                                <p className="text-gray-500">{nobrRu(el.description)}</p>
                            </div>
                        </div>

                    ))}

            </div>           
        </section>
    )
}