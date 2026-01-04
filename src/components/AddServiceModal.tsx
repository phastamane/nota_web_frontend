import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@heroui/react";
import AddServiceForm from "./ui/forms/AddServiceForm";
import { useAuthStore } from "@/store/useAuthStore";
import AddServicesCatForm from "./ui/forms/AddServicesCatForm";

type AddServiceModalProps = {
  name: string;
  parent_id: number | null;
};

export default function AddServiceModal({ name }: AddServiceModalProps) {
  const userRole = useAuthStore((s) => s.user?.role);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      {userRole === "notary" && 
      <Button
        className={
          "bg-transparant border border-gray-300 focus:border-[#ffc322] hover:bg-white/100 hover:border-[#ffc322] hover:text-[#ffc322] hover:bg-white"
        }
        onPress={onOpen}
      >
        Добавить услугу
      </Button>}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{name}</ModalHeader>
              <ModalBody>
                {userRole === "admin" ? (
                  <AddServicesCatForm />
                ) : (
                  <AddServiceForm onSuccess={onClose} />
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
