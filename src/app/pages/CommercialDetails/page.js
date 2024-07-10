"use client"

import CentralPlaceSydney from "@/app/components/CentralPlaceSydney"
import CommercialCarousel from "@/app/components/CommercialCarousel"
import CommercialProjectInfo from "@/app/components/CommercialProjectInfo"
import CommercialService from "@/app/components/CommercialService"


const CommercialDetails = () => {
  return (
   <>
   <CommercialCarousel />
   <CommercialProjectInfo />
   <CommercialService />
   <CentralPlaceSydney />
   </>
  )
}

export default CommercialDetails