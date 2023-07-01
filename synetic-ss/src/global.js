import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`


*,
*::before,
*::after {
  box-sizing: border-box;
  cursor: none;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
  background-color: black;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background-color: rgb(233,0,179);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
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
  //   background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
  //   url("https://images.unsplash.com/photo-1639353014154-8b9da8815d84?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587");
  // width:100%;
  // background-image: linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%);
  // background-image: linear-gradient(to top, #cc208e 0%, #6713d2 100%);
  // background-image: linear-gradient(to right, #243949 0%, #517fa4 100%);
  // background-image: linear-gradient(to top, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%);
  background-image: linear-gradient(to top, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%);
  // background-image: linear-gradient(-225deg, #FF3CAC 0%, #562B7C 52%, #2B86C5 100%);
  // background-image: linear-gradient(to top, #0250c5 0%, #d43f8d 100%);
  // background-image: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);
  // background-image: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 200vh;
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



/************ Banner Css ************/
.banner {
  margin-top: 0;
  margin-left 3rem;
  padding: 80px 0 190px 2em;
  background-image: url('./assets/img/banner-bg.png');
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
}
.banner .tagline {
  font-weight: 700;
  letter-spacing: 0.8px;
  padding: 8px 10px;
  background: linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-size: 20px;
  margin-bottom: 16px;
  display: inline-block;
}
.banner h1 {
  font-size: 65px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 1;
  margin-bottom: 20px;
  display: block;
}
.banner p {
  color: #B8B8B8;
  font-size: 18px;
  letter-spacing: 0.8px;
  line-height: 1.5em;
  width: 96%;
}
.banner button {
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  margin-top: 60px;
  letter-spacing: 0.8px;
  display: flex;
  align-items: center;
}
.banner button svg {
  font-size: 25px;
  margin-left: 10px;
  transition: 0.3s ease-in-out;
  line-height: 1;
}
.banner button:hover svg {
  margin-left: 25px;
}
.banner img {
   animation: updown 3s linear infinite;
   width:200rem;
   height:30rem;
   padding-left: 2rem;
  // border: red solid 5px;

}

@keyframes updown {
    0% {
        transform: translateY(-20px);
    }
    50% {
        transform: translateY(20px);
    }
    100% {
        transform: translateY(-20px);
    }
}
.txt-rotate > .wrap {
  border-right: 0.08em solid #666;
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

