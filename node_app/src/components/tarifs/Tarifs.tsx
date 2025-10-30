import { nobrRu } from "../../utils/typography";
import { PRICING_PLANS } from "./tarifs.constants";
import { Button } from "@heroui/button";

export default function Tarifs() {

    const stylesOfButtons = [
        'bg-transparant border border-gray-300 focus:border-[#ffc322] hover:bg-white/100 hover:border-[#ffc322] hover:text-[#ffc322] hover:bg-white',
        'bg-[#ffc322] border border-[#ffff22] text-white focus:border-[#fffff] hover:border-[#fffff]',
        'bg-white border border-gray-300 text-black focus:border-[#fffff] hover:border-[#00000] hover:text-white hover:bg-black'
     ]

  return (
    <section className="flex flex-col gap-20 max-md:gap-10 ">
      <label className = 'align-self-center mx-auto' htmlFor="">
        <h1 className="text-5xl font-bold max-xl:text-4xl max-md:text-3xl">Услуги</h1>
      </label>

      <div className="flex justify-self-center mx-auto justify-around min-w-3/4 max-2xl:gap-5 max-xl:flex-col max-xl:items-center">
        {PRICING_PLANS.map((el, i) => (
          <div className={`flex flex-col flex-wrap border-gray-300 border rounded-2xl justify-around w-md min-h-[450px] p-8 max-2xl:w-sm max-2xl:p-6 max-md:w-[90vw] ${i > 1 && 'bg-black text-white'}`} key={i}>
            <div className="flex ">
              {el.icon}
              <p className="pl-4 ">{el.label}</p>
            </div>

            <div className="flex flex-col">
              <p className="text-4xl mb-8 max-2xl:text-3xl max-xl:text-2xl"><strong>{nobrRu(el.title)}</strong></p>
              <p className='text-gray-400 max-md:text-sm'>{el.subtitle}</p>
            </div>

            <div className="flex flex-col border-2 border-gray-300 max-w-95 p-4 gap-2 rounded-2xl max-2xl:p-3">
              <span className="flex gap-1 text-center max-md:text-sm">
                <strong>{el.flatLicense}</strong>
                <p className="text-gray-500 ">{el.license}</p>
              </span>
              <span className="flex gap-1 text-center max-2xl:text-base max-md:text-sm">
                <strong>{el.flatRate}</strong>
                <p className="text-gray-500 max-2xl:text-base max-md:text-sm">{nobrRu(el.rate)}</p>
              </span>
            </div>

            <Button  className = {`${stylesOfButtons[i]}`}>
              <strong>{el.cta}</strong>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
