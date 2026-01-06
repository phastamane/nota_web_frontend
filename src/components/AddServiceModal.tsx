import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@heroui/react";
import React from "react";
import AddServiceForm from "./ui/forms/AddServiceForm";
import AddServicesCatForm from "./ui/forms/AddServicesCatForm";
import { PlusIcon } from "@/shared/Icons";

type ModalMode = "create" | "edit";
type EntityType = "service" | "category";

type TriggerProps = {
  onPress?: (e: React.SyntheticEvent) => void;
  onClick?: (e: React.SyntheticEvent) => void;
};

interface ServiceModalProps {
  type: EntityType;
  mode: ModalMode;
  trigger?: React.ReactNode;
  initialData?: any;
}

export default function AddServiceModal({type, mode, trigger, initialData} : ServiceModalProps) {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const titleMap = {
    service: {
      create: "Добавить услугу",
      edit: "Изменить услугу",
    },
    category: {
      create: "Добавить категорию",
      edit: "Изменить категорию",
    },
  };


const triggerElement =
  trigger && React.isValidElement<TriggerProps>(trigger)
    ? React.cloneElement<TriggerProps>(trigger, {
        onPress: (e) => {
          trigger.props.onPress?.(e);
          onOpen();
        },
        onClick: (e) => {
          trigger.props.onClick?.(e);
          onOpen();
        },
      })
    : trigger;



 return (
    <>
      {trigger ? (
        triggerElement
      ) : (
        <Button onPress={onOpen} startContent={<PlusIcon />}>
          {titleMap[type][mode]}
        </Button>
      )}

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                {titleMap[type][mode]}
              </ModalHeader>

              <ModalBody>
                {type === "category" && (
                  <AddServicesCatForm
                    mode={mode}
                    initialData={initialData}
                    onSuccess={onClose}
                  />
                )}

                {type === "service" && (
                  <AddServiceForm
                    mode={mode}
                    initialData={initialData}
                    onSuccess={onClose}
                  />
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}