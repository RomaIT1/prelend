;(function(){
	function getUrlParameter(sParam){
		var sPageURL = window.location.search.substring(1);
		var sURLVariables = sPageURL.split('&');
		for (var i = 0; i < sURLVariables.length; i++)
		{
			var sParameterName = sURLVariables[i].split('=');
			if (sParameterName[0] == sParam)
			{
				return sParameterName[1];
			}
		}
		return '0';
	};

	var adult_param = getUrlParameter('e'); 
	if(adult_param === "1"){

		let div = document.createElement('div');
		let style = document.createElement('style');
		style.innerText = "body {overflow: hidden;}  .verification_overlay {display: block;  position: fixed;  top: 0;  left: 0;  background: #fff;   width: 100%;  height: 100%;  z-index: 10000000;  }   .verification {  position: absolute;  top: 50%;  left: 50%;  transform: translate(-50%, -50%);  margin-bottom: 24px;  font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;  -webkit-font-smoothing: antialiased;  color: #000000;  z-index: 100;  } .verification .plus18 {  text-align: center;  font-size: 50px;  letter-spacing: -4px;  font-weight: bold;  border: 10px solid #d30000;   border-radius: 50%;   height: 115px;  width: 115px;   box-sizing: border-box;  display: flex;  align-items: center;  justify-content: center;  margin: 0 auto; } .verification h2 {  margin-bottom: 24px;   padding: 0;  font-size: 40px;  font-weight: 300;   text-align: center;  line-height: 1;  }  .verification p { font-size: 16px;  font-weight: 200;  line-height: 1.2;  margin-bottom: 24px; text-align: center; }  .verification button { height: 52px;  margin-bottom: 64px;  max-width: 290px; min-width: 262px;  width: inherit; transition: 200ms cubic-bezier(.08, .52, .52, 1) background-color, 200ms cubic-bezier(.08, .52, .52, 1) box-shadow, 200ms cubic-bezier(.08, .52, .52, 1) transform; border-radius: 2px;  box-sizing: content-box;  font-size: 12px;  -webkit-font-smoothing: antialiased; font-weight: bold;  justify-content: center;  padding: 0 8px;  position: relative; text-align: center;  vertical-align: middle; line-height: 22px;  cursor: pointer;  text-decoration: none; background: #0084ff; color: #ffffff; align-items: center; border: none; box-shadow: none; display: flex; margin-left: auto; margin-right: auto; overflow: hidden; text-overflow: ellipsis; text-shadow: none;  white-space: nowrap; font-size: 16px; font-weight: bold; }"

		div.innerHTML = '<div id="verification_overlay" class="verification_overlay"> <div class="verification"> <div class="plus18">18+</div> <h2>?????????????????????????? ????????????????</h2> <p>???????? ???? ?????? 18 ???????</p> <button id="btn_verification" class="btn_verification">????</button> </div> </div>';
		document.body.prepend(div);
		document.body.prepend(style);

		var btn_verif_cust = document.getElementById("btn_verification");
		btn_verif_cust.addEventListener("click", function() {
			document.getElementById("verification_overlay").style.display = "none";
			document.querySelector("body").style.overflow = "visible";
		});
	};
})();
