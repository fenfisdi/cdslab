import styled from 'styled-components'

export const CharterContainer = styled.article`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props => props.justifyContent};
    flex-direction: ${props => props.direction};
    height:${props => props.height};
`
export const CharterIcon = styled.div`
        margin: 5px;
        border: 0px solid #ccc;
        float: left;
        width: 180px        
        & > img{
            width: 100%;
            height: auto;
        }
`

export const CharterBody = styled.div`
    width:auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
`