import { ButtonRadius } from '../../../utils/exporter'
import InputField from '../../../utils/inputs/InputField'
import useGetAppContext from "../../../../context/useGetAppContext"
import { useEffect, useState } from 'react'
import useFetchUpdateProfile from '../../../hooks/profile/useFetchUpdateProfile'
import useRequestVisit from '../../../hooks/listing/useRequestVisit'
import propTypes from "prop-types";


const VisitRequestForm = ({landlordID, listingID}) => {
    const { userObj, decodedToken, setErrorApi } = useGetAppContext()
    const { sendRequestVisit } = useRequestVisit()
    const { account } = useFetchUpdateProfile()
    const [ userPhone, setUserPhone ] = useState("");
    const [ userEmail, setUserEmail ] = useState("");
    const [ textMessage, setTextMessage ] = useState("");
    const [ visiteDate, setVisiteDate ] = useState("");


    const tenantID = decodedToken?.tenant_profile_id
    useEffect(()=>{
        if(account && account?.tenant){
            setUserPhone(account?.tenant?.phonne_number || "" )
            setUserEmail(account?.email || "")
        }
    }, [account])

    const handleFormSubmit = (e)=>{
        e.preventDefault()
        if (visiteDate && textMessage && userPhone && userEmail){
            const formData = new FormData()
            formData.append("landlord_id", landlordID)
            formData.append("tenant_id", tenantID)
            formData.append("listing_obj_id", listingID)
            formData.append("message", textMessage)
            formData.append("request_status", "Sent")
            formData.append("date_visit", visiteDate)
            sendRequestVisit(formData)
        }else{
            return setErrorApi("All fields are required")

        }
        

    }

    return (
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
                    <InputField labelName={"Email"} placeHolder={"Your email"} inputID={"userEmail"} onChangeFunc={setUserEmail} inputType={"email"} value={userEmail} />
                    <InputField labelName={"Phone number"} placeHolder={"Your phone number"} onChangeFunc={setUserPhone} 
                    inputID={"userPhoneNum"} inputType={"tel"} value={userPhone} />

                    <InputField labelName={"Visit date"} placeHolder={"Set visit Date"} onChangeFunc={setVisiteDate} 
                    inputID={"visitDate"} inputType={"datetime-local"} value={visiteDate} />
                    <textarea value={textMessage} className="border-2 rounded-md px-2 py-1" onChange={(e)=> setTextMessage(e.target.value)} 
                    rows={5} placeholder="Type your message">
                    </textarea>
                    {/* Filter */}
                </div>
                {
                    userObj?.access && tenantID ?
                        <ButtonRadius handleButtonClick={handleFormSubmit} text={`Send message`} styleClass="bg-primary py-2 text-white hover:bg-white hover:text-primary border-2 border-primary" />
                        :
                        <h6 className="text-center text-red-600">You must be logged in as Tenant to send a visit request</h6>
                }
            </div>
        </form>
    )
}

VisitRequestForm.propTypes = {
    landlordID: propTypes.number,
    listingID: propTypes.number,
}


export default VisitRequestForm