import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Select,
  SelectItem,
} from "@heroui/react";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { BookingSchema, type BookingInput } from "@/schemas/BookingSchema";
import { useBooking } from "@/hooks/useBooking";
import type { ServicesCatInterface } from "@/types/Services";

type TriggerProps = {
  onPress?: (e: React.SyntheticEvent) => void;
};

interface BookingFormProps {
  trigger?: React.ReactNode;
  serviceId?: number;
  notaryProfileId?: number;
}

export default function BookingForm({
  trigger,
  serviceId,
  notaryProfileId,
}: BookingFormProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { createBooking, dowloadReceipt } = useBooking();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingInput>({
    resolver: zodResolver(BookingSchema),
    defaultValues: {
      service_id: serviceId ?? 0,
      notary_profile_id: notaryProfileId ?? undefined,
    },
  });
  const {notariesList} = useBooking()

  const onSubmit = async (data: BookingInput) => {
    await createBooking(data);
    dowloadReceipt()
  };

  const triggerElement =
    trigger && React.isValidElement<TriggerProps>(trigger)
      ? React.cloneElement<TriggerProps>(trigger, {
          onPress: (e) => {
            trigger.props.onPress?.(e);
            onOpen();
          }
        })
      : trigger;

  return (
    <>
      {trigger ? (
        triggerElement
      ) : (
        <Button onPress={onOpen} color="success">
          Заказать
        </Button>
      )}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Заказать услугу</ModalHeader>

              <ModalBody>
                <form
                  className="flex flex-col gap-4"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  {/* NAME */}
                  <Controller
                    name="notary_profile_id"
                    control={control}
                    render={({ field }) => (
                      <Select
                        label="Выберите нотариуса"
                        labelPlacement="outside"
                        selectedKeys={
                          field.value !== null ? [String(field.value)] : []
                        }
                        onSelectionChange={(keys) => {
                          const value = Array.from(keys)[0];
                          field.onChange(value ? Number(value) : null);
                        }}
                        isInvalid={!!errors.notary_profile_id}
                        errorMessage={errors.notary_profile_id?.message}
                      >
                        {notariesList.map((notary) => (
                          <SelectItem key={String(notary.id)}>
                            {`${notary.first_name} ${notary.last_name}`}
                          </SelectItem>
                        ))}
                      </Select>
                    )}
                  />

                  <Button
                    type="submit"
                    isLoading={isSubmitting}
                    className="bg-[#ffba00]"
                    onPress={onClose}
                  >
                    Заказать
                  </Button>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
