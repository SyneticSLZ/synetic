import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`


*,
*::before,
*::after {
  box-sizing: border-box;
  cursor: none;
}



:root{
  --ff-primary: 'Audiowide';
  --ff-secondary: 'DM Mono', monospace;
  --ff-tertiary: 'Inter', sans-serif;
  
  --fw-reg: 300;
  --fw-bold: 900;
  
  --clr-light: #fff;
  --clr-dark: #101010;
  --clr-accent: #E900B3;
  --clr-accent_second:#0099CA;
  
  --fs-h1: 2.5rem;
  --fs-h2: 2.25rem;
  --fs-h3: 1.25rem;
  --fs-body: 1rem;
  
  --bs: 0.25em 0.25em 1.75em white,
        0.125em 0.125em 1.25em #E900B3;

  
        --bs-dark: 0.25em 0.25em 1.75em black,
     
}


  :root{
    --fs-h1: 4.5rem;
        --fs-h2: 3.75rem;
        --fs-h3: 1.5rem;
        --fs-body: 1.125rem;
       
  }
 
  body {
    margin: 0;
    padding:0;
    font-family:var(--ff-tertiary);
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
    url("https://images.unsplash.com/photo-1639353014154-8b9da8815d84?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587");
  width:100%;
  background-repeat: no-repeat;
  background-attachment: fixed;

  }





img {
    display: block;

   
}

strong { font-weight: var(--fw-bold) }



  

@keyframes wipe-enter {
	0% {
		transform: scale(0, .025);
	}
	100% {
		transform: scale(1, 1);
	}
}

@media (prefers-reduced-motion: no-preference) {
  .div-animation {
    animation: wipe-enter 5s 1;
  }
}

.reveal{
  position: relative;
  transform: translateY(150px);
  opacity: 0.25;
  transition: 1s all ease;
}

.reveal.active{
  transform: translateY(0);
  opacity: 1;
}

`

 


// html { height: 100% }

// body { min-height: 100% }.

// html, body {
//     margin: 0;
//     padding: 0;
//   }
//   *, *::after, *::before {
//     box-sizing: border-box;
//   }
//   body {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background: ${({ theme }) => theme.primaryDark};
//     color: ${({ theme }) => theme.primaryLight};
//     height: 100vh;
//     text-rendering: optimizeLegibility;
//     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
//   }
//   h1 {
//     font-size: 2rem;
//     text-align: center;
//     text-transform: uppercase;
//   }
//   img {
//     border-radius: 5px;
//     height: auto;
//     width: 10rem;
//   }
//   div {
//     text-align: center;
//   }
//   small {
//     display: block;
//   }
//   a {
//     color: ${({ theme }) => theme.primaryHover};
//     text-decoration: none;
//   }
//   