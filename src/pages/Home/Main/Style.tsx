import Home from "..";

import styled from "styled-components";


const Style = styled.span`


    :root {
        --pattern-padding: 1%;
    }

    width:100%;
    height: 100%;
    main {
        display:flex;
        flex-direction: column;
        width:100%;
        box-sizing: border-box;
        gap: 8px;
        align-items: center;
        
        section:nth-child(1) {
            box-sizing: border-box;
            width:100%;
            display:flex;
            justify-content: flex-end;
            align-items: center;
            position:relative;
            min-height: 100vh;
            flex-direction:column;
            /*padding: 0 0 50px 0;*/
            position:relative;
           
            picture {
                position:absolute;
                width:100vw;
                height: 100vh;
                background-color: blue;
                box-sizing: border-box;
                display:flex;
                justify-content: center;
                align-items: center;
                overflow:hidden;
                margin: 0 0;
                padding: 0;

                img {
                    max-width:100%;
                }
            }

            #btns {
              
                box-sizing: border-box;
                position:absolute;
                display:flex;
                justify-content: center;
                align-items: center;
                margin: 0 0 0 0;
                opacity: 1;
                /*background-color: rgba(255,255,255, 1);*/
                z-indez: 190;
                
                :hover {
                    
                    -webkit-transition: all 1.5s 0s ease;
                    -moz-transition: all1.5s 0s ease;
                    -o-transition: all 1.5s 0s ease;
                    transition: all 1.5s 0s ease;
                  
                }

                button {
                    font-size:12px;
                    height: 35px;
                    padding:0 12px;
                    background-color: rgba(255,255,255, 0.1);
                    box-shadow: 10px 10px 55px -16px rgba(0,0,0,0.3);
                    -webkit-box-shadow: 10px 10px 55px -16px rgba(0,0,0,0.3);
                    -moz-box-shadow: 10px 10px 55px -16px rgba(0,0,0,0.3);
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    border: 2px solid rgba(255,255,255, 0.4);
                    color: white;
                    margin: 0 6px 0 6px;

                    span {
                        background-color: rgba(255,255,255, 0.1);
                        border-radius: 50px;
                        margin:0;
                        display: none;

                        svg {
                            transform: scale(35%);
                            margin:0;
                        }
                        
                    }
                }

                button:nth-child(1) {
                   border-radius: 50px 0 0 50px;
                }

                button:nth-child(3) {
                    border-radius: 0 50px 50px 0;
                 }
            }



            span:nth-child(2) {
                width:100vw;
                height: 200px;
                box-sizing: border-box;
          
                display:flex;
                justify-content: center;
                align-items: center;
                margin: 0 0 0 0;
                opacity: 1;
                background: linear-gradient(0deg, rgba(45,17,5, 1) 0%, rgba(255,255,255,0) 100%);
                background: linear-gradient(0deg, rgba(10,1,5, 1) 0%, rgba(255,255,255,0) 100%);

                :hover {
                    background: rgba(1,1,1,0.1);
                    background: linear-gradient(0deg, rgba(45,17,5, 1) 0%, rgba(255,255,255,0) 100%);
                    height: 130px;
                    -webkit-transition: all 0.5s 0s ease;
                    -moz-transition: all 0.5s 0s ease;
                    -o-transition: all 0.5s 0s ease;
                    transition: all 0.5s 0s ease;
                  
                }


                /*
                button {
                    font-size:12px;
                    height: 35px;
                    padding:0 12px;
                    background-color: rgba(255,255,255, 0.1);
                    box-shadow: 10px 10px 55px -16px rgba(0,0,0,0.3);
                    -webkit-box-shadow: 10px 10px 55px -16px rgba(0,0,0,0.3);
                    -moz-box-shadow: 10px 10px 55px -16px rgba(0,0,0,0.3);
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    border: 2px solid rgba(255,255,255, 0.4);
                    color: white;
                    margin: 0 6px 0 6px;

                    span {
                        background-color: rgba(255,255,255, 0.1);
                        border-radius: 50px;
                        margin:0;
                        display: none;

                        svg {
                            transform: scale(35%);
                            margin:0;
                        }
                        
                    }
                }
                

                button:nth-child(1) {
                   border-radius: 50px 0 0 50px;
                }

                button:nth-child(3) {
                    border-radius: 0 50px 50px 0;
                }
                */
            }
        }

        section:nth-child(2) {
          
            width:100vw;
            height: calc(100vh + 30vh);
            display: flex;
            flex-direction:column;
            justify-content: center;
            /*background-image: url("https://img.freepik.com/fotos-gratis/resumo-luxo-simples-desfocar-gradiente-de-cinza-e-preto-usado-como-parede-de-estudio-de-fundo-para-exibir-seus-produtos_1258-63637.jpg?w=2000");*/
            padding: 0 calc(1280px * 0.063);
             box-sizing: border-box;
            background-color:#1b2065;
            color: rgba(235,235,235,1);
            font-size: 16px;
            
            h2 {
                color: green;
                
            }

            span:nth-child(1) {
               
            }

            span:nth-child(2), .subtitle {
                font-size: 32px;
            }
        }

        section:nth-child(3) {
          
            width:100vw;
            height: calc(100vh + 30vh);
            display: flex;
            flex-direction:column;
            justify-content: center;
            background-image: url("https://img.freepik.com/fotos-gratis/resumo-luxo-simples-desfocar-gradiente-de-cinza-e-preto-usado-como-parede-de-estudio-de-fundo-para-exibir-seus-produtos_1258-63637.jpg?w=2000");
            padding: 0 calc(1280px * 0.063);
             box-sizing: border-box;
          
          

            h2 {
                color: green;
                font-size:18px;
            }

            span:nth-child(1) {
                font-size:20px;

            }

            span:nth-child(2) {
                font-size:16px;

            }
        }

        section:nth-child(4) {
          
            width:100vw;
            height: calc(100vh + 30vh);
            display: flex;
            flex-direction:column;
            justify-content: center;
            background-color:rgba(18, 10, 9);
            color: rgba(235,235,235,1);
            padding: 0 calc(1280px * 0.063);
             box-sizing: border-box;
          
          

            h2 {
                color: green;
                font-size:18px;
            }

            span:nth-child(1) {
                font-size:20px;

            }

            span:nth-child(2) {
                font-size:16px;

            }
        }

        section:nth-child(5) {
          
            width:100vw;
            height: calc(100vh + 30vh);
            display: flex;
            flex-direction:column;
            justify-content: center;
            background-color:#1b2065;
            color: rgba(235,235,235,1);
            padding: 0 calc(1280px * 0.063);
             box-sizing: border-box;
          
          

            h2 {
                color: green;
                font-size:18px;
            }

            span:nth-child(1) {
                font-size:20px;

            }

            span:nth-child(2) {
                font-size:16px;

            }
            /*

            span:nth-child(5) {
                width:calc(70vh / 3);
                max-width: 100vw;

            }
            */
        }
    }

`;

export default Style;