import styled from "styled-components";

// Import images 
import bg from './img/bgHero.jpg'

// Import mediaqueries breakpoints
import size from "../../Breakpoints";



export const ContainerBox = styled.section`
    
    width: 100%;
    height: auto;
    
`

export const ContentBox = styled.div`

    width: 95%;
    height: auto;
    margin-left: 5%;
    position: relative;

        .Hero-banner{
            position: relative;
            width: 100%;
            height: 92vh;
            background: url(${bg});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: fixed;

            &::before{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: var(--rgba-hero);
                opacity: 0.75;
            }

            .nav-dev-page{

                        width: 100%;
                        height: 10%;
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        position: relative;
                        padding: 0 100px;

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


            .Grid{

                position: relative;
                width: 70%;
                height: auto;
                margin-left: 30px;
                padding: 80px;
                margin-top: 70px;
                
                h1{
                    color: var(--white);
                    font-size: var(--fz-heading);
                }

                p{
                    width: 900px;
                    color: var(--white);
                    font-size: var(--fz-xll);
                    line-height: 40px;
                }

                .connexion-links{
                    width: 42%;
                    height: auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 20px;
                }
            }

            .scroll-down{
                position: absolute;
                left: 50%;
                bottom: -60px;
                z-index: 999;
            }
        }


        #wrapper-two{
            width: 100%;
            height: auto;

            .box-wrapper-one{
                width: 100%;
                height: auto;
                position: relative;
                display: flex;
                align-items: center;
                padding: 30px 10px;


                .TitleOne{
                    width: 50%;
                    height: 500px;
                    padding: 130px;

                    h3{
                        font-size: var(--fz-lg);
                        color: var(--navy);
                    }
                    h1{
                        font-size: var(--fz-xxll);
                        margin-top: 10px;
                        font-weight: 700;
                        width: 550px;
                    }
                }

                ul{
                    width: 50%;
                    height: 500px;
                    padding: 130px;
                    list-style: none;

                    li{
                        line-height: 35px;
                        font-size: var(--fz-lgg);
                        color: var(--navy);
                        margin-top: 15px;
                    }
                }
            }

            .box-wrapper-two{
                width: 100%;
                height: auto;
                position: relative;
                display: flex;

                    .Box-left-photo{
                        width: 50%;
                        height: auto;
                        padding: 80px 100px;
                        display: flex;

                        .div-item-one{
                            width: 450px;
                            height: auto;
                            position: relative;
                            overflow: hidden;

                            img{
                                width: 100%;
                                height: auto;
                                object-fit: cover;
                            }
                        }

                        .div-item-two{
                            width: 374px;
                            height: auto;
                            position: relative;
                            overflow: hidden;
                            margin-top: 270px;
                            margin-left: -30px;

                            img{
                                width: 100%;
                                height: auto;
                                object-fit: cover;
                            }
                        }
                    }

                    .Box-right-photo{
                        width: 50%;
                        height: auto;
                        padding: 90px 100px;

                        h1{
                            font-size: var(--fz-xlll);
                            font-weight: 700;
                            line-height: 58px;
                            margin-top: 20px;
                        }

                        p{
                            font-size: var(--fz-lg);
                            color: var(--navy);
                            line-height: 35px;
                            margin-top: 20px;
                        }
                    }
            }

            .box-wrapper-three{
                width: 100%;
                height: 600px;
                position: relative;
                display: flex;

                .div-left-header{
                    width: 50%;
                    height: 100%;
                    background-color: white;
                    padding: 80px 100px;

                    h1{
                            font-size: var(--fz-xlll);
                            font-weight: 700;
                            line-height: 58px;
                            margin-top: 20px;
                    }

                    p{
                            font-size: var(--fz-lg);
                            color: var(--navy);
                            line-height: 35px;
                            margin-top: 20px;
                    }
                }

                .div-right{
                    width: 50%;
                    height: 100%;
                    background-color: white;
                    padding: 80px 100px;
                    position: relative;

                    img{
                        width: 100%;
                        height: auto;
                        object-fit: cover;
                    }
                }
            }
        }

        .Centralize-box{
            width: 100%;
            height: auto;
            padding: 30px 100px;
            position: relative;

            .Header-title{
                width: 100%;
                height: auto;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                h1{
                    font-size: var(--fz-xxl);
                    font-weight: bold;
                }

                p{
                    font-size: var(--fz-lgg);
                    color: var(--navy);
                    width: 400px;
                    text-align: center;
                }
            }

            .Grid-cards{
                width: 100%;
                height: auto;
                margin-top: 50px;
                display: flex;
                justify-content: space-between;
                border-bottom: var(--border-size) var(--border);
                padding-bottom: 90px;

                a{
                    text-decoration: none;
                    transition: var(--transition);

                    .Item{
                        width: 520px;
                        height: 430px;
                        position: relative;
                        text-decoration: none;
                        transition: var(--transition);

                        .Img-poster{
                            width: 100%;
                            height: 350px;
                            position: relative;
                            overflow: hidden;
                            border-radius: 10px;
                            margin-bottom: 10px;
                            transition: var(--transition);
                            
                            img{
                                width: 520px;
                                height: 350px;
                                object-fit: cover;
                            }
                        }

                        strong{
                            margin-top: 10px;
                            color: var(--black);
                            font-size: var(--fz-lgg);
                        }

                        .footer-post{
                            width: 100%;
                            height: auto;
                            padding: 10px 0;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            
                            span{
                                color: var(--navy);
                            }
                        }
                    }

                    &:hover{

                        .Img-poster{
                            transition: var(--transition2);

                            &::before{
                                content: '';
                                position: absolute;
                                width: 100%;
                                height: 100%;
                                top: 0;
                                left: 0;
                                background-color: rgba(173,79,151,0.5);
                            }
                        }
                    }
                }
                
            }
        }




/* Mobile breakpoint */
@media only screen and (max-width: ${size.xs}){

    width: 100%;
    height: auto;
    margin-left: 0;
    margin-top: 10vh;
    position: relative;

    .Hero-banner{
        position: relative;
        width: 100%;
        height: 55vh;
        overflow: hidden;

        .nav-dev-page{
            display: none;
        }

        .Grid{

                width: 100%;
                height: 100%;
                margin-left: 0;
                padding: 70px 20px 20px 20px;
                margin-top: 0;
                text-align: center;
                
                    h1{
                        color: var(--white);
                        font-size: var(--fz-xllll);
                    }

                    p{
                        width: auto;
                        font-size: var(--fz-md);
                        line-height: 24px;
                        margin-top: 15px;
                    }

                    .connexion-links{
                        width: 100%;
                        height: auto;
                        justify-content: space-around;
                        margin-top: 20px;
                        padding: 0;
                        position: relative;

                        a{
                            img{
                                width: 90px;
                                height: auto;
                                object-fit: cover;
                            }

                        }
                    }
        }

        .scroll-down{
            display: none;
        }
    }

    #wrapper-two{

        width: 100%;
        height: auto;

            .box-wrapper-one{
                width: 100%;
                height: auto;
                position: relative;
                display: flex;
                align-items: center;
                flex-direction: column;
                padding: 20px 10px;


                .TitleOne{
                    width: 100%;
                    height: auto;
                    padding: 20px;

                    h3{
                        font-size: var(--fz-md);
                        color: var(--navy);
                    }
                    h1{
                        font-size: var(--fz-xllll);
                        margin-top: 20px;
                        width: auto;
                    }
                }

                ul{
                    width: 100%;
                    height: auto;
                    padding: 10px 20px;
                    list-style: none;

                    li{
                        font-size: var(--fz-lgg);
                        margin-top: 20px;
                    }
                }
            }

            .box-wrapper-two{

                display: flex;
                flex-direction: column;

                    .Box-left-photo{
                        width: 100%;
                        height: auto;
                        padding: 30px;
                        display: block;

                        .div-item-one{
                            width: 100%;
                            z-index: 0;

                            img{
                                width: 80%;
                            }
                        }

                        .div-item-two{
                            width: 100%;
                            margin-top: -50px;
                            margin-left: 25px;
                            z-index: 1 !important;

                            img{
                                width: 85%;
                            }
                        }
                    }

                    .Box-right-photo{

                        width: 100%;
                        height: auto;
                        padding: 20px 30px;

                        h1{
                            font-size: var(--fz-xllll);
                            font-weight: 700;
                            line-height: 40px;
                            margin-top: 20px;
                        }

                    }
            }

            .box-wrapper-three{
                width: 100%;
                height: auto;
                position: relative;
                display: flex;
                flex-direction: column;

                .div-left-header{
                    width: 100%;
                    height: auto;
                    padding: 20px 30px;

                    h1{
                            font-size: var(--fz-xllll);
                            line-height: 38px;
                    }
                }

                .div-right{
                    width: 100%;
                    height: auto;
                    padding: 20px 30px;
                    position: relative;

                    img{
                        width: 100%;
                    }
                }
            }    
    }

    .Centralize-box{
        width: 100%;
        padding: 50px 5px;

        .Header-title{
                width: 100%;
                flex-direction: column;
                padding: 10px 30px;

                h1{
                    font-size: var(--fz-xllll);
                }

                p{
                    font-size: var(--fz-lgg);
                    width: auto;
                    margin-top: 20px;
                    line-height: 1.5;
                }
        }

        .Grid-cards{
                width: 100%;
                margin-top: 50px;
                flex-direction: column;
                justify-content: space-between;
                position: relative;
                padding: 20px 25px;

                a{

                    .Item{
                        width: 100%;
                        height: auto;
                        margin-top: 15px;

                        .Img-poster{
                            width: 100%;
                            height: 200px;
                            
                        }

                        .footer-post{
                            span{
                                font-size: var(--fz-sm);
                            }
                        }
                    }

                }
                
            }


    }

}

/* Mobile breakpoint */
@media (min-width: ${size.minMd}) and (max-width: ${size.md}){

    width: 100%;
    height: auto;
    margin-left: 0;

        .Hero-banner{
            position: relative;
            width: 100%;
            height: 80vh;

            .nav-dev-page{
                display: none;
            }


            .Grid{

                position: relative;
                width: 100%;
                height: auto;
                margin-left: 0;
                padding: 25% 30px;
                margin-top: 70px;
                
                h1{
                    font-size: var(--fz-xx-tab);
                }

                p{
                    width: auto;
                }

                .connexion-links{
                    width: 65%;
                    height: auto;
                    margin-top: 20px;
                }
            }

            .scroll-down{
                display: none;
            }
        }

        #wrapper-two{

            width: 100%;
            height: auto;

            .box-wrapper-one{
                width: 100%;
                height: auto;
                position: relative;
                display: flex;
                align-items: center;
                flex-direction: column;
                padding: 0;


                .TitleOne{
                    width: 100%;
                    height: auto;
                    padding: 35px;

                    h3{
                        font-size: var(--fz-lg);
                        font-weight: 400;
                    }
                    h1{
                        font-size: var(--fz-x-tab2);
                        margin-top: 20px;
                        width: auto;
                    }
                }

                ul{
                    width: 100%;
                    height: auto;
                    padding: 0 35px;
                    list-style: none;

                    li{
                        line-height: 35px;
                        font-size: var(--fz-lgg-tab);
                        margin-top: 10px;
                    }
                }
            }

            .box-wrapper-two{
                width: 100%;
                height: auto;
                position: relative;
                display: flex;
                flex-direction: column;


                    .Box-left-photo{

                        width: 100%;
                        height: auto;
                        padding: 80px 100px;
                        display: flex;

                        .div-item-one{
                            width: 450px;
                            height: auto;
                            position: relative;
                            overflow: hidden;

                            img{
                                width: 100%;
                                height: auto;
                                object-fit: cover;
                            }
                        }

                        .div-item-two{
                            width: 374px;
                            height: auto;
                            position: relative;
                            overflow: hidden;
                            margin-top: 270px;
                            margin-left: -30px;

                            img{
                                width: 100%;
                                height: auto;
                                object-fit: cover;
                            }
                        }
                    }

                    .Box-right-photo{
                        width: 100%;
                        height: auto;
                        padding: 90px 30px;

                        h1{
                            font-size: var(--fz-xlll);
                        }

                        p{
                            font-size: var(--fz-lgg-tab);
                        }
                    }
            }

            .box-wrapper-three{
                width: 100%;
                height: auto;
                position: relative;
                display: flex;
                flex-direction: column;

                .div-left-header{
                    width: 100%;
                    height: auto;
                    background-color: white;
                    padding: 0 30px;

                    h1{
                            font-size: var(--fz-xlll);
                    }

                    p{
                            font-size: var(--fz-lgg-tab);
                            margin-top: 30px;
                    }
                }

                .div-right{
                    width: 100%;
                    height: auto;
                    padding: 80px 100px;

                }
            }
        }

        .Centralize-box{
            width: 100%;
            height: auto;
            padding: 30px;
            position: relative;

            .Header-title{
                width: 100%;
                height: auto;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                h1{
                    font-size: var(--fz-x-tab2);
                }

                p{
                    font-size: var(--fz-lgg-tab);
                    width: 500px;
                }
            }

            .Grid-cards{
                width: 100%;
                height: auto;
                margin-top: 50px;
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                align-items: center;
                padding-bottom: 50px;

                a{
                    text-decoration: none;
                    transition: var(--transition);

                    .Item{
                        width: 100%;
                        height: 430px;
                        margin-top: 20px;


                        .Img-poster{
                            width: 100%;
                            margin-bottom: 10px;
                        }
                    }

                }
                
            }
        }



}

`