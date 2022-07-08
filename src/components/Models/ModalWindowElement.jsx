import styled from 'styled-components';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "游明朝体","YuMincho";
    z-index: 1000;
`

export const OverlayContent = styled.div`
    z-index: 100;
    position: relative;
    max-width: 600px;
    width: 100%;
    height: 50%;
    padding: 8vh 5vw;
    background: #202437;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
export const OverlayCloseBtn = styled.button`
    color: #dbd9bd;
    font-size: 28px;
    padding: 20px;
    position: absolute;
    outline: none;
    border: none;
    background: transparent;
    transition: .6s all ease-in;
    top: 0;
    left: 0;
    cursor: pointer;
    &:hover {
        color: #fff;
    }
`

export const OverlayImg = styled.div`
    width: 120px;
    height: 100px;
`

export const OverlayText = styled.h2`
    font-size: 42px;
    text-align: center;
    color: #dbd9bd;
    margin-bottom: 24px;
`

export const OverlayMsg = styled.p`
    margin-bottom: 24px;
    color: #dbd9bd;
    font-size: 16px;

`

export const OverlayIcon = styled.div`
    max-width: 200px;
    margin: 0 auto;
`