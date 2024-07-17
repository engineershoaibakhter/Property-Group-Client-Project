"use client"

import CentralPlaceSydney from "@/app/components/CentralPlaceSydney"
import CommercialCarousel from "@/app/components/CommercialCarousel"
import CommercialLocation from "@/app/components/CommercialLocation"
import CommercialProjectInfo from "@/app/components/CommercialProjectInfo"
import CommercialProjectMoreInfo from "@/app/components/CommercialProjectMoreInfo"
import CommercialService from "@/app/components/CommercialService"
import Gallery from "@/app/components/Gallery"


const thornhill = () => {
  let companyName="Central Square Thornhill Park";
  let locationSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.268350411389!2d144.62685307528184!3d-37.71337852830657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6f38cf1c4aff5%3A0x7d9f6acd0ada7094!2sCentral%20Square!5e0!3m2!1sen!2s!4v1721211989146!5m2!1sen!2s";
  let contactUrl="https://www.pspproperty.com.au/property?property_id=1064509/2-sadie-avenue-thornhill-park"
  let locationMap="https://maps.app.goo.gl/FPkmKLqfQGH87KtL8";
  return (
   <>
   <CommercialCarousel companyName={companyName}/>
   <CommercialProjectInfo companyName={companyName} locationMap={locationMap} contactUrl={contactUrl}/>
   <CommercialService />
   <CentralPlaceSydney companyName={companyName}/>
   <CommercialProjectMoreInfo />
   <CommercialLocation locationSrc={locationSrc} companyName={companyName}/>
   <Gallery companyName={companyName}/>
   </>
  )
}

export default thornhill