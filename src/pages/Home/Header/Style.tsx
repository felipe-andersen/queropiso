import styled from "styled-components";

const Style = styled.span`
    width: 100vw;
    box-sizing:border-box;
    height: 250px;
    position: sticky;
    top: 0px;
    z-index: 140;
   
    margin: -250px 0 0 -17px;
    padding:0;
   
    display: flex;
    justify-content: center;
    
    

    background: linear-gradient(180deg, rgba(45,17,5, 1) 0%, rgba(255,255,255,0) 100%);
    background: linear-gradient(180deg, rgba(10,1,5, 1) 0%, rgba(255,255,255,0) 100%);
    background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(29,10,1,0.5914740896358543) 31%, rgba(29,10,1,0.8519782913165266) 50%, rgba(19,5,0,1) 100%);
    /*background: linear-gradient(180deg, rgba(25,17,5, 1) 0%, rgba(255,255,255,0) 100%);*/

   

    header {

        height: 120px;
        width: 100%;
        max-width: 1280px;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing:border-box;
  
       
        div:nth-child(1), #img_button {
            box-sizing:border-box;
            width: calc(38px * 6);
            /*max-width: calc(38px * 10);*/
            display: flex;
            justify-content: center; /*flex-start || center*/
            align-items: center;
            background-color: rgba(255,0,0,0.3);
            overflow: hidden;
 
      

            span {
                width: 30px;
                min-width: 30px;
                height: 8px;
                border-radius: 50px;
                background-color: rgba(255,0,255,0.3);
                margin: 0 4px 0 4px;
                margin: 0px;
                margin: 0 4px 0 4px;
            }

            span:nth-child(1) {
                margin-left: 19px;
                margin: 0 4px 0 4px;
                margin-left: -34px;
            }

            span:nth-child(25) {
                width: 55px;
                height: 10px;
                background-color: rgba(255,0,255,1);
            }
        }
        
   
   
        nav {
            box-sizing:border-box;
            width: 100%;
            display: none;
            justify-content: space-between;
            align-items: center;
            heigth: 100%;

            span {
        
                display: flex;
                /*gap: 8px;*/
                box-sizing:border-box;
                margin: 0 0 0 24px;
                a {
                    color: white;
                    height: 40px;
                    display: flex;
                    justify-content:  center;
                    padding: 0 12px;
                    align-items: center;
                    align-items: center;
                    background-color: rgba(50,50,50, 1);
                    border-radius: 3px;
                    margin: 0 4px;
                    font-weight: 600;
                    border-bottom: 2px  white;
                    font-size: 14px;

                    :hover {
                        background-color: rgb(21, 24, 66);
                        -webkit-transition: all 0.5s 0s ease;
                        -moz-transition: all 0.5s 0s ease;
                        -o-transition: all 0.5s 0s ease;
                        transition: all 0.5s 0s ease;
    
                    }
                }

                button {
                    height: 50px;
                    padding: 0 24px;
                    background-color: orange;
                    width: 200px;
                    margin: 8px;
                    color: white;
                    
                    
                }
            }

            span:nth-child(1) a {
                width: 200px;
                height: 120px;
                padding: 0;
                background-color: transparent;
                align-items: center;
                i {
                    svg {
                        transform: scale(7%);
                       
                    }
                }

            }

            span:nth-child(3) button {
                margin: 0 24px 0 0px;
                display: flex;
                justify-content: space-between;
                align-items: center;
          

                :hover {
                    transform: scale(110%);
                 
                    -webkit-transition: all 0.5s 0s ease;
                    -moz-transition: all 0.5s 0s ease;
                    -o-transition: all 0.5s 0s ease;
                    transition: all 0.5s 0s ease;


                    span:nth-child(2) {
                        display: none;
                        svg {
                           
                        }
                    }
   
                    span:nth-child(3)  {
                        display: flex;
                        justify-content:  center;
                        align-items: center;

                        svg {
                           
                        }
                    }
                }

                span:nth-child(2) {
                    display: flex;

                    svg {
                        height: 25px;
                        width: 25px;
                        fill: white;
                        stroke: white;
                        
                    }
                }

                span:nth-child(3)  {
                    display: none;
                    height: 30px;
                    width: 30px;
                    background-color: transparent;
                    margin: 0 -7px 0 0px;
                    border-radius: 50px;

                    svg {
                        transform: scale(50%);
                        fill: white;
                        stroke: white;
                        margin: 0 0 0 -3px;
                        
                        
                    }
                }
            }

            

        }   

    }

`;

export default Style