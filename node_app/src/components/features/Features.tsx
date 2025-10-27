import { nobrRu } from "../../utils/typography";
import { FEATURE_IMAGES, FEATURE_TITLE } from "./features.constants";

export default function Feautures() {
  return (

    <section className="flex flex-col gap-[10vh] items-center">
      <div className="flex flex-col text-center max-w-2/4 justify-self-center gap-[2vh]">
        <h1 className="text-5xl font-semibold">{FEATURE_TITLE.title}</h1>
        <p className="text-lg text-gray-500">
          {nobrRu(FEATURE_TITLE.description)}
        </p>
      </div>

      <div className="grid max-w-3/4 justify-content-center grid-cols-3 grid-rows-2 gap-10">
        {FEATURE_IMAGES.map((el, i) => (
          <div className=" text-center max-w-sm justify-items-center " key={i}>
            {el.icon}
            <p className="font-semibold text-xl mt-4 mb-2">{nobrRu(el.title)}</p>
            <p className="text-lg text-gray-500">{nobrRu(el.description)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
