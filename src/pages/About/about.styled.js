import styled from "styled-components";

import size from "../../Breakpoints";

// Image bg
import bg from './images/bg-banner.jpg'


export const ContainerAbout = styled.section`

    width: 100%;
    height: auto;
    padding: 20px 0 0 0;


    .Wrapper-content-about{
        width: 95%;
        height: 100vh;
        margin-left: 5%;
        position: relative;

        .nav-about-page{
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

        .Container-story-content{
            width: 100%;
            height: auto;
            /* background-color: purple; */
            margin-top: 35px;
            padding: 40px 50px 40px 70px;

            h1{
                font-size: var(--fz-xxl);
            }

            .banner-image{
                width: 100%;
                height: 600px;
                background-color: white;
                margin-top: 20px;
                background: url(${bg});
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
            }

            .Content-story{
                width: 100%;
                height: auto;
                margin-top: 35px;
                line-height: 24px;
                padding-right: 50px;
                margin-bottom: 20px;

                p{
                    color: var(--navy);
                    font-size: var(--fz-lg);
                    line-height: 30px;
                    margin-top: 25px;

                    span{
                        color: var(--navyTwo);
                        font-size: var(--fz-md);
                    }
                }
            }
        }
    }



/* Mobile breakpoint */
@media only screen and (max-width: ${size.xs}){

    height: auto;
    
    .Wrapper-content-about{
        width: 100%;
        margin-left: 0;
        
        .nav-about-page{
            display: none;
        }

        .Container-story-content{
            margin-top: 35px;
            padding: 30px;
            
            h1{
                font-size: var(--fz-xlll);
            }
            
            .banner-image{
                width: 100%;
                height: 200px;
                margin-top: 20px;
            }
            
            .Content-story{
                width: 100%;
                height: auto;
                margin-top: 20px;
                line-height: 24px;
                padding-right: 30px;
                margin-bottom: 20px;
                
                p{
                    color: var(--navy);
                    font-size: var(--fz-lg);
                    line-height: 30px;
                    margin-top: 25px;

                    span{
                        color: var(--navyTwo);
                        font-size: var(--fz-md);
                    }
                }
            }
        }
    }
}




/* Tablet breakpoint */
@media (min-width: ${size.minMd}) and (max-width: ${size.md}){

    height: auto;

    .Wrapper-content-about{
        width: 100%;
        height: 100vh;
        margin-left: 0;
        position: relative;

        .nav-about-page{
            display: none;
        }

        .Container-story-content{
            width: 100%;
            height: auto;
            margin-top: 70px;
            padding: 40px;

            h1{
                font-size: var(--fz-xxl);
            }

            .banner-image{
                width: 100%;
                height: 600px;
                background-color: white;
                margin-top: 20px;
                background: url(${bg});
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
            }

            .Content-story{
                width: 100%;
                height: auto;
                margin-top: 35px;
                line-height: 24px;
                padding-right: 50px;
                margin-bottom: 20px;

                p{
                    color: var(--navy);
                    font-size: var(--fz-lg);
                    line-height: 30px;
                    margin-top: 25px;

                    span{
                        color: var(--navyTwo);
                        font-size: var(--fz-md);
                    }
                }
            }
        }
    }

}
`