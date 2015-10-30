getWebProperties(); 

var webProperties; 
function getWebProperties() {
    var clientContext = new SP.ClientContext.get_current();
    webProperties = clientContext.get_web().get_allProperties();
    clientContext.load(webProperties);
    clientContext.executeQueryAsync(Function.createDelegate(this, this.getWebPropertiesSucceeded), Function.createDelegate(this, this.onQueryFailed));
}
 
function getWebPropertiesSucceeded() {
 
    var prop_astreet = "";
	var prop_azip = "";
	var prop_acity = "";
	var prop_aphone = "";
    var prop_acountry = "";
	
	var prop_gphone = "";
	var prop_gname = "";
	var prop_gemail = "";
	
	var prop_dmphone = "";
	var prop_dmname = "";
	var prop_dmemail = "";
	
	var prop_vmphone = "";
	var prop_vmname = "";
	var prop_vmemail = "";

 
 // shop information
    if(webProperties.get_fieldValues().a_street != undefined)
    {
         prop_astreet = webProperties.get_fieldValues().a_street;
    }
	
	if(webProperties.get_fieldValues().a_zip != undefined)
    {
         prop_azip = webProperties.get_fieldValues().a_zip;
    }
	if(webProperties.get_fieldValues().a_city != undefined)
    {
         prop_acity = webProperties.get_fieldValues().a_city;
    }
	
	if(webProperties.get_fieldValues().a_phone != undefined)
    {
         prop_aphone = webProperties.get_fieldValues().a_phone;
    }
    
    if(webProperties.get_fieldValues().a_country != undefined)
    {
         prop_acountry = webProperties.get_fieldValues().a_country;
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
    
    //VM Information
	if(webProperties.get_fieldValues().vm_phone != undefined)
    {
         prop_vmphone = webProperties.get_fieldValues().vm_phone;
    }
	if(webProperties.get_fieldValues().vm_name != undefined)
    {
         prop_vmname = webProperties.get_fieldValues().vm_name;
    }
	if(webProperties.get_fieldValues().vm_email != undefined)
    {
         prop_vmemail = webProperties.get_fieldValues().vm_email;
    }

    	
$('.sub-paragraph #street').text(prop_astreet);
$('.sub-paragraph #tdown').text(prop_azip + " " + prop_acity);
$('.sub-paragraph #country').text(prop_acountry);
$('#phoneblock #phone').text(prop_aphone);


$('#gerant #mail').attr('href',"mailto:"+prop_gemail);
$('#gerant #mail').text( prop_gname);
$('#gerant #phone').text(prop_gphone);

$('#districtmanager #mail').attr('href',"mailto:"+prop_dmemail);
$('#districtmanager #mail').text(prop_dmname);
$('#districtmanager #phone').text(prop_dmphone);

$('#vm #mail').attr('href',"mailto:"+prop_vmemail);
$('#vm #mail').text(prop_vmname);
$('#vm #phone').text(prop_vmphone);

}

 
function onQueryFailed(args, sender)
{
    
}