import styled from "styled-components";


// Import file media breakpoint
import size from '../Breakpoints'


export const MainSide = styled.div`

    width: 5%;
    height: 100vh;
    position: fixed;
    left: -1px;
    top: 0;
    background-color: var(--white);
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    box-shadow: var(--side-shadow);
    z-index: 1000 !important;

        /* Humbourger menu box */
        .Humbourger{
            width: 100%;
            height: 30%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            padding: 35px 20px;

            .humbourger-menu{
                position: relative;
                width: 40px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                padding: 5px;
                z-index: 960 !important;

                span{
                    font-weight: 700;
                    color: var(--black);
                    margin-top: 10px;
                    font-size: var(--fz-md);
                }
            }

        }


        /* Logo in the middle box*/
        .Logo-center{
            width: 100%;
            height: 30%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding: 50px 0;

            .log-nav-mob{
                display: none !important;
                padding: 10px 15px;
                text-align: center;
                margin-right: 5px;
                text-decoration: none;
                font-weight: 700;
                color: var(--black);
                transition: var(--transition);
                display: flex;
                justify-content: center;
                align-items: center;

                &:hover{
                    background-color: var(--rgba-btn-hero);
                }

            }

            img{
                width: 72px;
                height: auto;
                object-fit: cover;
            }
        }

        /* Social icons box */

        .Social-icons{
            width: 100%;
            height: 40%;
            background-color: var(--primary);
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            margin-left: 0px;

            .divider{
                width: 1px;
                height: 75px;
                background-color: var(--white);
            }

            a{
                padding: 8px;
                background-color: var(--white);
                text-align: center;
                text-decoration: none;
                border-radius: var(--radius1);
                display: flex;
                align-items: center;
                font-size: 15px;
                color: var(--primary);
                margin-top: 20px;
                margin-left: -15px;
            }
        }



        /* Mobile breakpoint */
        @media only screen and (max-width: ${size.xs}){

                background-color: var(--white);
                width: 100%;
                height: 10vh;
                left: 0;
                top: -1px;
                border: none;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: row;
                box-shadow: var(--side-shadow);
                padding: 0 12px !important;
                overflow: hidden;

        
                /* Humbourger menu box */
                .Humbourger{
                    width: auto;
                    height: auto;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: row;
                    padding: 15px;

                    .humbourger-menu{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        padding: 0;

                        img{
                            width: 25px;
                            height: auto;
                            object-fit: cover;
                        }

                        span{
                            display: none !important;
                        }
                    }

                }

                /* Logo in the middle box*/
                .Logo-center{
                    width: 30%;
                    height: auto;
                    align-items: center;
                    justify-content: flex-end;
                    padding: 0;

                    .log-nav-mob{
                        display: block !important;
                        font-size: 16px !important;
                    }

                    img{
                        width: 60px !important;
                        height: auto;
                        object-fit: cover;
                    }
                }


                /* Social icons box */
                .Social-icons{
                    display: none;
                }



}

        /* Mobile breakpoint */
        @media (min-width: ${size.minMd}) and (max-width: ${size.md}){

            background-color: var(--white);
            width: 100%;
            height: 10vh;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            padding: 0 30px;


            /* Humbourger menu box */
            .Humbourger{

                width: auto;
                height: auto;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: row;
                padding: 15px;

                .humbourger-menu{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 0;

                    span{
                        display: block;
                        margin-top: 5px;
                    }
                }

            }

            /* Logo in the middle box*/
            .Logo-center{

                width: 30%;
                height: auto;
                align-items: center;
                justify-content: flex-end;
                padding: 0;

                .log-nav-mob{
                    display: block !important;
                    font-size: 19px;
                }

                img{
                    width: 75px;
                    height: auto;
                    object-fit: cover;
                }
            }


            /* Social icons box */
            .Social-icons{
                display: none;
            }



}

`
