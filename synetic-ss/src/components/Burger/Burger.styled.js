import styled from 'styled-components';

export const StyledBurger = styled.button`
position: absolute;
right: 1rem;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 2rem;
height: 2rem;
background:transparent;
border: none;
cursor: pointer;
padding: 0;
z-index: 10;



span {
  width: 2rem;
  height: 0.25rem;
  background: radial-gradient(circle, rgba(233,0,179,1) 0%, rgba(0,153,202,1) 100%);
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;

  :first-child {
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
  }

  :nth-child(2) {
    opacity: ${({ open }) => open ? '0' : '1'};
    transform: ${({ open }) => open ? 'translateX(-40px)' : 'translateX(0)'};
  }

  :nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
  }
}

@media(min-width:800px){
  display:block;
}
`;

function handleResize() {
  const width = window.innerWidth;

  if (width < 700) {
    styled.button`display: none;`;
  } else {
    styled.button`display: block;`;
  }
}

// Call handleResize() once on load to set the initial styles.
handleResize();

// Call handleResize() every time the window is resized.
window.addEventListener('resize', handleResize);


/* 
.burger{
  position: absolute;
 
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
 
}

  .burger:focus {
    outline: none;
  }
  
  .burger div .closed{
    width: 2rem;
    height: 0.25rem;
    background: radial-gradient(circle, rgba(233,0,179,1) 0%, rgba(0,153,202,1) 100%);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
   
  }
   */
 


