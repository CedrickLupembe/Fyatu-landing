import styled from "styled-components";

// Media frames
import size from "../../Breakpoints";



export const ContainerDev = styled.section`

    width: 100%;
    height: auto;
    padding: 20px 0 0 0;

    .Content-dev{
        width: 95%;
        height: auto;
        margin-left: 5%;
        position: relative;

        .nav-dev-page{
                width: 100%;
                height: 10%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                position: relative;
                padding: 0 50px;

                .pagination{
                        width: auto;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        /* background-color: red; */
                        padding: 5px 10px;

                        .back{
                            width: 69px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            text-decoration: none;
                            font-size: var(--fz-lg);
                            color: var(--primary);

                            .icon{
                                margin-top: -5px;
                                margin-right: 5px;
                            }
                        }

                        .Current{
                            width: 120px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            text-decoration: none;
                            font-size: var(--fz-lg);
                            color: var(--navy);
                            margin-left: 3px;
                            margin-top: 2px;

                            .icon{
                                margin-top: -5px;
                                margin-right: 5px;
                            }
                        }
                    }

                ul{
                    list-style: none;
                    margin: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    li{
                        margin-left: 20px;
                        display: flex;
                        justify-content: center;

                        a{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            color: var(--white);
                            text-decoration: none;
                            font-size: var(--fz-lg);
                        }

                        .login{
                            padding: 15px 20px;
                            transition: var(--transition);
                            font-weight: 700;
                            color: var(--black);

                            &:hover{
                                background-color: var(--rgba-btn-hero);
                            }
                        }
                        .sign-up{
                            padding: 15px 20px;
                            background-color: var(--primary);
                            border-radius: 8px;
                            display: flex;
                            align-items: center;
                            justify-content: center;

                            .ico{
                                margin-top: -4px;
                                margin-left: 8px;
                            }
                        }
                    }
                }
        }

        .header-box-dev{
            width: 100%;
            height: auto;
            margin-top: 50px;
            padding: 50px 110px;
            
            .title-one{
                width: 750px;

                h1{
                    font-size: var(--fz-xxll);

                    span{
                        color: var(--primary);
                    }
                }
            }
        }

        .content-wrapper-dev{
            width: 100%;
            height: auto;
            padding: 20px 0;
            padding: 50px 100px 50px 110px;

            p{
                line-height: 33px;
                font-size: var(--fz-lg);
                color: var(--navy);
            }

            ul{
                margin-top: 30px;
                line-height: 24px;
                font-size: var(--fz-lg);
                list-style: none;
                color: var(--navy);

                li{
                    margin-top: 40px;
                    position: relative;                    
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    /* margin-left: 20px; */

                    .beforeIcon{
                        margin-top: -6px;
                        margin-right: 10px;
                        color: var(--primary);
                    }
                }
            }

            .Narration-box{
                width: 100%;
                height: auto;
                background-color: black;
                margin-top: 30px;
                background-color: rgba(173,79,151,0.2);
                padding: 60px 200px 50px 30px;

                p{
                    color: var(--primary);
                    margin-top: 15px;
                }
            }
        }
    }



      /* Mobile breakpoint */
      @media only screen and (max-width: ${size.xs}){

        

      }

`