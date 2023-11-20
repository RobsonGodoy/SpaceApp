import styled from "styled-components"
import Imagem from "../Galeria/Imagem"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 24px;
    left: 142px;
    width: 1156px;
    height: 740px;
    background-color: transparent;
`
const ButtonCloseModal = styled.button`
    position: static;
    width: 32px;
    height: 32px;
    top: 318px;
    right: 124px;
    font-size: 32px;
    background-color: transparent;
    border: none;
    color: #FFF;
`
const FormEstilizado = styled.form`
    position: absolute;
    left: 1024px;
    display: flex;
    justify-content: end;
`

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
    return (
        <>
            {foto && <>
                    <Overlay />
                    <DialogEstilizado open={!!foto} onClose={aoFechar}>
                        <FormEstilizado method="dialog">
                            <ButtonCloseModal>X</ButtonCloseModal>
                        </FormEstilizado>
                        <Imagem foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito}/>
                    </DialogEstilizado>
            </>}
        </>
    )
}

export default ModalZoom
