import React from 'react'
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { CiTrophy } from "react-icons/ci";
import { TbBuildingTunnel } from "react-icons/tb";
import { FiTv } from "react-icons/fi";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { IoIosRocket } from "react-icons/io"
import { LuGoal } from "react-icons/lu";
import { MdOutlineSettingsInputComposite } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IconProvider } from '../utils/Provider';

const Home = () => {
    return (
        <>
            <div className='bg-[#fefbeb] home-div overflow-hidden'>
                <section className='flex h-[583px] p-[80px] gap-[80px]'>
                    <div className='w-[714px] h-[257px]'>
                        <h1 className='text-3xl text-wrap leading-loose mt-[15px] font-[700]'>Collectible Sneakers</h1>
                        <p className='mt-[20px] mb-[20px] text-sm'>
                            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem <br /> mauris. Pharetra, eu imperdiet ipsum ultrices amet.
                        </p>
                        <div className='flex items-center w-[347px]'>
                            <button className='border rounded-lg border-[#78350f] p-[8px] me-5 text-[#78350f]'>Sign up now</button>
                            <button className='outline-none border-none flex items-center justify-between text-[#78350f]'><MdOutlineSlowMotionVideo /> Watch Demo</button>
                        </div>
                    </div>
                    <div className='w-[486px] h-[423px] relative z-50'>
                        <div className='w-[486px] h-[388px] absolute image-shoe  '>
                            <img src="https://s3-alpha-sig.figma.com/img/77fb/6adb/096e6be3f804ff700da7ab23cdeee2d7?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n-Vrxn~fA2o~N7U0h7RQ4kt-0K4S5GtE67aOdy2cZUe2y29UDGxFIyBOh5~HcCsiwjoCbGL43gAsGrqn8r7TgP5zgCMN1rgPVlwQdOAqNDF6VI2qtsk~NpYnoFD9qXE8J5-Ahtq5F8gOj778AHF5iR2WyBsbbNZwI7MWyGMnogGpHtCYd~zb8CQtCy3E2VFM3MxVQKheI~EjB~sDhFqXjf54pYytXFsBO2yhsMj7UGZfgV819o9PHTJ1XTiMQg1BRqSc8Bx6T7B3UtAWxOqdMNEWtPYhYcr1jkCfxaPR3JRHvf0JpUiLP7munkV79Jb-JjuOCobQdLUcTAoxfbIe3Q__" alt="image not found" className='h-full w-full' />
                        </div>
                        <div className='h-[300px] w-[300px] bg-[#fbbf24] rounded-lg box-image'></div>
                    </div>
                </section>
                <section className='h-[365px] grid grid-cols-3 p-[80px] gap-[80px]'>
                    <div className='w-[373px] h-[205px]'>
                        <p className='text-[40px]'><CiTrophy /></p>
                        <p className='text-sm font-medium mb-5 mt-5'>Nibh viverra</p>
                        <p className='text-sm'>sit bibendum donec dolor fames newque <br /> vuplutate non sit aliquram. Consequat turpis <br /> natoque leo, massa.</p>
                    </div>
                    <div className='w-[373px] h-[205px]'>
                        <p className='text-[40px]'><TbBuildingTunnel /></p>
                        <p className='text-sm font-medium mb-5 mt-5'>Curus amet</p>
                        <p className='text-sm'>sit bibendum donec dolor fames newque <br /> vuplutate non sit aliquram. Consequat turpis <br /> natoque leo, massa.</p>
                    </div>
                    <div className='w-[373px] h-[205px]'>
                        <p className='text-[40px]'><FiTv /></p>
                        <p className='text-sm font-medium mb-5 mt-5'>Ipsum fementum</p>
                        <p className='text-sm'>sit bibendum donec dolor fames newque <br /> vuplutate non sit aliquram. Consequat turpis <br /> natoque leo, massa.</p>
                    </div>
                </section>
                <section className='bg-[#0f172a] h-[776px] text-white p-[80px]'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-5xl font-medium'>The best of the best</h1>
                        </div>
                        <div>
                            <button className='border rounded-lg border-[#fff] w-[133px] p-[8px] me-5 text-[#fff]'>Sign up now</button>
                        </div>
                    </div>

                    <div className='h-[472px] grid grid-cols-3 mt-16 gap-[80px] items-center justify-center m-auto'>
                        <div className='rounded-lg border border-white h-[472px] w-[394px]  shadow-lg shadow-white'>
                            <div className='h-[220px]'>
                                <img src="https://s3-alpha-sig.figma.com/img/dca1/86a5/0d88eb3d3af7ffd32f03165632eb5422?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aV49dXwVe7BNxqutIxs5i3emPVFsRmjO7P4roqG1HScGxyNlyAmfGVZF8Djbnb~HLGwZzTOoNB64Ohnp0tjQR2BilKV02G9mohD4l1eauvSzAgQWcp38uK90PxGoFGRaLo3Hfhr~807Td9D6RhiZc8XVJjdKrglU0ipOedrOQDPmTsKjaZ3wl8PKg8FzI6FFqgrwZafgqA2WxOOkIGkB9utOcNq71U3Zlyy53OlKkFTrk00nUeHgb3GNGWrF-0jx7vip5MPSgEQ13mjdw0-mFiRY62DogF~7RDwvU-jEWSw-hKJFNpPnadiLzMiFEiXgAu8JDIBoZtX4L8OdTe1rEA__" className='h-full w-full object-cover' alt="" />
                            </div>
                            <div className='h-[132px] p-[32px]'>
                                <h3>Title</h3>
                                <p className='text-sm'>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                            </div>
                            <div className='h-[120px] p-[32px]'>
                                <button className='border border-white p-[8px] rounded-lg w-[330px]'>Buy Now</button>
                            </div>
                        </div>
                        <div className='rounded-lg border border-white h-[472px] w-[394px]  shadow-lg shadow-white'>
                            <div className='h-[220px]'>
                                <img src="https://s3-alpha-sig.figma.com/img/1c58/67c1/ae5c8652360f15ed8928bae486c8af2a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R8Y381xbiBrMo4Q~SEBo9S~cgE8jL3OH8t2tsNU3PmHj2iSB7narf3j8k76tyNFMjWYGoEsar901cAnKZ3tVuynl6-OQBsnLaXiSkp4FgDm1uj9o2Q7Z~DPGB5BU~HwYJkAjg94hpoPd9NToSjRK8H0A9VXQ4KDV1qj4HWNp3pxuHVg50cz1323Dx76JhXUD5gsVm3HIX4GFtZ4~Bf4xonIaBJWIXcg7pw4QurWPgW6JhvYt8BcN0Q9VUE9h4fsank4Rb0f2vUaIjdV36agHz0QRBJCE-1FD~-C2GR7qzQuWOvTGJwdamhvIQB8Q0tFP7GBhXo0JbLeJ1qzjyMVHeQ__" className='h-full w-full' alt="" />
                            </div>
                            <div className='h-[132px] p-[32px]'>
                                <h3>Title</h3>
                                <p className='text-sm'>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                            </div>
                            <div className='h-[120px] p-[32px]'>
                                <button className='border border-white p-[8px] rounded-lg w-[330px]'>Buy Now</button>
                            </div>
                        </div>
                        <div className='rounded-lg border border-white h-[472px] w-[394px]  shadow-lg shadow-white'>
                            <div className='h-[220px]'>
                                <img src="https://s3-alpha-sig.figma.com/img/c5b9/139c/f57074dcff92be506ebd3ca26296b822?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pAnRQkdzhJG7kixiWCwm0~LhLZjt0vvRcyB~UTYLiUyX6ZjH138vNEy-9dd653JhH2pE2DL8gGYEjKoGSjAAUWlaYD4-o7LEBgS04ZdfSUri~STQsrHF38Tp229XVt4s72mqFJ9lb~d4oB0GGa8MkSePYKbnxFlXw3GsJSiemPkIsaMLwzG6cZn6J1YUQ~92jevYiXSgJ8~Q5d2IEUpYSyqHEcwpjrIpmzeVsVca88fBVoFpW2y~KrIjCp7SUoa0LwLOh~XSj7XoaGUDhWYznSdbXAbAs17oCKHkxEYTXGKisDWuc95ckY4hQF0kb0LDuAOOO7TXClPNTTSiSxip8A__" className='h-full w-full' alt="" />
                            </div>
                            <div className='h-[132px] p-[32px]'>
                                <h3>Title</h3>
                                <p className='text-sm'>
                                    Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                                </p>
                            </div>
                            <div className='h-[120px] p-[32px]'>
                                <button className='border border-white p-[8px] rounded-lg w-[330px]'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='h-[816px] relative rounded-lg'>
                    <div className='h-[496px] bg-white video-box w-[1220px] flex gap-[80px]'>
                        <div className='w-[520px] h-[274px]'>
                            <h1 className='text-3xl font-medium'>Why Join Us</h1>
                            <div className='h-[108px] mt-5 mb-3'>
                                <ul className='unstyled leading-loose mt-3'>
                                    <li>Est in Pharetra magna adipiscing ornare aliquram</li>
                                    <li>Tellus arcu sed Consequat ac velit ut eu blandit</li>
                                    <li>Ullamcorper ornare in egnestas dolor orci.</li>
                                </ul>
                            </div>
                            <button className='border rounded-lg border-[#78350f] p-[8px] me-5 text-[#78350f]'>Sign up now</button>
                        </div>
                        <div className='w-[520px] h-[350px] border border-red-600'>
                            <video src=""></video>
                        </div>
                    </div>
                </section>

                <section className='h-[732px] p-[80px]'>
                    <div className='flex items-center justify-around'>
                        <h1 className='text-3xl'>Because they love us</h1>
                        <div className='flex items-center justify-around'>
                            <p className='text-[25px]'><FaRegArrowAltCircleLeft /></p>
                            <p className='text-[25px] ms-3'><FaRegArrowAltCircleRight /></p>
                        </div>
                    </div>

                    <div className='w-[1360px] h-[421px] bg-[#fde68a] mt-12'>
                        <div className='h-[430px] flex items-center justify-between'>
                            <div className='w-[384px] h-[430px] bg-white p-[16px] rounded-lg'>
                                <div>
                                    Zommer
                                </div>
                                <div className=''>
                                    <p>Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.</p>
                                </div>
                                <div className='w-[320px] h-[80px] p-[16px] mt-[220px] m-auto flex items-center justify-around'>
                                    <div className='h-[50px] w-[50px] rounded-full overflow-hidden'>
                                        <img src="https://s3-alpha-sig.figma.com/img/558c/b79e/f83fbd49cdf87134bb331c6a7d3a9eaa?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DYXFXwZHGycXX6Om-v4FDkUkfoDySHo6ZOnrkNbxfFdxxEMs9NfQc~kZXHkZ50FM6KDC-kGqG4e5H-yl2rplKkYo~5ki7MA-pfSNUbk-~d8jJVgLKskVfNHAZ5FdNe~Kh--Q9Be-Va9RYfV-2xh-WlQJDsGYY2ABLGm6UWL14pHX5~6MrMkpT~Lqm5GBvLzUPXJ9QCqVtCfVCPSamCpwBA5VL~LPA9NZwMI44BN1~ty6sDr3CjCAW72lbAuUFRlc6-YmgjPI~uaK9iRxk4OXgz~fSs7m2zvxIp-vwsWomOTwXMu5VQQn5c~vGe-2w9wd22i4bwvy0~z41~kbEJuHrw__" alt="" className='h-full w-full object-cover object-center rounded-full' />
                                    </div>
                                    <p>Hellen</p>
                                </div>
                            </div>
                            <div className='w-[384px] h-[430px] bg-white p-[16px] rounded-lg'>
                                <div>
                                    Zommer
                                </div>
                                <div className=''>
                                    <p>Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.</p>
                                </div>
                                <div className='w-[320px] h-[80px] p-[16px] mt-[220px] m-auto flex items-center justify-around'>
                                    <div className='h-[50px] w-[50px] rounded-full'>
                                        <img src="https://s3-alpha-sig.figma.com/img/4968/5ac7/b81e766e223bcb38bd406643740bb4b1?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kAu7rs0TOdtO5nmuv~3GJk8gCCvsMNMU7lygzJ5nYoog6pCajPJahsZ4ts4KapG7HJ9L7sTkky~dUorS4YfxgMbGAfo5oWfZKWYY0Hl4oA~GbBvWNxb8bTvbE1-I-y~~ST83eT9fg0Qo2WzahgraCHUN3Yo55Fnx4fx4Lv-1qYGaNjQivf~9mJfCNPsVA6~Nx-xnzvMorvfSgiYdwPQWeeiJM8qz~U3nU2UVep0DhiWe~hYf89QkOmPTqIaj-W8GcRKcd-lxzEhW~443KSEfSRfHBVysKxiirRqYb4XSir6NNDxx4m-9ammfFQLDcj4IBIqfPagOqwp5npYwHqKQKA__" alt="" className='h-full w-full object-cover object-center rounded-full' />
                                    </div>
                                    <p>Hellen</p>
                                </div>
                            </div>
                            <div className='w-[384px] h-[430px] bg-white p-[16px] rounded-lg'>
                                <div>
                                    Zommer
                                </div>
                                <div className=''>
                                    <p>Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.</p>
                                </div>
                                <div className='w-[320px] h-[80px] p-[16px]  mt-[220px] m-auto flex items-center justify-around'>
                                    <div className='h-[50px] w-[50px] rounded-full '>
                                        <img src="https://s3-alpha-sig.figma.com/img/845c/0a7e/76a09dd9880480e7c59f7385cde7161f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FACAyal9nB~ZiqQuZ-Cpq9-9Gp30dmotFc3mLM4MQnOoXXKC8w5HX5SyifsNdGFLoefXl0WWQkP7YTqVO6N-whq7S8kN6mjxAJ5u6TWTvScs3MRANespbp9Z~YD8qnGnRW6Zks-Sugi2k9NNV6OBrMwzvC2EecEQzye863GyfPgT~SvFYFRzZ16KduG7xRZSM~62tQJ3mEGsVS2Q0EOMi3YJmpONF8vB4RaW8kg-Hy5LrEAP7vFOcyA7~aGbfncMhhiXoRRwXRzIJnUkQubrMiG2Y3nXR7n9Z6dvpuPqW9GkpkfE1dpuSYub5EumsfPLA4Y79t2hOpGyGvwmdnM8Tg__" className='h-full w-full object-cover object-center rounded-full' alt="" />
                                    </div>
                                    <p>Hellen</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className='h-[996px] overflow-hidden'>
                    <div className='h-[152px] flex flex-wrp flex-col gap-[2px] m-auto w-[1280px]'>
                        <h1 className='text-3xl font-medium'>Grow your collection</h1><br />
                        <p className='text-sm'>
                            Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus. <br />
                            Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
                        </p>
                    </div>
                    <div className='h-[684px] border border-red-600 w-[1280px] m-auto overflow-hidden'>
                        <div className='h-[556px] gap-[80px] grid grid-cols-2'>
                            <div>
                                <ul className='list-none w-[256px] leading-loose'>
                                    <li className='flex items-center'> Bibendul tellus</li>
                                    <li className='flex items-center'><MdOutlineSecurity className='me-3' /> Cras eget</li>
                                    <li className='flex items-center'><IoIosRocket className='me-3' /> Dolor Pharetra</li>
                                    <li className='flex items-center'><LuGoal className='me-3' /> Amet,Fringilla</li>
                                    <li className='flex items-center'><MdOutlineSettingsInputComposite className='me-3' />Amet nibh</li>
                                    <li className='flex items-center'><MdOutlineSettingsInputComposite className='me-3' />Set velit</li>
                                </ul>
                            </div>
                            <div className='w-[944px] h-[556px] border border-blue-700'>
                                    
                            </div>  
                        </div>
                    </div>
                </section> */}

                <section className='h-[717px]  p-[80px]'>
                    <div className='flex justify-around items-center text-[#78350f]'>
                        <h1>Articles by Collectors</h1>
                        <p className='flex items-center'>More Articles <FaArrowRight className='ms-3' /></p>
                    </div>
                    <div className='h-[416px] w-[1280px] m-auto flex mt-8 gap-[20px] article-image relative'>
                        <div className='w-[302px] h-[461px] rounded-lg shadow-lg shadow-black'>
                            <div className='h-[220px] w-[302px] rounded-lg overflow-hidden object-cover object-centerF'>
                                <img src="https://s3-alpha-sig.figma.com/img/95d0/ce9b/9581c176aeb8158a3de5eaa84e65ef72?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EiXAL24UxrCIqHi3RYqa5YGDH9ccZjXYlXl5fW08qMdFodzvp~5AV6U7VhiZgKIp8QquyKXnTPYpaf-z4~x2Atx1etKtvS3~IFAH7FT~04sBi531MsOjUBFMjUjYQmih4ljchzJICRKDiB6FGfpjlb79T2naBB6TQFGopGPbyf68F2i--ZRu6dYNM8M1sXBnEg56fmyQREekr7A-A0B52DNRZHJ4QyjS-m5xXg0I8zDjJt8BRqpgqMiZBiC-vclVOi5fYKHIRZh7LCx0iuJKra0KCve48r8atPbnELRQ1MLRNFk9eev8nNa774CwuLWLeJsyDd6pgtaruLfSoOZUpA__" alt="" />
                            </div>
                            <div className='h-[161px] p-[32px]'>
                                <h3 className='text-lg font-medium'>Congue velit risus</h3>
                                Nunc gravida semper tellus neque scelerisque eget tincidunt in.
                            </div>
                            <div className='h-[80px] flex items-center justify-center text-[#78350f]'>
                                <button className='border-none outline-none flex items-center'>Read article <FaArrowRight className='ms-3' /></button>
                            </div>
                        </div>
                        <div className='w-[302px] h-[461px] rounded-lg shadow-lg shadow-black'>
                            <div className='h-[220px] w-[302px] rounded-lg overflow-hidden object-cover object-centerF'>
                                <img src="https://s3-alpha-sig.figma.com/img/bd99/a97c/05d217b6762e275f8947f94619aa3461?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dONgG-e8lcxp1EikgNTOfzWN18c9n6WmGDbyj3DCikSkKjngaAam26ahgLHGlCpwOKey99rjhbaZcJzPEIlV1jaJ-bGHofGM58uE3UtbfYM15l2T4tW3AYKNxu~Tu0uwNbYz0qKFufq0XV3qNR37X5d5LSM4JViRm9MiGvroTCcHalceAuD3lyH-9B6JwBRC5D9GRHMz9E2LBDVu8qzhjGyjbC~6dJFn-47m1XTMvGdYzzX2CZaCEkUJg6Vs85GkLJ0D~oyPYqm6Nb7tQ4~0jBsLYf6F0XIVe0LTWLAI60RIYwmbG6zoyakGBMWLQkMqXNTIIKKBpljb1lDSFV3cEQ__" alt="" />
                            </div>
                            <div className='h-[161px] p-[32px]'>
                                <h3 className='text-lg font-medium'>Congue velit risus</h3>
                                Phasellus venenatis massa bibendum posuere dictum tristique.
                            </div>
                            <div className='h-[80px] flex items-center justify-center text-[#78350f]'>
                                <button className='border-none outline-none flex items-center'>Read article <FaArrowRight className='ms-3' /></button>
                            </div>
                        </div>
                        <div className='w-[302px] h-[461px] rounded-lg shadow-lg shadow-black'>
                            <div className='h-[220px] w-[302px] rounded-lg overflow-hidden object-cover object-centerF'>
                                <img src="https://s3-alpha-sig.figma.com/img/aacb/e618/a3f5f3d01dbd2b45bb346a735541522b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g-tnE97OjHAX5c-5cN8h2oKARtWlPo9jsRDKUmvZVQhahjoSHS1IerJE5zvYmPO38NbeDzv3LNKNKX1Yg5QNu7uuakuyn9ECJTWq4RVQDyHSXOvomo6NGbwWJjUSMl5e~2naUnbFxJUhyu513GQdILyYz9lz4yM0QWGr-KlGAIXVXeZs4-joGkY60bPUIjKyBGyMvtXwazQoQeRL8HXHBJ8fUdjyVtgBAY~NCqtN6f8a7DTWZTjrKoiVjRhg0evbEn7rlid5a-6Peezwv4bEwD4Yz-M5DFr1T77maRpPMjjEmAd5KychVNi2TZpfFERlLsQrlKePk92PqGLV8-OYDg__" alt="" />
                            </div>
                            <div className='h-[161px] p-[32px]'>
                                <h3 className='text-lg font-medium'>Congue velit risus</h3>
                                Leo mollis fermentum praesent in condimentum id velit purus in.
                            </div>
                            <div className='h-[80px] flex items-center justify-center text-[#78350f]'>
                                <button className='border-none outline-none flex items-center'>Read article <FaArrowRight className='ms-3' /></button>
                            </div>
                        </div>
                        <div className='w-[302px] h-[461px] rounded-lg shadow-lg shadow-black'>
                            <div className='h-[220px] w-[302px] rounded-lg overflow-hidden object-cover object-centerF'>
                                <img src="https://s3-alpha-sig.figma.com/img/f203/e354/5c332499cb4e77d6094e6871b3b3f8aa?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fnWZ5MsLwyO3ZNGtMy7BUmi-T3c~IrgzHRnAfx67UXTWC0Cmnq4OMTqHuF--KpFvT5a9SVpwx~Pj~~Hi6cVVVZJn8ituFH8k2ie8q5jhRg3c39t4WEsPSyyKIVKNKqRb3O06sAEhy93hi9fWVWoulxF36BgEGJAJwt9ZVadZYnRo4FDNy02ip4FpO2tCEgzKTfjGCnj4Ejm1DyKzv6yZoBBi9MkbSbNxUDeMo-YaVpnUPFHMRpmcnJOYKbAfWbOWle2ii2Y4QV0WXO06ZgTD3vL8w7Gdz3uWFw4UErE7aEEDI2579zaTtp6mXxVUf4IszGLnmg~Jm3JoiN2n~4pZgw__" alt="" />
                            </div>
                            <div className='h-[161px] p-[32px]'>
                                <h3 className='text-lg font-medium'>Congue velit risus</h3>
                                <p>In sed bibendum metus pretium cursus tellus pharetra.</p>
                            </div>
                            <div className='h-[80px] flex items-center justify-center text-[#78350f]'>
                                <button className='border-none outline-none flex items-center'>Read article <FaArrowRight className='ms-3' /></button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='h-[914px] p-[80px]'>
                    <div className='flex justify-around items-center text-[#78350f]'>
                        <h1>Amazing Events</h1>
                        <p className='flex items-center'>Explore Articles <FaArrowRight className='ms-3' /></p>
                    </div>
                    <div className='h-[388px] flex gap-[80px] mt-20'>
                        <div className='w-[302px] h-[388px] bg-white rounded-lg'>
                            <div className='h-[48px] w-[270px] gap-[4px]'>
                                <p className='text-sm'>Ipsum</p>
                                <h4 className='font-medium'>Varius est diam</h4>
                            </div>
                            <div className='h-[220px]'>
                                <img src="https://s3-alpha-sig.figma.com/img/47a6/c08a/bf0df7426325e809618f746ca7541e41?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TH6orymtJ85l4Th0FDZIZqAUZorBS7qeskX~DoYzLSW2s011i5DerVOnZXj0FrdKdsBkEK0FcWqKYuyUUL2GP2KB2iDwNZ9qLeDk9o8kfn07I21He5kDgXkd2CFzL7AiHiclJn31OSUyNTYpZlEV6TYuaA8jEqD--XK-AaOiXuptRHKEp8o~4ExhL1DLr5WKAHiCT8aHKbYqEHV8rqJrYBmRl5Kb2QH87nEmDB7ttDvf7NHUjsQPe~7hkAI60cmZ8WgK3TeYQPqDl1dcjLOCMwphvaDEox3VhdZT4ZhvWVI8cZUhXtERScR8xyi2Crecg8YVS-T46HWjDA32oWShjg__" className='h-full w-full' alt="" />
                            </div>
                            <div className='h-[80px] text-[#78350f] mt-5'>
                                <button className="flex items-center justify-between ms-5">Buy Tickets <FaArrowRight className="ms-3" /></button>
                            </div>
                        </div>
                        <div className='w-[302px] h-[388px] bg-white rounded-lg'>
                            <div className='h-[48px] gap-[4px]'>
                                <p className='text-sm'>Ipsum</p>
                                <h4 className='font-medium'>Varius est diam</h4>
                            </div>
                            <div className='h-[220px]'>
                                <img src="https://s3-alpha-sig.figma.com/img/44cf/f23e/60e74c13188fa658bca911bdc16024c0?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=APXtvDPxjGtuhq37oAF-AvDDKRp8gHLnIL5TstwSSm~Go3nrMqR5jaD~sxX0xFXMO1Og5o5IXD2UhqHMu-4J8lH1cNEOWeiVAtin9p3DfKfxEFTGH1SS7NUQoSsAklrl~2ICYwviLz4yf68HHNcjblmEWVNKB5XysJ5uLxLoH~v-Am2sWlc9Tz1SgLfVAMFDugv9ZG4Gr0xfMzYcZGn7YQZWNAhAwbeymWpQfj1dBl~EyI-rc3BxddFUCQKa6D3VuDJRuxbEgHCIhI8JXsigCZ2DA4aBmVbeMWWtZ1lxPhozOvbPmu-O7xL73nGUzTfnIM38Fhpsoaazq2L1m0EF5g__" className='h-full w-full' alt="" />
                            </div>
                            <div className='h-[80px] text-[#78350f] mt-5'>
                                <button className="flex items-center justify-between ms-5">Buy Tickets <FaArrowRight className="ms-3" /></button>
                            </div>
                        </div>
                        <div className='w-[302px] h-[388px] bg-white rounded-lg'>
                            <div className='h-[48px] w-[270px] gap-[4px]'>
                                <p className='text-sm'>Ipsum</p>
                                <h4 className='font-medium'>Varius est diam</h4>
                            </div>
                            <div className='h-[220px]'>
                                <img src="https://s3-alpha-sig.figma.com/img/f862/e11e/2bd8633f57482865e9d514a606dbb6ff?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hbsiC~3CMKUCP6P0stq91XbS84W2IQ-XWGY2FYNuWkLGyYHEEfipMPIhFJJSEhBx4CEpw4q1yVDjmuUIeXy3eaDvq8iEopS6ZdLi8E9oLcXrxzxIx5kIYPDulFm4i7EylwEcOlC-x5KYzpPNYGr~~TNwW8WgkfF4JM2LUFl1Y6JsL9wlgW~RP9rTMUE4spWEoBa7V7gZ3AFD69VWFWVfcf9Z8KxDxLIKZBH3kOGD1yQIxyqNh35S5HiAVDUlEn43QqHSqJ~~wSWsI32IYYNHEmpLUQ8eeCwGDgscKsQBu16k-YPKkkPBpgczAdkqpPkKuqiIeesjhTXBvBx5ktpx2A__" className='h-full w-full' alt="" />
                            </div>
                            <div className='h-[80px] text-[#78350f] mt-5'>
                                <button className="flex items-center justify-between ms-5">Buy Tickets <FaArrowRight className="ms-3" /></button>
                            </div>
                        </div>
                        <div className='w-[302px] h-[388px] bg-white rounded-lg'>
                            <div className='h-[48px] w-[270px] gap-[4px]'>
                                <p className='text-sm'>Ipsum</p>
                                <h4 className='font-medium'>Varius est diam</h4>
                            </div>
                            <div className='h-[220px] rounded-lg overflow-hidden'>
                                <img src="https://s3-alpha-sig.figma.com/img/dca1/86a5/0d88eb3d3af7ffd32f03165632eb5422?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aV49dXwVe7BNxqutIxs5i3emPVFsRmjO7P4roqG1HScGxyNlyAmfGVZF8Djbnb~HLGwZzTOoNB64Ohnp0tjQR2BilKV02G9mohD4l1eauvSzAgQWcp38uK90PxGoFGRaLo3Hfhr~807Td9D6RhiZc8XVJjdKrglU0ipOedrOQDPmTsKjaZ3wl8PKg8FzI6FFqgrwZafgqA2WxOOkIGkB9utOcNq71U3Zlyy53OlKkFTrk00nUeHgb3GNGWrF-0jx7vip5MPSgEQ13mjdw0-mFiRY62DogF~7RDwvU-jEWSw-hKJFNpPnadiLzMiFEiXgAu8JDIBoZtX4L8OdTe1rEA__" className='h-full w-full' alt="" />
                            </div>
                            <div className='h-[80px] text-[#78350f] mt-5'>
                                <button className="flex items-center justify-between ms-5">Buy Tickets <FaArrowRight className="ms-3" /></button>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="footer text-white p-10 bg-[#0f172a]">
                    <nav>
                        <h6 className="footer-title">Product</h6>
                        <div>
                            <ul className='leading-loose'>
                                <li>Pricing</li>
                                <li>Overview</li>
                                <li>Browse</li>
                                <li>Accessibility</li>
                                <li>Five</li>
                            </ul>
                        </div>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Solution</h6>
                        <div>
                            <ul className='leading-loose'>
                                <li>Brainstorming</li>
                                <li>Ideation</li>
                                <li>Wireframing</li>
                                <li>Research</li>
                                <li>Design</li>
                            </ul>
                        </div>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Support</h6>
                        <div className="grid grid-flow-col gap-4">
                            <ul className='leading-loose'>
                                <li>Contact us</li>
                                <li>Developers</li>
                                <li>Documentations</li>
                                <li>Integrations</li>
                                <li>Reports</li>
                            </ul>
                        </div>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Get The App</h6>
                        <div className="grid grid-flow-col gap-4">
                            <div className='w-[119px] h-[40px]'>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Download_on_the_App_Store_RGB_blk.svg/1200px-Download_on_the_App_Store_RGB_blk.svg.png" alt="" />
                            </div>
                            <div className='w-[119px] h-[40px]'>
                                <img src="https://static.tnn.in/thumb/msid-92594651,width-1280,height-720,resizemode-75/92594651.jpg" alt="" />
                            </div>
                        </div>
                        <div className='mt-8'>
                            <h2 className='text-xl'>Follow Us On</h2>
                            <ul className='list-none flex justify-around items-center mt-4 w-[150px]'>
                                <li className='text-[20px]'><FaInstagram /></li>
                                <li className='text-[20px]'><FaYoutube /></li>
                                <li className='text-[20px]'><FaLinkedin /></li>
                                <li className='text-[20px]'><FaTwitter /></li>
                                <li className='text-[20px]'><FaFacebook /></li>
                            </ul>
                        </div>
                    </nav>
                </footer>
            </div>

        </>
    )
}

export default Home