import React from 'react'
import ProfileCard from "./ProfileCard"



const experiences = [
  {
logo:"/image/logo EURL BOUFRADJI MOSTEFA.png" ,
  company:"EURL BOUFRADJI MOSTAFA",
  position:"Manager & Co-Founder",
  start:"1998",
  end:"Present",
  company_name:"EURL Boufradji Mostafa",
  legal_from:" EURL (Single-Member Limited Liability Company)",
  manager:"Boufradji Mostafa",
  date_of_creation:"1998",
  headquarters:"No. 03 Rue de la Résistance, Section 1 Lot 259, Wilaya of Chlef",
  capital:"15,656,660.00 DZD",
  main_buisness_sector:"Major Public Works and Hydraulics",
  core_activities:[
    "Earthworks",
    "Civil Engineeringstructure" ,
    "Hydraulic Structures",
    "Underground Works",
    "Maritime and River Works" ,
    "Railway Works",
    "Road and Airfield Works" ,
    "Urban works" ,
  ] ,
  secondary_activities:[
    "Quarrying",
    "Prefabrication of Concrete Elements and production of Ready-Mixed Concrete",
    "Sale of Construction Materials"
  ],


  },
  {
    logo: "/image/LOGO SARL  BOUF PRO IMMO.jpg",
    company: "SARL BOU PRO IMMO",
    position: "Manager & Co-Founder",
    company_name : "SARL BOU PRO IMMO",
    legal_from : "EURL (Single-Member Limited Liability Company)" ,
    manager :"Boufradji Mostafa and Boufradji Nassim (2nd Manager)" ,
    date_of_creation : "2017" , 
    headquarters :"Cité des fonctionnaires BT C2 n03 wilaya of Chlef",
    capital : "1000000,00DA",
    main_buisness_sector : "real estate development" ,
    start: "2017",
    end: "Present",
    
  },
  {
    logo: "/image/comagic logo png.png",
    company: "SARL COMAGIC",
    position: "Manager & Co-Founder",
    company_name : "SARL COMAGIC",
    legal_from :"EURL (Single-Member Limited Liability Company)" ,
    manager :"Boufradji Mostafa and Boufradji Nassim (2nd Manager)" ,
    date_of_creation : "08/01/2020" , 
    headquarters : "Cité des fonctionnaires BT A n05 Section 60 blocks 52 wilaya of Chlef",
    capital : "1000000.00 DZD",
    main_buisness_sector : " Major Public Works and Hydraulics." ,
    start: "2020",
    end: "Present",
    core_activities:[
    "Agri-food",
    "Agriculture" ,
    
  ] ,
  secondary_activities:[
    "Cattle breeding",
    "Packaging manufacturing",
    "Shopping center and amusement company"
  ],
  },
];

const profile = () => {
  return (
    <div>
      <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">
          Professional Experience
        </h2>

        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <ProfileCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default profile
