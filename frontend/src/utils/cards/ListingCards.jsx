import PropTypes from "prop-types";
import { Alerts, SmallFontParagraph } from '../../utils/exporter'


const ListingCards = ({dataObj, tag, specialClass}) => {
    return (
        <div className={`flex flex-col gap-4 mb-4 cursor-pointer hover:scale-110 duration-500 ${specialClass}`}>
            <div className="w-full lg:w-72 h-72 relative">
                <img src={"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg"}
                    alt="house-image" className="w-full h-full rounded-3xl object-cover" />
                <Alerts alert={tag} />
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-[1.3rem] font-semibold flex justify-between">
                <span className="text-slate-400">{dataObj?.contract_type?.toUpperCase()}</span> $ {dataObj?.property_price}</h3>
                <h4 className="text-[1rem] font-medium">{dataObj?.listing_title}</h4>
                <SmallFontParagraph text={dataObj?.address} />
            </div>
            <div className="flex items-center gap-4">
                <span className="flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={22}
                        viewBox="0 0 30 22"
                        fill="none"
                    >
                        <path
                            d="M25 4.5H12V12.0387H10.6154V9.47619C10.6138 8.02433 10.0363 6.63239 9.00971 5.60575C7.9831 4.57912 6.59117 4.00164 5.13931 4H2V0H0V21.5H2V18.5161L28 18.7241V21.5H30V9.5C29.9985 8.17438 29.4712 6.90348 28.5339 5.96613C27.5965 5.02877 26.3256 4.5015 25 4.5ZM2 6H5.13931C6.0609 6.00104 6.94445 6.3676 7.59611 7.01927C8.24777 7.67093 8.61433 8.55447 8.61537 9.47606V12.0386H2V6ZM28 16.724L2 16.516V14.0387H28V16.724ZM28 12.0387H14V6.5H25C25.7954 6.50091 26.5579 6.81727 27.1203 7.37968C27.6827 7.9421 27.9991 8.70463 28 9.5V12.0387Z"
                            fill="#2B2B2B"
                        />
                    </svg>
                    <SmallFontParagraph text="4 Beds" />
                </span>
                <span className="flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M22.4 13.2596H3.2V4.25964C3.19907 3.9207 3.26538 3.58495 3.39509 3.27182C3.5248 2.95868 3.71533 
                                                        2.67439 3.95565 2.43538L3.97565 2.41539C4.35228 2.03931 4.83584 1.78868 5.36026 1.69774C5.88468 1.6068 6.42438 1.67998 6.90565 1.90728C6.45114 2.66298 6.26222 3.5489 6.36892 4.42427C6.47562 5.29965 6.87181 6.11425 7.49455 6.73864L8.0421 7.28619L7.03425 8.29409L8.16555 9.42539L9.1734 8.41754L14.7579 2.83318L15.7657 1.82533L14.6344 0.693985L13.6264 1.70184L13.0789 1.15429C12.4233 0.50055 11.5592 0.0975642 10.637 0.0155515C9.71481 -0.0664612 8.79309 0.177699 8.03245 0.705485C7.23036 0.198942 6.27983 -0.0197366 5.33702 0.0853734C4.39422 0.190483 3.51519 0.613131 2.84435 1.28389L2.82435 1.30388C2.43497 1.69113 2.12627 2.15177 1.91611 2.65912C1.70595 3.16648 1.59851 3.71048 1.6 4.25964V13.2596H0V14.8596H1.6V16.3946C1.59997 16.5236 1.62077 16.6517 1.6616 16.7741L3.15 21.2391C3.22943 21.4781 3.38216 21.6861 3.5865 21.8334C3.79084 21.9807 4.0364 22.0598 4.2883 22.0596H4.9333L4.35 24.0596H6.01665L6.6 22.0596H17.005L17.605 24.0596H19.275L18.675 22.0596H19.7115C19.9634 22.0599 20.209 21.9807 20.4134 21.8334C20.6178 21.6861 20.7706 21.4782 20.85 21.2391L22.3383 16.7741C22.3791 16.6517 22.4 16.5236 22.4 16.3946V14.8596H24V13.2596H22.4ZM8.626 2.28563C9.0668 1.8458 9.66407 1.59878 10.2868 1.59878C10.9095 1.59878 11.5068 1.8458 11.9476 2.28563L12.495 2.83318L9.17355 6.15463L8.626 5.60718C8.18619 5.16638 7.93918 4.56911 7.93918 3.94641C7.93918 3.32371 8.18619 2.72644 8.626 2.28563ZM20.8 16.3296L19.4234 20.4596H4.5766L3.2 16.3296V14.8596H20.8V16.3296Z"
                            fill="#2B2B2B"
                        />
                    </svg>

                    <SmallFontParagraph text="2 Bath" />
                </span>


            </div>
        </div>
    )
}
ListingCards.propTypes = {
    dataObj: PropTypes.object.isRequired,
    tag: PropTypes.string.isRequired,
    specialClass: PropTypes.string.isRequired,
}
export default ListingCards