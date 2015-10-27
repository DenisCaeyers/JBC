getWebProperties(); 

var webProperties; 
function getWebProperties() {
    var clientContext = new SP.ClientContext.get_current();
    webProperties = clientContext.get_web().get_allProperties();
    clientContext.load(webProperties);
    clientContext.executeQueryAsync(Function.createDelegate(this, this.getWebPropertiesSucceeded), Function.createDelegate(this, this.onQueryFailed));
}
 
function getWebPropertiesSucceeded() {
    var allProps = webProperties.get_fieldValues();
 
    var prop_astreet = "";
	var prop_azip = "";
	var prop_acity = "";
	var prop_aphone = "";
	
	var prop_gphone = "";
	var prop_gname = "";
	var prop_gemail = "";
	
	var prop_dmphone = "";
	var prop_dmname = "";
	var prop_dmemail = "";
 
 // shop information
    if(webProperties.get_fieldValues().a_street != undefined)
    {
         prop_astreet = webProperties.get_fieldValues().a_street;
    }
	
	if(webProperties.get_fieldValues().a_city != undefined)
    {
         prop_azip = webProperties.get_fieldValues().a_city;
    }
	if(webProperties.get_fieldValues().a_zip != undefined)
    {
         prop_acity = webProperties.get_fieldValues().a_zip;
    }
	
	if(webProperties.get_fieldValues().a_phone != undefined)
    {
         prop_aphone = webProperties.get_fieldValues().a_phone;
    }
	
	//end shop information
	//gerant information 

	
	if(webProperties.get_fieldValues().g_phone != undefined)
    {
         prop_gphone = webProperties.get_fieldValues().g_phone;
    }
	if(webProperties.get_fieldValues().g_name != undefined)
    {
         prop_gname = webProperties.get_fieldValues().g_name;
    }
	if(webProperties.get_fieldValues().g_email != undefined)
    {
         prop_gemail = webProperties.get_fieldValues().g_email;
    }
	
	//end gerant information
	//DM Information
	if(webProperties.get_fieldValues().dm_phone != undefined)
    {
         prop_dmphone = webProperties.get_fieldValues().dm_phone;
    }
	if(webProperties.get_fieldValues().dm_name != undefined)
    {
         prop_dmname = webProperties.get_fieldValues().dm_name;
    }
	if(webProperties.get_fieldValues().dm_email != undefined)
    {
         prop_dmemail = webProperties.get_fieldValues().dm_email;
    }
	var replaced = $("body").html().replace('#astreet#',prop_astreet);
$("body").html(replaced);
	//alert(prop_astreet + " " + " " + prop_acity + " "+ prop_azip);
	//alert(prop_gphone + " " + " " + prop_gname + " "+ prop_gemail);
		//alert(prop_dmphone + " " + " " + prop_dmname + " "+ prop_dmemail);
}

 
function onQueryFailed(args, sender)
{
    
}