import styled from "styled-components";

const media = {
    mobile: `@media(max-width: 900px)`,
};

export const ComentsContainer = styled.div`
width: 80vw;

h3{
    font-size: 2rem;
}
`
export const Box = styled.div`

 display: flex; 
 justify-content: space-between;
 margin-bottom: 2rem;
 gap: 1vw;
 

 ${media.mobile} {
    flex-direction: column;
 }
 
`
export const Datas = styled.div`
padding-top:  1.2rem;
`

export const Text = styled.div`
width: 100%;
p{
    text-align: justify;
    width: 90%;

}

`