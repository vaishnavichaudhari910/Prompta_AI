import React, { useEffect, useState } from "react";
import { dummyCreationData } from "../assets/assets";
import { Crown, Gem, Sparkles } from "lucide-react";
import { Protect, useAuth } from "@clerk/clerk-react";
import CreationItem from "../components/CreationItem";
import axios from "axios";
import toast from "react-hot-toast";
import { FileText } from "lucide-react";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
const Dashboard = () => {
  const [creation, setCreations] = useState([]);
  const [loading, setLoading] = useState(true);
  const {getToken} = useAuth()

  const getDashboardData = async () => {
    try {
      const { data } = await axios.get("/api/user/get-user-creations", {
        headers: {
          Authorization: `Bearer ${await getToken()}`}
       }) 
       if(data.success){
        setCreations(data.creations)
        
      }else{
        toast.error(data.message)
      }
      
        
    
    } catch (error) {
        toast.error(error.message)
      
    }
    setLoading(false);
  };
  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <div className="h-full overflow-y-scroll p-6">
      <div className="flex justify-start gap-4 flex-wrap">
     


{/* Total Creation card */}
<div className="flex justify-between items-center w-72 p-4 px-6 rounded-xl bg-gradient-to-r from-[#E8F5FF] to-[#F3FBFF] shadow-md">
  {/* Left Side */}
  <div className="text-slate-600">
    <p className="text-sm text-blue-500 font-medium">Total Creation</p>
    <h2 className="text-3xl font-bold text-blue-700">{creation.length}</h2>
  </div>

  {/* Right Icon */}
  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3588F2] to-[#0BB0D7] flex justify-center items-center shadow-sm">
    <FileText className="w-6 h-6 text-white" />
  </div>
</div>

     
             {/* Active plan Card */}
        {/* <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200">
          <div className="text-slate-600">
            <p className="text-sm">Active Plan</p>
            <h2 className="text-xl font-semibold">
              <Protect plan='premium' fallback="Free">Premium</Protect>
            </h2>
          </div>
          <div
            className="w-10 h-10 rounded-1g bg-gradient-to-br from-[#FF61C5]
to-[#9E53EE] text-white flex justify-center items-center"
          >
            <Gem className="w-5 text-white" />
          </div>
        </div> */}

        {/* Active plan Card */}
<div className="flex justify-between items-center w-80 p-5 bg-gradient-to-br from-[#fff0f8] to-[#f9f0ff] rounded-2xl border border-[#e5d4fa]">
  <div className="text-purple-700">
    <p className="text-sm">Active Plan</p>
    <h2 className="text-2xl font-bold">
      <Protect plan="premium" fallback="Free">Premium</Protect>
    </h2>
  </div>
  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF61C5] to-[#9E53EE] flex justify-center items-center shadow-md">
    <Crown className="w-6 h-6 text-white" />
  </div>
</div>


      </div>
      {
        loading ?
        (
                <div className="flex justify-center items-center h-3/4">
                  <div className="animate-spin rounded-full h-11 w-11 border-3 border-purple-500 bprder-t-transparent">

                  </div>
                </div>
        )
        : (
           <div className="space-y-3">
          <p className="mt-6 mb-4">History</p>
          {
            creation.map((item) => 
              <CreationItem key={item.id} item={item} />
            )
          }
      </div>
        )
      }
 
     
            
    </div>
  );
};

export default Dashboard;




















