import { useRef } from 'react'
import styles from '../styles/Modal.module.scss';

function Modal({ isModalVisible, setIsModalVisible, modalTitle, children }) {
  const modal = useRef(null)

  const hide = (e) => {
    if (e.target.dataset.close) {
      setIsModalVisible(false)
    }

  }

  return (
    <div ref={modal} className={styles.modal} style={{ opacity: isModalVisible ? '1' : '0' }} data-close="true" onClick={hide}>
      <div className={styles.modalContent}>

        <h2 className={styles.header}>{modalTitle ? modalTitle : "Default Modal Title"}</h2>
        <span className={styles.close} data-close="true">&times;</span>
        {children}
      </div>
    </div>
  )
}

export default Modal