import React from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Image,
  Divider,
} from "@nextui-org/react";
import { removeItem, updateItemQuantity } from "@/lib/features/cart/cartSlice";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { items } = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();
  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      dispatch(removeItem(id));
    } else {
      dispatch(updateItemQuantity({ id, quantity }));
    }
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      scrollBehavior="inside"
      isDismissable={false}
      isKeyboardDismissDisabled={true}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Your Shopping Cart ({items.length})
            </ModalHeader>
            <ModalBody>
              {items.map((item) => (
                <div key={item.id} className="flex items-center mb-4">
                  <Image
                    src={item.image}
                    width={80}
                    height={80}
                    alt={item.name}
                  />
                  <div className="flex-1 ml-4">
                    <h5>{item.name}</h5>
                    <p>${item.price}</p>
                    <div className="flex items-center mt-2">
                      <Button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1} // Disable button if quantity is 1
                      >
                        -
                      </Button>
                      <p className="mx-2">{item.quantity}</p>
                      <Button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <Button onClick={() => handleRemoveItem(item.id)}>X</Button>
                </div>
              ))}
              <Divider />
              <div className="mt-4">
                <h5>Subtotal: ${subtotal.toFixed(2)}</h5>
                <Button className="w-full mt-4">Go to Checkout</Button>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CartModal;
