import { nobrRu } from "../../utils/typography";
import { FUNC_IMAGES, FUNC_TITLE } from "./functions.constants";

export default function Functions(){

    return(
        <>
            <section className="flex flex-col gap-[15vh] items-center">
                <div className="flex flex-col text-center max-w-2/4 justify-self-center gap-[2vh]">
                    <h1 className="text-5xl font-semibold">{FUNC_TITLE.title}</h1>
                    <p className="text-lg text-gray-500">{nobrRu(FUNC_TITLE.description)}</p>
                </div>

                <div className="flex justify-center gap-10">
                    {FUNC_IMAGES.map((el, i) => (
                        <div className="text-left max-w-xs" key={i}>
                            <img className = 'rounded-lg border border-gray-300' src={el.image} alt={el.title} />
                            <p className="font-semibold text-xl mt-8 mb-2">{el.title}</p>
                            <p className="text-lg">{nobrRu(el.description)}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}