import React, { Component } from 'react';
import './Contact.css';

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
</div>


        </div>
    );
  }
}
