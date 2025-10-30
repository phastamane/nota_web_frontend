import { nobrRu } from "../../utils/typography";
import { FUNC_IMAGES, FUNC_TITLE } from "./functions.constants";

export default function Functions(){

    return(
        <>
            <section className="flex flex-col gap-[15vh] items-center max-md:gap-10">
                <div className="flex flex-col text-center max-w-2/4 justify-self-center gap-[2vh] max-xl: max-w-3/4 max-md:max-w-full max-md:px-2">
                    <h1 className="text-5xl font-bold max-xl:text-4xl max-md:text-3xl ">{FUNC_TITLE.title}</h1>
                    <p className="text-lg text-gray-500 max-xl:text-base">{nobrRu(FUNC_TITLE.description)}</p>
                </div>

                <div className="flex justify-center gap-10 max-lg:flex-col max-lg:items-center ">
                    {FUNC_IMAGES.map((el, i) => (
                        <div className="text-left max-w-xs max-xl:max-w-2xs" key={i}>
                            <img className = 'rounded-lg border border-gray-300' src={el.image} alt={el.title} />
                            <p className="font-semibold text-xl mt-8 mb-2 max-xl:text-lg">{el.title}</p>
                            <p className="text-lg text-gray-500 max-xl:text-base">{nobrRu(el.description)}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}