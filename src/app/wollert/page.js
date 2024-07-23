"use client"

import CentralPlaceSydney from "@/app/components/CentralPlaceSydney"
import CommercialCarousel from "@/app/components/CommercialCarousel"
import CommercialLocation from "@/app/components/CommercialLocation"
import CommercialProjectInfo from "@/app/components/CommercialProjectInfo"
import CommercialProjectMoreInfo from "@/app/components/CommercialProjectMoreInfo"
import CommercialService from "@/app/components/CommercialService"
import Gallery from "@/app/components/Gallery"


const Wollert = () => {
  let companyName="Central Square Wollert, VIC";
  let locationSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.268350411389!2d144.62685307528184!3d-37.71337852830657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6f38cf1c4aff5%3A0x7d9f6acd0ada7094!2sCentral%20Square!5e0!3m2!1sen!2s!4v1721211989146!5m2!1sen!2s";
  let contactUrl="https://www.pspproperty.com.au/property?property_id=1064509/2-sadie-avenue-thornhill-park"
  let locationMap="https://maps.app.goo.gl/FPkmKLqfQGH87KtL8";
  let location="2 Sadie Av, Thornhill Park VIC 3335, Australia";
  let pdfFile="/pdf/wollert.pdf"

  let paragraph1 =
  "A smartly designed residential subdivision over 8.16Ha in growth area of Wollert offers 129 residential lots and over 1Ha of green space. The lots will be released to the market for sale in coming months.";

let paragraph2 =
  "One of the standout features of this subdivision is its commitment to green space. Over 1 hectare of the development is dedicated to parks and recreational areas, ensuring residents have plenty of room to enjoy outdoor activities and connect with nature. These green spaces will serve as communal hubs, fostering a sense of community and providing a serene environment for relaxation and leisure. The incorporation of abundant green space reflects a modern approach to residential planning, prioritizing the well-being of the residents.";
let paragraph3 =
  "The residential lots in this subdivision will be released to the market for sale in the coming months. This upcoming release presents an exciting opportunity for prospective buyers to invest in a premium location that combines convenience, quality, and sustainability. The lots are designed to accommodate a variety of housing styles, allowing buyers to build homes that suit their preferences and needs. With the anticipated high demand, potential homeowners are encouraged to act swiftly to secure their desired lot.";

let point1 =
  "A smartly designed residential subdivision spanning 8.16 hectares in the rapidly growing area of Wollert promises a vibrant community living experience.";
let point2 =
  "This thoughtfully planned development comprises 129 residential lots, providing ample opportunities for families, first-time homebuyers, and investors to secure a spot in this thriving locale.";
let point3 =
  "The subdivision is strategically positioned to cater to the demand for quality housing in Wollert, which is known for its excellent amenities and growing infrastructure.";

let point4 =
  "As Wollert continues to grow, this subdivision will benefit from the expanding infrastructure and amenities in the area.";
let point5 =
  "The development is ideally situated to take advantage of new schools, shopping centers, and transport links that are being established to support the burgeoning population.";
let point6 =
  "Future residents will enjoy the perfect blend of suburban tranquility and urban convenience.";
let point7 =
  "Making this subdivision an attractive choice for those looking to build their dream home in a flourishing community.";



  return (
   <>
   <CommercialCarousel companyName={companyName}/>
   <CommercialProjectInfo
        companyName={companyName}
        locationMap={locationMap}
        contactUrl={contactUrl}
        location={location}
        pdfFile={pdfFile}
        paragraph1={paragraph1}
        point1={point1}
        point2={point2}
        point3={point3}
      /><CommercialService />
    <CentralPlaceSydney companyName={companyName} paragraph2={paragraph2} paragraph3={paragraph3}/>
    <CommercialProjectMoreInfo point1={point1} point2={point2} point3={point3} point4={point4} point5={point5} point6={point6} point7={point7}/>
   <CommercialLocation locationSrc={locationSrc} companyName={companyName}/>
   <Gallery companyName={companyName}/>
   </>
  )
}

export default Wollert