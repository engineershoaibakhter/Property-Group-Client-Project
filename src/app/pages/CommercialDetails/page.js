"use client"

import CentralPlaceSydney from "@/app/components/CentralPlaceSydney"
import CommercialCarousel from "@/app/components/CommercialCarousel"
import CommercialLocation from "@/app/components/CommercialLocation"
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
   <CommercialLocation />
   <Gallery />
   </>
  )
}

export default CommercialDetails