import styled from "styled-components";

export const Overlay = styled.div`
  left: 0;
  top: 0;
  background: rgba(0,0,0,0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background-color: #fff;
  width: 480px;
  padding: 32px;
  display: flex;
  border-radius: 8px;
  align-items: center;
  justify-content: center;

    button {
      border: 0;
      background: transparent;
    }
  `;

