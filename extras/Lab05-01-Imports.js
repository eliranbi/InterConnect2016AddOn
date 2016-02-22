//adding call to mfp server ...          
            WL.Client.connect({
	     		onSuccess: function(rsp){
                    console.log(">> WL.Client.connect() -  onSuccess :" + rsp);
                },
	     		onFailure: function(rsp){
                    console.log(">> WL.Client.connect() -  onFailure :" + rsp);
                }
			 });        