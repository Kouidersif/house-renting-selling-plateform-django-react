import { useEffect, useState } from "react"
import { axiosInstancePublic } from "../../../api/AxiosInstance";


const useFetchListing = () => {
    const [ listingOjbects , setListing ] = useState([]);
    const [ listingDetail, setListingDetail ] = useState({})
    const [ address, setAddress ] = useState("");
    const [ bedRoomsNum, setBedRoomsNum ] = useState("");
    const [ bathRoomsNum , setBathRoomsNum ] = useState("");
    const [ contractType, setContractType ] = useState("");
    const [ listingType , setListingType ] = useState("");



    const api = axiosInstancePublic
    const fetchListing = async () =>{
        try{
            // Public endpoint
            const query = `address=${address}&num_bath_rooms=${bathRoomsNum}&num_bed_rooms=${bedRoomsNum}&contract_type=${contractType}&listing_type=${listingType}`
                const response = await api.get(`/api/listing/?${query}`);
                setListing(response?.data)
        }catch(err){
            console.log("err:", err)
        }
    }

    const listingDetailFetch = async (listingID)=>{
        try{
                const response = await api.get(`api/listing/retrieve/${listingID}/`)
                setListingDetail(response?.data)
        }catch(err){
            console.log("err: ", err)
        }
    }

    useEffect(()=>{
        fetchListing()
    }, [address,
        bedRoomsNum,
        bathRoomsNum,
        contractType,
        listingType])

    return { listingOjbects, 
            setAddress,
            setBedRoomsNum,
            setBathRoomsNum,
            setContractType,
            setListingType,
            address,
            bedRoomsNum,
            bathRoomsNum,
            contractType,
            listingType, 
            listingDetailFetch, listingDetail }
}

export default useFetchListing