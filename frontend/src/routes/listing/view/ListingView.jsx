import { ButtonRadius } from "../../../utils/exporter"
import InputField from "../../../utils/inputs/InputField"
import SelectInput from "../../../utils/select/SelectInput"


const ListingView = () => {
    return (
        <div className="w-[95%] xl:w-[80%] mx-auto py-8 lg:py-16 px-4">
            <div className="flex justify-end items-center gap-4 px-4 mb-4">
                <h5 className="text-slate-500">Save 💛</h5>
                <h5 className="text-slate-500">Share 🌐</h5>
            </div>

            <div className="flex flex-wrap overflow-hidden">
                <div className="w-[66.6%] flex-grow-0 flex-shrink-0 flex-auto px-2">
                    <img src="https://htmlstream.com/preview/front-v4.3.1/assets/img/900x455/img1.jpg"
                        alt="" className="w-full h-auto rounded-s-xl" />
                </div>
                <div className="w-[33.3%] inline-block flex-grow-0 flex-shrink-0 flex-auto px-2">
                    <div className="w-full mb-3">
                        <img src="https://htmlstream.com/preview/front-v4.3.1/assets/img/450x225/img1.jpg"
                            className="w-full h-auto rounded-tr-xl" alt="" />
                    </div>
                    <div className="w-full">
                        <img src="https://htmlstream.com/preview/front-v4.3.1/assets/img/450x225/img2.jpg"
                            className="w-full h-auto rounded-br-xl" alt="" />
                    </div>
                </div>
            </div>
            <h6 className="text-end mt-4"><b>Published: </b><span className="text-slate-500">December 27, 2018</span></h6>
            <div className="relative flex gap-12 flex-wrap lg:flex-nowrap py-8 lg:py-16 border-b-2">
                <div className="w-full lg:w-[66.6%] flex flex-col gap-12 lg:gap-4 border-b-2 pb-4">
                    <div className="flex flex-wrap justify-between lg:justify-normal lg:flex-nowrap items-center gap-4 lg:gap-48">
                        <address className="not-italic"><span className="text-3xl font-semibold">470 Lucy Forks</span>
                            <br /><span className="font-light text-lg text-slate-500">Patriciafurt, YC7B, London, England</span></address>
                        <h4 className="font-semibold text-2xl">$ 5000 / mo <br />
                            <span className="text-lg font-light text-slate-500">3 bed - 2 bath - 1,428 sqft</span>
                        </h4>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="text-xl font-semibold">Home details:</h3>
                        <div className="flex items-center flex-wrap lg:flex-nowrap gap-4 lg:gap-48">
                            <ul className="w-full lg:w-1/2 flex flex-col gap-3">
                                <li className="text-xl flex justify-between"><span className="font-medium">Room :</span> <span className="text-lg text-slate-500">1,428 sq.m.</span></li>
                                <li className="text-xl flex justify-between"><span className="font-medium">Room :</span> <span className="text-lg text-slate-500">1,428 sq.m.</span></li>
                                <li className="text-xl flex justify-between"><span className="font-medium">Room :</span> <span className="text-lg text-slate-500">1,428 sq.m.</span></li>
                            </ul>
                            <ul className="w-full lg:w-1/2 flex flex-col gap-3">
                                <li className="text-xl flex justify-between"><span className="font-medium">Room :</span> <span className="text-lg text-slate-500">1,428 sq.m.</span></li>
                                <li className="text-xl flex justify-between"><span className="font-medium">Room :</span> <span className="text-lg text-slate-500">1,428 sq.m.</span></li>
                                <li className="text-xl flex justify-between"><span className="font-medium">Room :</span> <span className="text-lg text-slate-500">1,428 sq.m.</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t-2 border-b-2 py-5">
                        <div className="flex justify-between gap-4 lg:gap-0 lg:justify-around flex-wrap">
                            <h6 className="font-semibold"><span className="text-slate-500 font-medium">Last 30 days</span>: 920 page views</h6>
                            <h6 className="font-semibold"><span className="text-slate-500 font-medium">Last 30 days</span>: 920 page views</h6>
                        </div>
                    </div>
                    <div className="py-8">
                        <h5 className="font-semibold text-xl mb-4">Description</h5>
                        <p className="max-w-full text-slate-500 text-base">
                            This extremely spacious two/three bedroom duplex apartment occupies a desirable position to the South-West of Harrogate{"'"}s town centre and offers a huge amount of scope to update and re-model to suit the individual
                            including a large eaves storage room ripe for conversion into a second bathroom.
                            <br />
                            <br />

                            Accessed via a communal hall up to the first floor, the apartment opens into a split level hall. To the front elevation
                            there is a lovely, light and airy lounge with far reaching views towards the town centre and countryside beyond. Adjoining there is a well proportioned double bedroom with a fitted wardrobe.
                        </p>
                    </div>
                    <div className="pt-6 border-t-2">
                        <h4 className="mb-4">Agent:</h4>
                        <div className="flex gap-4">
                            <div>
                                <img className="w-24 h-24 " src="https://htmlstream.com/preview/front-v4.3.1/assets/img/160x160/img6.jpg" alt="Bordered avatar" />
                            </div>
                            <div className="flex flex-col justify-between">
                                <h3 className="font-medium text-xl">O{"'"}Brian Cox</h3>
                                <a href="" className="text-slate-500">📞 +1 416 346 8780</a>
                                <p className="font-medium text-primary cursor-pointer">📨 Contact agent</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <aside className="w-full sm:w-[70%] mx-auto lg:w-[33.3%] sticky top-24 self-start ">
                <form className="bg-white pb-16 pt-6 rounded-md shadow-lg">
                <div className="w-4/5 mx-auto flex flex-col gap-12">
                    <div className="flex gap-2 items-center">
                            <div>
                                <img className="w-16 h-16 rounded-full " src="https://htmlstream.com/preview/front-v4.3.1/assets/img/160x160/img6.jpg" alt="Bordered avatar" />
                            </div>
                            <h4 className="font-semibold">Ask me for more information</h4>
                    </div>
                    {/* Form start */}
                    <div className="w-full mx-auto flex flex-col gap-6">
                        {/* Input  */}
                        <InputField labelName={"Full name"} placeHolder={"Your name"} inputID={"userFullName"} inputType={"text"}  />
                        <InputField labelName={"Email"} placeHolder={"Your email"} inputID={"userEmail"} inputType={"email"}  />
                        <InputField labelName={"Phone number"} placeHolder={"Your phone number"} inputID={"userPhoneNum"} inputType={"tel"}  />
                        {/* DropDown */}
                        <SelectInput selectID={"contactReason"} labelName={"Reason"} optionsValue={"Request to see ..."} />
                        <textarea className="border-2 rounded-md px-2 py-1" rows={5} placeholder="Type your message">

                        </textarea>
                        {/* Filter */}
                    </div>
                    <ButtonRadius text={`Send message`} styleClass="bg-primary py-2 text-white hover:bg-white hover:text-primary border-2 border-primary" />
                </div>
            </form>
                </aside>
            </div>
        </div>
    )
}

export default ListingView