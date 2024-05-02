import React from "react"
import "./index.css"
import Languageoption from '../../components/language-dropdoown'
// import Slis from "./sliders"
// import aa from "../../../components/resources/images/home-img.jpg"
import { Link } from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import i18next from "i18next"
const Order2= () => {
  const {t} = useTranslation();
  const handleClick=(e)=>{
      i18next.changeLanguage(e.target.value)
  }
  return (
    <section>
    <div className='f ' id="1">

   
    <div className='z'>
      <div className='j'>
        <h1>{('Order')}</h1>
      </div>
      </div></div>
<div>
    
<Languageoption onChange={(e)=> handleClick(e)}/>
<h1> 
    {t('Aggrement Form')}...
  </h1>
  
<div className="a-6 a8">

    <p>{t('Seller:	Addis Hiwot Real Estate Development and Trading Plc, its address is Addis Ababa, Yeka Sub city, Woreda: 07, H. No: 0712; Near Adwa Bridge on KATEKS Engineering Building on the First Floor, Addis Ababa, Ethiopia,  Email: Addishiwotrealestate@gmail.com; Phone Contact: +251 116 686 999, Mobile: +251 992 920 450 +251 992 920 460; its General Manager, Mrs. Yeabsra Abebe H/Mariam /Citizenship Ethiopian/ Address: Addis Ababa; Yeka District/ Sub city; Woreda 7; House No. 0712 on the one hand and hereinafter referred to as the “seller or company”')}; </p>
                                				                                      <h3>       <pre>	                    and</pre></h3>
 
<h3>{t('Article One')}<br/>
{t('Purpose of this Contract Agreement')}

</h3>
<p>{t('The purpose of this agreement is to make a pre-construction contract agreements for the sale of one of the houses/ condominiums that will be built in the future to a buyer by the company described above as the real estate developer. The aim of this contractual agreement is to create mutual trust between the house developer company (the seller) and the buyer which is grounded by the laws of savings members.')}</p>
<h3>{t('Article Two')}<br/>
{t('Date and Place of Contract')}
</h3>
<p>{t('This contract for the sale of a house has been signed between the seller and the buyer on this day of 				 in Addis Ababa, Yeka sub-city (District), Worda 07, Office No 0712; in the office of the seller in the presence of witnesses.')}</p>
  <h3>{t('Article Three')}<br/>
{t('The Content of the Condominium')}
</h3>
<p>{t('The houses that the seller will build in Addis Ababa city are having 20-25 floors. The company plans to build four types of common houses. The size and type of the houses which are provided based on the interest of the beneficiary/ buyers which are mentioned as follows:')}</p>
<table class="table">
  <thead>
    <tr>
      <th scope="col">{t('s.no')}</th>
      <th scope="col">{t('S.No	The Type of the House to be Build (Scope of the Service)	House Area Allot	The Lowest Price Investigation	Remarks')}
</th>
      <th scope="col">{t('House Area Allot')}</th>
      <th scope="col">{t('he Lowest PriceInvestigation')}
</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{t('One-bedroom house apartment')} </td>
      <td>60-70 square meters </td>
      <td>3,500,000</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>{('Two-bedrooms apartment')} </td>
      <td> 	80-90 square meters</td>
      <td>4,500,000</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>3	{('Three bedrooms apartment')}</td>
      <td>100-110 square meters </td>
      <td>5,500,000	 </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>{t('Four bedrooms with especial size of apartment (a little bit luxury)')}
</td>
      <td>	120-130 {t('square meter ')}	6,500,000	 
</td>
      <td>6,500,000</td>
    </tr>
  </tbody>
</table>

<p>{('Meanwhile, if the buyer is interested to purchase a house that has a three-bedroom unit including common use, up to 90-100 square meters in area, the developer will hand over or transfer the house that has three-bedroom unit; two bathrooms, a living room and a kitchen after which  the work of the house is fully completed. Therefore, until the next final contract is amended by the buyer, the buyers choice will be ___________________ bedroom that is 		 meter square area.')}</p>
<h3>{t('Article Four')}<br/>
{t('Status of Transferring the House to the Buyer')}
</h3>
<p>{t('The status of the houses should be transferred from the seller to the buyer after all installation of work of electricity and water lines are fixed; after doors and windows’ works are properly completed; after the kitchens and bathrooms are ceramic tiled; after all living room floors’ tiles are accomplished. When each housed is up to standard, modern and comfortable to live in, and then these construction works finalized houses will be transferred to all buyers. Therefore, after all these requirements are completed, the houses will be handover to the buyer (member) who fulfills all obligations required by the seller as per the contract agreement described above.')}</p>
<h3>{t('Article Five')}<br/>
{t('The Cost Price of One House of the Apartments')}
</h3>
<p>{t('The total operating cost of the house or condominium will be estimated to be between 3.5 million to 8.5 million whether it is one-bedroom, or double bedroom or three bedrooms or four bedrooms, based on the actual market conditions of the countrys economy. However, if the countrys economic situation and the price of construction materials increase more than expected and a difficult situation happened, the company will make a reasonable price adjustments or revisions by openly communicate with the buyers who are saving to buy the houses or apartments.')}
</p>
<h3>{t('Article Six')}<br/>
{t('Contribution Payment Scheme')}
</h3>
<p>{t('Regarding the house construction payment strategy, based on a detailed price study of the construction cost of the above mentioned types of houses, the buyer will make a contract agreement with the company after paying a deposit (by saving an amount) of Birr 50,000.00 (fifty thousand Birr) in the closed bank account of arranged banks and by bring bank advice for depositing it. The house will be transfer to the buyer and will be beneficiary after the remaining the construction payment of the 30% (the construction cost of the house) should be deposited in the same way in closed bank account within two to three years without interrupting the saving schedule and only when the construction of the houses are completed. Therefore, the buyer should complete the payment within two years in a closed bank account according to the sellers schedule to inaugurate constructions.After the buyer completes the 30% (thirty percent) payment within two years, the remaining 70% (seventy percent) of construction cost amount, the bank loan will be arranged by seller (company) so as to complete the construction cost of the houses. The seller (developer) will negotiate and arrange the terms of the loan agreement with the bank and openly communicate with the buyers before making loan agreement with banks. The company will present and handover all documents regarding proportionate loan amount agreement with each house and the TITLE DEED of the intended house allotted to the buyer to start loan recovery payment as per bank schedule set by the bank. Accordingly, the buyer will pay this 70% construction cost amount as per the loan recovery payment schedule issued by the bank after the buyer owns the house.')}
</p>
<h3>{('Article Seven')}<br/>
{('Period Limit  to Transfer the House to The Buyer')}
</h3>
<p>{t('The house will be transferred to the buyer within three to four years after this house contract agreement is signed between the seller and the buyer. This will happen only when the buyer saves thirty percent (30%) of the entire construction period without interrupting the annual mandatory savings according to the program issued by the company and the bank and only when the construction work of the houses are fully completed.')}</p>
<h3>{t('Article Eight')}<br/>
{t('Owning Title Deed (Certificate) of the House')}
</h3>
<p>{t('The seller will arrange all necessary conditions for the preparation of the house title deed (ownership) confirmation certificate. This will happen when the buyer has paid fully the remaining 70% of construction cost.')}</p>
<h3>{t('Article Nine')}<br/>
{t('Implementation of Mandatory Savings')}
</h3>
<p>{t('A buyer should not fail to fulfill the mandatory saving that is expected every year. But if the buyer does not fulfill this obligation and stops saving or does not want to continue, and when this is disclosed to the company in written, the buyer will be terminated by taking the money he had saved earlier. The membership fee is non-refundable as it is used for office operation cost.')}</p>
<h3>{t('Article Ten')}<br/>
{t('The Condition to Use Houses in Common')}
</h3>
<p>{t('After the completion of the building and the houses are taken over, buyer will fulfill his or her obligations bylaws of the savings members approved through the company. It will also be subject to administrative orders issued by the building administration and residents established in accordance with the bylaws. He should refrain from any actions that violate the rights and freedom of other owners. It gives priority to good neighborhood.')}
</p>
<h3>{t('Article Eleven')}<br/>
{t('About Resolving Disputes')}
</h3>
<p>{t('If there is any dispute between the seller and the buyer in relation to the execution of this contract, efforts will be made to resolve it first through peaceful communication and discussion with the management of the company. If this is not possible, it will be resolved through the reconciliation and mediation sub-committee established under the company. ')}
</p>
<br/>
<p>{t('If not resolved by this, it will be referred to arbitration in Addis Ababa.')}</p>

<Link to="/Orderform" className=" a9  ">
             Next
              </Link><div>
{/* <Link to="/pricing/pricingspe">
             back
              </Link> */}

  </div>
  <div>
  </div>
  </div>
  </div>

</section>
  )}
  export default Order2