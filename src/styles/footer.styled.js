import styled from "styled-components";

// Import file media breakpoint
import size from '../Breakpoints'

export const ContainerFooter = styled.section`

    width: 100%;
    height: auto;

        .Footer-top{
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: relative;
            padding: 80px 0;

            .header-foot-top{
                width: 50%;
                height: auto;
                text-align: center;
                line-height: 60px;
                position: relative;

                span{
                    font-size: var(--fz-lgg);
                    font-weight: bold;
                    color: var(--navyTwo);
                }

                h1{
                    font-size: var(--fz-xxl);
                    color: var(--black);
                }

                .para{

                    width: 100%;
                    padding: 0 200px;
                    line-height: 25px;
                    margin-top: 5px;

                    p{
                        font-size: var(--fz-lgg);
                        color: var(--navy);
                        font-weight: 500;
                    }
                }
                
            }

            .social-link-foot-top{
                width: 470px;
                height: auto;
                display: flex;
                margin-top: 25px;
                justify-content: space-between;
                align-items: center;
            }
        }

        .Footer-bottom{
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            margin-top: 35px;
            border-top: var(--border-size) var(--border);
            border-bottom: var(--border-size) var(--border);

            .footer-content{
                width: 35%;
                height: 375px;
                border-right: var(--border-size) var(--border);
                position: relative;

                .link-references{
                    width: 100%;
                    height: 60%;
                    display: flex;
                    justify-content: space-between;
                    padding: 70px 80px;

                    span{
                        img{
                            width: 130px;
                            height: auto;
                            object-fit: cover;
                        }
                    }

                    ul{
                        list-style: none;
                        margin: 0;
                        line-height: 35px;

                        li{
                            a{
                                text-decoration: none;
                                font-size: var(--fz-md);
                                color: #64646c;
                                transition: var(--transition);
                                font-weight: 500;

                                &:hover{
                                    color: var(--primary);
                                }
                            }
                        }
                    }
                }

                .footer-list{
                    width: 100%;
                    height: 60%;
                    padding: 70px 80px;
                    line-height: 35px;

                    h1{
                        color: var(--black);
                    }

                    a{
                        color: var(--primary);
                        text-decoration: none;
                        font-size: var(--fz-lgg);
                    }

                    p{
                        color: var(--navyTwo);
                        font-size: var(--fz-md);

                        strong{
                            color: var(--black);
                            margin-right: 5px;
                        }
                    }
                }

                .newsletter{
                    width: 100%;
                    height: 60%;
                    padding: 70px 80px;
                    line-height: 35px;
                    position: relative;

                    p{
                        color: var(--navy);
                        line-height: 26px;
                        width: 250px;
                        font-size: var(--fz-md);
                    }

                    form{
                        width: 80%;
                        height: auto;
                        position: relative;
                        margin-top: 20px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        overflow: hidden;
                        border: 2px solid var(--border);
                        border-radius: var(--radius3);
                        overflow: hidden;

                        input{
                            width: 100%;
                            height: auto;
                            padding: 15px 20px;
                            outline: none;
                            font-size: var(--fz-md);
                            border: none;
                        }

                        button{
                            padding: 14px;
                            border-radius: var(--radius1);
                            background-color: var(--primary);
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            outline: none;
                            border: none;
                            color: var(--white);
                            position: absolute;
                            right: 2px;
                            font-size: 18px;
                            cursor: pointer;
                        }

                    }
                }


            }
        }

        .Footer-base{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 30px 80px;
            color: var(--navy);

            p{
                font-size: var(--fz-sm);
            }

            ul{
                display: flex;
                align-items: center;
                justify-content: center;
                list-style: none;

                li{
                    margin-left: 20px;

                    a{
                        padding: 8px;
                        border-radius: var(--radius1);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        transition: var(--transition);
                        font-size: 15px;
                        color: var(--navyTwo);

                        &:hover{
                            background-color: var(--primary);
                            color: var(--white);
                        }
                    }
                }
            }
        }




/* Mobile breakpoint */
@media only screen and (max-width: ${size.xs}){


            .Footer-top{
                padding: 20px 0;

                .header-foot-top{
                    width: 100%;
                    height: auto;
                    text-align: center;
                    line-height: 50px;
                    position: relative;

                    span{
                        font-size: var(--fz-sm);
                        font-weight: 400;
                    }

                    h1{
                        font-size: var(--fz-xllll);
                    }

                    .para{

                        width: auto;
                        padding: 0 30px;
                        line-height: 0;
                        margin-top: 0;

                        p{
                            line-height: 1.5;
                            font-size: var(--fz-lg);
                            margin-top: 5px;
                        }
                    }
                    
                }

                .social-link-foot-top{
                    width: 100%;
                    margin-top: 20px;
                    padding: 0 30px;

                    img{
                        width: 100px;
                        height: auto;
                        object-fit: cover;
                    }
                }
            }

            .Footer-bottom{

                width: 100%;
                flex-direction: column;
                margin-top: 35px;

                .footer-content{
                    width: 100%;
                    height: auto;
                    border-top: var(--border-size) var(--border);
                    justify-content: space-between;

                    .link-references{
                        width: 100%;
                        height: auto;
                        padding: 20px;

                        span{

                            display: none;
                            img{
                                width: 100px;
                            }
                        }

                        ul{
                            list-style: none;
                            margin: 0;
                            line-height: 35px;

                            li{
                                a{
                                    text-decoration: none;
                                    font-size: var(--fz-md);
                                    color: #64646c;
                                    transition: var(--transition);
                                    font-weight: 500;

                                    &:hover{
                                        color: var(--primary);
                                    }
                                }
                            }
                        }
                    }

                    .footer-list{
                        width: 100%;
                        height: auto;
                        padding: 20px 80px 20px 25px;
                        line-height: 30px;

                    }

                    .newsletter{
                        width: 100%;
                        height: auto;
                        padding: 25px;
                        line-height: 30px;

                        p{
                            line-height: 26px;
                            width: auto;
                        }

                        form{
                            width: 80%;
                            height: auto;
                            overflow: hidden;

                            input{
                                width: 100%;
                                height: auto;
                                padding: 13px 20px;

                                &::placeholder{
                                    font-size: var(--fz-sm);
                                }
                            }

                            button{
                                padding: 13px;
                                font-size: 16px;
                            }

                        }
                    }


                }
            }

            .Footer-base{

                    padding: 30px 25px;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    p{
                        font-size: var(--fz-xxs);
                        display: none;
                    }
            }



}

/* Tablet breakpoint */
@media (min-width: ${size.minMd}) and (max-width: ${size.md}){
    
    
        width: 100%;
        height: auto;

        .Footer-top{

            width: 100%;
            height: auto;
            padding: 60px 0;

            .header-foot-top{
                width: 100%;
                height: auto;

                span{
                    font-weight: 400;
                }

                h1{
                    font-size: var(--fz-x-tab2);
                }

                .para{

                    width: 100%;
                    padding: 0 200px;
                    line-height: 25px;
                    margin-top: 5px;

                    p{
                        font-size: var(--fz-lgg);
                        color: var(--navy);
                        font-weight: 500;
                    }
                }
                
            }

        }

        .Footer-bottom{
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            margin-top: 35px;

            .footer-content{
                width: 35%;
                height: 350px;
                position: relative;

                .link-references{
                    width: 100%;
                    height: auto;
                    display: flex;
                    justify-content: flex-start;
                    padding: 20px 30px;

                    span{
                        img{
                            display: none;
                        }
                    }

                    ul{
                        list-style: none;
                        margin: 0;
                        line-height: 35px;

                        li{
                            a{
                                text-decoration: none;
                                font-size: var(--fz-md);
                                color: #64646c;
                                transition: var(--transition);
                                font-weight: 500;

                                &:hover{
                                    color: var(--primary);
                                }
                            }
                        }
                    }
                }

                .footer-list{
                    width: 100%;
                    height: auto;
                    padding: 20px 30px;
                    line-height: 35px;
                }

                .newsletter{
                    width: 100%;
                    height: auto;
                    padding: 20px 30px;

                    p{
                        width: auto;
                    }

                    form{
                        width: 100%;
                        height: auto;
                        position: relative;
                        margin-top: 20px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        overflow: hidden;
                        border: 2px solid var(--border);
                        border-radius: var(--radius3);
                        overflow: hidden;

                        input{
                            width: 100%;
                            height: auto;
                            padding: 15px 20px;
                            outline: none;
                            font-size: var(--fz-md);
                            border: none;
                        }

                        button{
                            padding: 14px;
                            border-radius: var(--radius1);
                            background-color: var(--primary);
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            outline: none;
                            border: none;
                            color: var(--white);
                            position: absolute;
                            right: 2px;
                            font-size: 18px;
                            cursor: pointer;
                        }

                    }
                }


            }
        }



}
`