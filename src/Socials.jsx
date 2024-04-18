import { useRef } from "react"
import Modal from "./Modal/index.jsx"

const Socials = () => {
    const dialog = useRef()

    const showModal = () => dialog.current.open()

    return (
        <>
            <Modal ref={dialog} text="Node Leaf" />
            <button onClick={showModal}>Show Modal</button>
            <p>
                <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/kouqhar/">Connect with Duniya Naphtali</a>
            </p>
        </>
    )
}

export default Socials