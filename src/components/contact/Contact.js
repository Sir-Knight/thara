import React, { Component } from 'react';
import './Contact.css';
import tharaicon from './thara_logo.png';
import tescoicon from './tesco_logo.png';
import officeicon from './office_logo.png';

export default class Contact extends Component {
  constructor(props) {
  super(props);
}
  render() {
    return (
        <div className="Contact">

<div id="container">
   <div id="demo">

  <h1 className="padabove">
   ติดต่อเรา
  </h1>
  </div>

  <div id="contact-wrap">
		<div id="contact-area">

			<form method="post" action="contactengine.php">


				<input type="text" name="Name" id="Name" placeholder="ชื่อ นามสกุล" />

				<input type="text" name="City" id="City" placeholder="ที่อยู่"/>

				<input type="text" name="Email" id="Email" placeholder="อีเมลล์"/>

				<input type="text" name="Phone" id="Phone" placeholder="เบอร์โทรศัพ"/>

				<textarea name="Message" rows="20" cols="20" id="Message" placeholder="ข้อความ"></textarea>

				<input type="submit" name="submit" value="Submit" class="submit-button"/>
			</form>
        </div>
     </div>
     <div className="company">
       <div className="office">
        <img src={officeicon}  className="office" alt="office" />
        <p>สำนักงานสิ่งแวดล้อมและการมีส่วนร่วมของประชาชน
            2/486 ถนนศรีอยุธยา แขวงทุ่งพญาไท
            เขตราชเทวี กรุงเทพมหานคร  10400</p>
<p>โทรศัพท์ : ๐ ๒๓๕๔ ๖๗๗๗</p>
<p>โทรสาร : ๐ ๒๓๕๔ ๖๗๗๗</p>
       </div>

       <div className="thara">
       <img src={tharaicon}  className="thara" alt="thara" />
       <p>บริษัท ธารา ไลน์ จำกัด
113 ซอยรัตนาธิเบศร์ 24 ถนนรัตนาธิเบศร์
ตำบลบางกะสอ อำเภอเมืองนนทบุรี จังหวัดนนทบุรี 1100</p>
<p>งานด้านสิ่งแวดล้อม</p>
<p>นายก้องเกียรติ  เรื่องศรี</p>
<p>โทรศัพท์ : 0 2017 7281 – 2,</p>
<p>09 7148 0176</p>
<p>โทรสาร : 0 2017 7882</p>
<p>งานด้านการมีส่วนร่วมของประชาชน</p>
<p>นายอภิเชษฐ์  ปานุรัตน์</p>
<p>โทรศัพท์ : 0 2017 7281 – 2,</p>
<p>06 2698 7072</p>
<p>โทรสาร : 0 2017 7882</p>
       </div>
       <div className="tesco">
       <img src={tescoicon}  className="tesco" alt="tesco" />
       <p>บริษัท เทสโก้ จำกัด
21/11-14 ซอยสุขุมวิท 18 ถนนสุขุมวิท
แขวงคลองเตย  เขตคลองเตย กรุงเทพมหานคร 10110</p>
<p>งานด้านวิศวกรรม</p>
<p>นางสาวจันทศิริ  สายนภา</p>
<p>โทรศัพท์ : 0 2258 1320 ต่อ 608,</p>
<p> 09 0678 6759</p>
<p>โทรสาร : 0 258 1313</p>
       </div>
     </div>
</div>


        </div>
    );
  }
}
