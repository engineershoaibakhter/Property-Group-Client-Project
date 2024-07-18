"use client"

import CentralPlaceSydney from "@/app/components/CentralPlaceSydney"
import CommercialCarousel from "@/app/components/CommercialCarousel"
import CommercialLocation from "@/app/components/CommercialLocation"
import CommercialProjectInfo from "@/app/components/CommercialProjectInfo"
import CommercialProjectMoreInfo from "@/app/components/CommercialProjectMoreInfo"
import CommercialService from "@/app/components/CommercialService"
import Gallery from "@/app/components/Gallery"


const craigieburn = () => {
  let companyName="Central Square Craigieburn";
  let locationSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.1505565089255!2d144.88961027527503!3d-37.59861552177166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65141017b6dbb%3A0xe9c14ec789587fe6!2s179%20Elevation%20Bvd%2C%20Craigieburn%20VIC%203064%2C%20Australia!5e0!3m2!1sen!2s!4v1721211562391!5m2!1sen!2s";
  let locationMap="https://maps.app.goo.gl/4hmfPqf3X3AWCSAf9";
  let contactUrl="https://www.pspproperty.com.au/property?property_id=1241993/179-elevation-boulevard-craigieburn";
  let location="179 Elevation Bvd, Craigieburn VIC 3064, Australia"
  return (
   <>
   <CommercialCarousel companyName={companyName}/>
   <CommercialProjectInfo companyName={companyName} locationMap={locationMap} contactUrl={contactUrl} location={location}/>
   <CommercialService />
   <CentralPlaceSydney companyName={companyName} />
   <CommercialProjectMoreInfo />
   <CommercialLocation locationSrc={locationSrc} companyName={companyName}/>
   <Gallery companyName={companyName}/>
   </>
  )
}

export default craigieburn