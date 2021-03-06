import styled from "styled-components";

export const Form = styled.form`

    margin-bottom: 32px;

  
    button {
        padding: 16px;
        border: none;
        border-radius: 0 4px 4px 0;
        cursor: pointer;
        outline: none;
        background: linear-gradient(
            90deg,
            rgba(93, 12, 255, 1) 0%,
            rgba(155, 0, 250, 1) 100%
        );

        &:hover{
            background: linear-gradient(
                90deg,
                rgba(93, 12, 255, .7) 0%,
                rgba(155, 0, 250, .7) 100%
            );
        }
        color: #fff;
        text-transform: capitalize;
    }

    input {
        
        padding: 14px 32px 14px 16px;
        border-radius: 4px 0 0 4px;
        border: 2px solid rgba(93, 12, 255, 1);
        outline: none;
        width: 320px;
        background: transparent;
        color: #fff;

        &:hover{
            border: 2px solid rgba(93, 12, 255, 0.7);
        }

    }

`