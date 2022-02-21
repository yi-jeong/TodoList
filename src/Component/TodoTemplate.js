import React from "react";
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    display:flex;
    flex-direction: column;
    width: 90%;
    max-width:720px;
    height: 80vh;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-55%);
    background:#fff;
    border-radius:15px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.04);
    margin:0 auto;
`

function TodoTemplate({children}){
    return (
        <TodoTemplateBlock>
            {children}
        </TodoTemplateBlock>
    );
}

export default TodoTemplate;