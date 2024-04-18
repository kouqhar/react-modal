import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";

import styles from "./styles/styles.module.css"

const Modal = forwardRef(function Modal({ text }, ref) {
    const [modalText, setModalText] = useState('')
    const dialog = useRef();
    const ModalTextRef = useRef()

    function showModalText() {
        let inputValue = ModalTextRef.current.value

        // Validation and Sanitization
        if (typeof inputValue === "string") {
            setModalText(inputValue.toString())
            ModalTextRef.current.value = ""
        } else return
    }

    // Exposing component APIs via the useImperativeHandle Hook
    // The method open is bound to the native showModal()
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    })

    return createPortal(
        <dialog ref={dialog} className={styles.dialog_modal}>
            <p>Content for your modal goes in here.</p>
            <p>You can also recieve props <b>{text}</b></p>

            <div className={styles.display_text}>
                {text.trim().length > 1 && <p>{modalText}</p>}
            </div>

            <input
                ref={ModalTextRef}
                placeholder="Enter text you want to be show . . ." />

            <div className={styles.action_btn}>
                <form method="dialog">
                    <button>Close</button>
                </form>
                <button onClick={showModalText}>Show Text</button>
            </div>
        </dialog>,
        document.getElementById("react-modal"))
})

export default Modal