import { useServicesCat } from "@/hooks/useServicesCat";
import { Button } from "@heroui/button";
import AddServiceModal from "../AddServiceModal";
import { useAuthStore } from "@/store/useAuthStore";
import { useService } from "@/hooks/useService";
import BookingForm from "../ui/forms/BookingForm";
import { Divider } from "@heroui/react";

export default function Services() {
  const { categories, deleteCategories } = useServicesCat();
  const { deleteService } = useService();

  const userRole = useAuthStore((s) => s.user?.role);

  return (
    <section className="flex flex-col gap-20 max-md:gap-5 ">
      <label className="align-self-center mx-auto" htmlFor="">
        <h1 className="text-5xl font-bold max-xl:text-4xl max-md:text-3xl">
          Услуги
        </h1>
      </label>

      <div className="max-w-sm mx-auto">
        {userRole !== 'customer' && <AddServiceModal
          mode={"create"}
          type={userRole === "admin" ? "category" : "service"}
        />}
      </div>
      <div className="flex justify-self-center mx-auto justify-around min-w-3/4 gap-10 max-2xl:gap-5 max-xl:flex-col max-xl:items-center">
        {categories.map((category, i) => (
          <div key={category.id} className="min-h-[450px]">
            
            <div
              className="flex flex-col flex-wrap border-gray-300 border rounded-2xl w-lg gap-5 p-8 max-2xl:w-sm max-2xl:p-6 max-md:w-[90vw]"
              key={i}
            >
              <div className="flex items-center text-center">
                <p className="mx-auto text-2xl font-semibold">{category.name}</p>
  
                {userRole === 'admin' && 
              <div className="flex gap-2 ">
                <AddServiceModal
                  type="category"
                  mode="edit"
                  initialData={{
                    id: category.id,
                    name: category.name,
                    parent_id: category.parent_id
                  }}
                  trigger={
                    <Button size="sm" color="warning">
                      Изменить
                    </Button>
                  }
                />
                <Button
                  size="sm"
                  color="danger"
                  onPress={() => deleteCategories(category.id)}
                >
                  Удалить
                </Button>
              
            </div>}
            </div>
              {category.services.length > 0 &&
                category.services.map((service) => (
                  <div
                    key={service.title}
                    className="flex gap-2 border rounded-xl p-5"
                  >
                    <div className="flex flex-col">
                      <p className="font-semibold">{service.title}</p>
                       <Divider className="my-2" />
                      <p>{service.description}</p>
                    </div>
                    
                    <span className="flex flex-col gap-2 border-gray-200 border-l-1 px-2 ml-auto">
                      <p className="font-semibold pb-1 whitespace-nowrap">{`${service.price} ₽`}</p>
                     
                      {userRole !== "admin" && userRole !== "notary" && (
                        <BookingForm
                          serviceId={service.id}
                          trigger={
                            <Button size="sm" color="success">
                              Заказать
                            </Button>
                          }
                        />
                      )}
                      {userRole === "notary" && 
                        <>
                          <AddServiceModal
                            type="service"
                            mode="edit"
                            initialData={{
                              id: service.id,
                              title: service.title,
                              description: service.description,
                              price: Number(service.price),
                              category_id: service.category_id ?? null,
                            }}
                            trigger={
                              <Button size="sm" color="warning">
                                Изменить
                              </Button>
                            }
                          />
                          <Button
                          size="sm"
                          color="danger"
                          onPress={async () => deleteService(service.id)}
                        >
                          Удалить
                        </Button>
                        </>
                      }
                      
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
