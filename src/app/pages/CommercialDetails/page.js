"use client"

import CentralPlaceSydney from "@/app/components/CentralPlaceSydney"
import CommercialCarousel from "@/app/components/CommercialCarousel"
import CommercialProjectInfo from "@/app/components/CommercialProjectInfo"
import CommercialProjectMoreInfo from "@/app/components/CommercialProjectMoreInfo"
import CommercialService from "@/app/components/CommercialService"
import Gallery from "@/app/components/Gallery"


const CommercialDetails = () => {
  return (
   <>
   <CommercialCarousel />
   <CommercialProjectInfo />
   <CommercialService />
   <CentralPlaceSydney />
   <CommercialProjectMoreInfo />
   <Gallery />
   </>
  )
}

export default CommercialDetails