import styled from "styled-components";


// Import mediaqueries breakpoints
import size from "../../Breakpoints";


export const ContainerMenu = styled.section`

    width: 100%;
    height: 100vh;
    position: fixed;
    left: 5%;
    top: 0;
    background-color: rgba(173,79,151,0.5);
    z-index: 1000;
    transition: var(--transition);
    backdrop-filter: blur(7px);
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-102%)'};
    display: flex;


    .links-menu{
        width: 16%;
        height: 100%;
        position: relative;
        background-color: var(--white);
        transition: var(--transition2);
        transform: ${({open}) => open ? 'translateX(-2px)' : 'translateX(-100%)'};
        z-index: 20;
        box-shadow: var(--side-shadow);
        /* overflow-y: scroll; */


        .header-box-menu{
            width: 100%;
            height: 50%;
            padding: 40px 20px 20px 30px;
            position: relative;

            h1{
                font-size: var(--fz-xll);
                color: var(--black);
            }

            ul{
                width: 100%;
                height: auto;
                margin-top: 30px;
                list-style: none;
                position: relative;
                margin-bottom: 50px;

                .dropMenu{
                    display: flex;
                    justify-content: space-between;
                    font-weight: 700;
                    cursor: pointer;
                    font-size: var(--fz-lg);
                    margin-top: 25px;
                }

                a{
                        width: 100%;
                        font-size: var(--fz-lg);
                        text-decoration: none;
                        color: var(--black);

                        li{
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            padding-right: 30px;
                            margin-top: 32px;
                            transition: var(--transition);

                            &:hover{
                                color: var(--primary);

                            }

                        }
                }


            }

            .btn-signIn-menu{
                display: none;
                padding: 17px 25px;
                background-color: var(--primary);
                color: var(--white);
                text-decoration: none;
                border-radius: 8px;
                text-align: center;
            }
        }

        .footer-box-menu{
            width: 100%;
            height: 50%;
            display: flex;
            justify-content: flex-end;
            flex-direction: column;
            padding: 40px 20px 20px 30px;

            h1{
                font-size: var(--fz-xll);
                color: var(--black);
                margin-bottom: 20px;
                font-weight: 400;
            }

            p{
                margin-top: 15px;
                color: var(--navy);
                font-size: var(--fz-sm);

                strong{
                    color: var(--black);
                    margin-right: 5px;
                }
            }
        }

        .Close-section{
            margin-top: 35px;
             
            button{
                background-color: var(--white);
                border: none;
                font-size: var(--fz-md);
                color: var(--primary);
                padding: 5px;
                cursor: pointer;
            }
        }
    }




/* Mobile breakpoint */
@media only screen and (max-width: ${size.xs}){

        width: 100%;
        left: 0;
        top: 5%;
        transform: none;
        transition: var(--transition-menu-bg);
        opacity: ${({open}) => open ? '1' : '0'};

        .links-menu{

            width: 80%;
            transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
            z-index: 7;

            .header-box-menu{
                height: 55%;
                padding: 70px 20px 20px 30px;
                overflow: hidden;

                h1{
                    font-size: var(--fz-xll);
                    color: var(--black);
                }

                ul{
                    width: 100%;
                    height: auto;
                    margin-top: 30px;
                    list-style: none;
                    position: relative;
                    margin-bottom: 40px;

                    a{
                            width: 100%;
                            font-size: var(--fz-lg);
                            text-decoration: none;
                            color: var(--black);

                            li{
                                width: 100%;
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                                padding-right: 30px;
                                margin-top: 25px;
                                transition: var(--transition);

                                &:hover{
                                    color: var(--primary);

                                }

                            }
                    }


                }

                .btn-signIn-menu{
                    width: 200px;
                    display: flex !important;
                    padding: 15px 20px;
                    align-items: center;
                    justify-content: center;

                        .ico{
                            margin-top: -5px;
                            margin-left: 10px;
                            font-size: 19px;
                        }
                }
            }

        .footer-box-menu{
            width: 100%;
            height: 45%;
            display: flex;
            justify-content: stretch;
            flex-direction: column;
            padding: 40px 50px 20px 30px;

            h1{
                font-size: var(--fz-xll);
                color: var(--black);
                margin-bottom: 20px;
                font-weight: 400;
            }

            p{
                margin-top: 15px;
                color: var(--navy);
                font-size: var(--fz-sm);

                strong{
                    color: var(--black);
                    margin-right: 5px;
                }
            }
        }

    }
}

/* Mobile breakpoint */
@media (min-width: ${size.minMd}) and (max-width: ${size.md}){

    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};


    .links-menu{
        width: 30%;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};


        .header-box-menu{
            padding: 40px 20px 20px 30px;

            h1{
                margin-top: 120px;
            }

            ul{
                width: 100%;
                height: auto;
                margin-top: 30px;
                list-style: none;
                position: relative;
                margin-bottom: 50px;

                .dropMenu{
                    display: flex;
                    justify-content: space-between;
                    font-weight: 700;
                    cursor: pointer;
                    font-size: var(--fz-lg);
                    margin-top: 25px;
                }

                a{
                        width: 100%;
                        font-size: var(--fz-lg);
                        text-decoration: none;
                        color: var(--black);

                        li{
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            padding-right: 30px;
                            margin-top: 32px;
                            transition: var(--transition);

                            &:hover{
                                color: var(--primary);

                            }

                        }
                }


            }

            .btn-signIn-menu{
                display: none;
                padding: 17px 25px;
                background-color: var(--primary);
                color: var(--white);
                text-decoration: none;
                border-radius: 8px;
                text-align: center;
            }
        }
    }
}





`

// Menu product drop
export const ProductMenu = styled.div`

        width: 16%;
        height: 100%;
        position: relative;
        background-color: var(--white);
        transition: var(--transition2);
        transform: ${({open}) => open ? 'translateX(-200%)' : 'translateX(-200%)'};
        z-index: 10;
        box-shadow: var(--side-shadow);
        /* overflow-y: scroll; */
        margin-left: -3px;
        padding: 45px 20px 20px 30px;
        transform: ${({product}) => product ? 'translateX(0)' : 'translateX(-200%)'};


        h1{
                font-size: var(--fz-xll);
                color: var(--black);
            }

            ul{
                width: 100%;
                height: auto;
                margin-top: 30px;
                list-style: none;
                position: relative;
                margin-bottom: 50px;

                .dropMenu{
                    display: flex;
                    justify-content: space-between;
                    font-weight: 700;
                    cursor: pointer;
                    font-size: var(--fz-lg);
                    margin-top: 25px;
                }

                a{
                        font-size: var(--fz-lg);
                        text-decoration: none;
                        color: var(--black);

                        li{
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            padding-right: 30px;
                            margin-top: 32px;
                            transition: var(--transition);

                            &:hover{
                                color: var(--primary);

                            }

                        }
                }


            }
        
        Button{
            background-color: var(--white);
            border: none;
            color: var(--primary);
            padding: 10px 0;
            font-size: var(--fz-md);
            cursor: pointer;
        }





 /* Mobile breakpoint */
 @media only screen and (max-width: ${size.xs}){

        width: 90%;
        position: fixed;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-200%)'};
        z-index: 9;
        left: 0;
        margin-left: 0;
        padding: 75px 20px 20px 30px;
        transform: ${({product}) => product ? 'translateX(0)' : 'translateX(-200%)'};

 }

/* Mobile breakpoint */
@media (min-width: ${size.minMd}) and (max-width: ${size.md}){

        width: 30%;
        position: fixed;
        left: 30%;
        transform: ${({open}) => open ? 'translateX(-200%)' : 'translateX(-200%)'};
        margin-left: -3px;
        transform: ${({product}) => product ? 'translateX(0)' : 'translateX(-200%)'};


            h1{
                margin-top: 115px;
            }

}

`



export const AboutMenu = styled.div`

        width: 16%;
        height: 100%;
        position: relative;
        background-color: var(--white);
        transition: var(--transition2);
        transform: ${({open}) => open ? 'translateX(-100%)' : 'translateX(-1000%)'};
        z-index: 9;
        box-shadow: var(--side-shadow);
        margin-left: -3px;
        padding: 45px 20px 20px 30px;
        transform: ${({about}) => about ? 'translateX(-100%)' : 'translateX(-300%)'};


        h1{
                font-size: var(--fz-xll);
                color: var(--black);
            }

            ul{
                width: 100%;
                height: auto;
                margin-top: 30px;
                list-style: none;
                position: relative;
                margin-bottom: 50px;

                a{
                        font-size: var(--fz-lg);
                        text-decoration: none;
                        color: var(--black);

                        li{
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            padding-right: 30px;
                            margin-top: 32px;
                            transition: var(--transition);

                            &:hover{
                                color: var(--primary);

                            }

                        }
                }


            }
        
        Button{
            background-color: var(--white);
            border: none;
            color: var(--primary);
            padding: 10px 0;
            font-size: var(--fz-md);
            cursor: pointer;
        }



/* Mobile breakpoint */
@media only screen and (max-width: ${size.xs}){

            width: 90%;
            position: fixed;
            transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-200%)'};
            z-index: 10;
            left: 0;
            margin-left: 0;
            padding: 75px 20px 20px 30px;
            transform: ${({about}) => about ? 'translateX(0)' : 'translateX(-200%)'};

}

/* Tablet breakpoint */
@media (min-width: ${size.minMd}) and (max-width: ${size.md}){
    
        width: 30%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 60%;
        transform: ${({open}) => open ? 'translateX(-2000%)' : 'translateX(-1000%)'};
        transform: ${({about}) => about ? 'translateX(-100%)' : 'translateX(-300%)'};

        h1{
            margin-top: 115px;
        }

}

`





// Third-box-menu
export const ThirdBoxMenu = styled.div`

        width: 16%;
        height: 100%;
        position: relative;
        background-color: var(--white);
        transition: var(--transition3);
        transform: ${({open}) => open ? 'translateX(-300%)' : 'translateX(-300%)'};
        z-index: 0;
        box-shadow: var(--side-shadow);
        margin-left: -15.9%;
        padding: 45px 20px 20px 30px;
        transform: ${({cardmenu}) => cardmenu ? 'translateX(0)' : 'translateX(-300%)'};

        h1{
                font-size: var(--fz-xll);
                color: var(--black);
            }

            ul{
                width: 100%;
                height: auto;
                margin-top: 30px;
                list-style: none;
                position: relative;
                margin-bottom: 50px;

                .dropMenu{
                    display: flex;
                    justify-content: space-between;
                    font-weight: 700;
                    cursor: pointer;
                    font-size: var(--fz-lg);
                    margin-top: 25px;
                }

                a{
                        font-size: var(--fz-lg);
                        text-decoration: none;
                        color: var(--black);

                        li{
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            padding-right: 30px;
                            margin-top: 32px;
                            transition: var(--transition);

                            &:hover{
                                color: var(--primary);

                            }

                        }
                }


            }
        
        Button{
            background-color: var(--white);
            border: none;
            color: var(--primary);
            padding: 10px 0;
            font-size: var(--fz-md);
            cursor: pointer;
        }



/* Mobile breakpoint */
@media only screen and (max-width: ${size.xs}){

            width: 90%;
            position: fixed;
            transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-300%)'};
            z-index: 20;
            left: 0;
            margin-left: 0;
            padding: 75px 20px 20px 30px;
            transform: ${({cardmenu}) => cardmenu ? 'translateX(0)' : 'translateX(-300%)'};

}

/* Tablet breakpoint */
@media (min-width: ${size.minMd}) and (max-width: ${size.md}){

        width: 30%;
        position: fixed;
        left: 59%;
        transform: ${({open}) => open ? 'translateX(-1000%)' : 'translateX(-1000%)'};
        z-index: 0;
        margin-left: 0;
        padding: 45px 20px 20px 30px;
        transform: ${({cardmenu}) => cardmenu ? 'translateX(0)' : 'translateX(-3000%)'};

        h1{
            margin-top: 115px;
        }

}

`