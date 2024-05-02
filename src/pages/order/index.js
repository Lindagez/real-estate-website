import React from "react"
import "./index.css"
import Languageoption from '../../components/language-dropdoown'
// import Slis from "./sliders"
// import aa from "../../../components/resources/images/home-img.jpg"
import { Link } from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import i18next from "i18next"
const Order= () => {
  const {t} = useTranslation();
  const handleClick=(e)=>{
      i18next.changeLanguage(e.target.value)
  }
  return (
    <section>
    <div className='f ' id="1">

   
    <div className='z'>
      <div className='j'>
        <h1>Order</h1>
      </div>
      </div></div>
<div>
<Languageoption onChange={(e)=> handleClick(e)}/>

  <h1> 
    {t('Aggrement Form')}...
  </h1>
  <div className="a-6 a8">
  <p >
        <h1>  {t( "the purpose of the form ")}፤ </h1><br/>
       {t('This form is intended to collect members’ information below with the aim of creating mutual trust between the houses’ developer company and the member buyer in order to make a pre-construction contract agreement to purchase the apartments or houses that are built in the future')}
     <br/>   {t('A) General Information to be known by the Buyers')}<br/>
1.	{t('In order to be able to buy one of the houses, a registration fee of 5,000.00 (five thousand) should be paid.')}
<br/>2.	{t('The obligation of a registered buyer to purchase houses should be only when he can save the first round of savings of 50,000.00 Birr (fifty thousand Birr) and the remaining payment should be according to the savings account determined by the construction rate.')}
<br/>
3.{t('If a person who is registered to buy houses want to withdraw from membership, the member has the right to take the money he saved for construction other than the money spent on registration and documentation.')}
<br/>4.{t('If a member who has left the association wants to come back and register as a member, he could pay according to the rate of money issued by the organization at the time.')}
<br/>5.{t('The buyer should bring four Pass port size Photo and legal document can use to identify the name of a person;')}
{/* ሐ) ቃለ መኃላ
ከላይ የተጠቀሱት የግል መረጃዎቼ ትክክልና ከአዲስ ሕይወት ሪል እስቴት ልማትና ትሬዲንግ ኃ/የተ/የግ/ማህበር የተሰጡትን ጠቅላላ መረጃ የተገነዘብኩና<br/>
 የተረዳው ሲሆን የድርጅቱን መተዳደሪያ ደንብ በማክበር መብትና ግዴታዬን አውቄ ለመፈጸም እና ለማስፈጸም ቃል መግባቴን ከዚህ በታች ስሜንና ፊርማዬን<br/>
  በማስቀመጥ (በመጻፍ) አረጋግጣለሁ፡፡ ይህ በእንዲህ እንዳለ በጋራ መኖሪያ ቤት ቆጥቤ ለመስራት፣ በአዲስ ሕይወት ሪል እስቴት ልማትና ትሬዲንግ ኃ/የተ/የግ/ማህበር <br/>
  ውስጥ ያለኝን ድርሻ፣ ጥቅማ ጥቅም እና ዕዳዬን፤<br/> */}
 

</p>
<Link to="/Orderform" className=" a9  ">
             Next
              </Link><div>
{/* <Link to="/pricing/pricingspe">
             back
              </Link> */}
  </div>
  <div>

  </div>
</div> </div>

</section>
  )}
  export default Order