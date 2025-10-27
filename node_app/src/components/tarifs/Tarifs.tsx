import { PRICING_PLANS } from "./tarifs.constants";
import { Button } from "@heroui/button";

export default function Tarifs() {

    const stylesOfButtons = [
        'bg-transparant border border-gray-300 focus:border-[#ffc322] hover:bg-white/100 hover:border-[#ffc322] hover:text-[#ffc322] hover:bg-white',
        'bg-[#ffc322] border border-[#ffff22] text-white focus:border-[#fffff] hover:border-[#fffff]',
        'bg-white border border-gray-300 text-black focus:border-[#fffff] hover:border-[#00000] hover:text-white hover:bg-black'
     ]

  return (
    <section className="flex flex-col gap-20">
      <label className = 'align-self-center mx-auto' htmlFor="">
        <h1 className="text-4xl font-bold">Услуги</h1>
      </label>

      <div className="flex justify-self-center mx-auto justify-around min-w-3/4">
        {PRICING_PLANS.map((el, i) => (
          <div className={`flex flex-col flex-wrap border-gray-300 border rounded-2xl justify-around w-md min-h-[450px] p-8 ${i > 1 && 'bg-black text-white'}`} key={i}>
            <div className="flex ">
              {el.icon}
              <p className="pl-4">{el.label}</p>
            </div>

            <div className="flex flex-col">
              <p className="text-4xl mb-8"><strong>{el.title}</strong></p>
              <p className='text-gray-400'>{el.subtitle}</p>
            </div>

            <div className="flex flex-col border-2 border-gray-300 max-w-95 p-4 gap-2 rounded-2xl">
              <span className="flex gap-1 text-center">
                <strong>{el.flatLicense}</strong>
                <p className="text-gray-500">{el.license}</p>
              </span>
              <span className="flex gap-1 text-center">
                <strong>{el.flatRate}</strong>
                <p className="text-gray-500">{el.rate}</p>
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
