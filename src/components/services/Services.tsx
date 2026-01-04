import { useServicesCat } from "@/hooks/useServicesCat";
import { Button } from "@heroui/button";
import AddServiceModal from "../AddServiceModal";
import { useAuthStore } from "@/store/useAuthStore";

export default function Services() {

  const {categories} = useServicesCat()

     const userRole = useAuthStore((s) => s.user?.role)

  return (
    <section className="flex flex-col gap-20 max-md:gap-10 ">
      <label className = 'align-self-center mx-auto' htmlFor="">
        <h1 className="text-5xl font-bold max-xl:text-4xl max-md:text-3xl">Услуги</h1>
      </label>

      <div className="flex justify-self-center mx-auto justify-around min-w-3/4 gap-10 max-2xl:gap-5 max-xl:flex-col max-xl:items-center">
        {categories.map((el, i) => (
          <div key={el.id} className="min-h-[450px]">
            <div className="flex flex-col flex-wrap border-gray-300 border rounded-2xl w-md  p-8 max-2xl:w-sm max-2xl:p-6 max-md:w-[90vw]"  key={i}>
                <p className="mx-auto text-2xl font-semibold">{el.name}</p>
                {el.services.length > 0 &&
                  el.services.map((service) => (

                    <div key={service.title} className="flex gap-2 border rounded-xl p-4">
                      <div className="flex flex-col">
                        <p>{service.title}</p>
                        <p>{service.description}</p>
                      </div>
                      <span>
                        <p className="ml-auto">{`Цена: ${service.price} ₽`}</p>
                        {userRole !== 'admin' && userRole !== 'notary'&& <Button size={'sm'} color="success">Заказать</Button>}
                      </span>
                    </div>
                  ))
                }
                <AddServiceModal name={el.name} parent_id={el.parent_id}/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
