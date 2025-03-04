import { useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import styles from "./ButtonAddTransactions.module.css";
import Modal from "../modalAddTansactions/ModalAddTransactions";

const ButtonAddTransactions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openAddModal = () => setIsModalOpen(true);
  const closeAddModal = () => setIsModalOpen(false);

  return (
    <>
      <button onClick={openAddModal} type="button" className={styles.btn}>
        <IoAddSharp className={styles.icon} />
      </button>

      {/* Modal'ı açmak için isModalOpen durumunu kullanıyoruz */}
      <Modal isOpen={isModalOpen} onClose={closeAddModal} />
    </>
  );
};

export default ButtonAddTransactions;
