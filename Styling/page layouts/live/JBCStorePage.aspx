<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=16.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content ContentPlaceholderID="PlaceHolderAdditionalPageHead" runat="server">
	<SharePointWebControls:CssRegistration name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server"/>
	<SharePointWebControls:CssRegistration name="<% $SPUrl:~sitecollection/_catalogs/masterpage/JBC/CSS/jbc-StorePageLayout.css %>" After="corev15.css" runat="server"/>
	
	<!-- TODO Change to local files -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
	
	<script src="https://code.jquery.com/jquery-2.1.4.min.js" type="text/javascript"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	
	<!-- TODO relative link, not absolute -->
	<script src="https://jbcbe.sharepoint.com/sites/stores/_catalogs/masterpage/JBC/JS/jbc-store.js" type="text/javascript"></script>
	
	<PublishingWebControls:EditModePanel runat="server">
		<!-- Styles for edit mode only-->
		<SharePointWebControls:CssRegistration name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/editmode15.css %>"
			After="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server"/>
	</PublishingWebControls:EditModePanel>
	<SharePointWebControls:FieldValue id="PageStylesField" FieldName="HeaderStyleDefinitions" runat="server"/>
</asp:Content>
<asp:Content ContentPlaceholderID="PlaceHolderPageTitle" runat="server">
	<SharePointWebControls:FieldValue id="PageTitle" FieldName="Title" runat="server"/>
</asp:Content>
<asp:Content ContentPlaceholderID="PlaceHolderPageTitleInTitleArea" runat="server">
	<SharePointWebControls:FieldValue FieldName="Title" runat="server"/>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderTitleBreadcrumb" runat="server"> <SharePointWebControls:ListSiteMapPath runat="server" SiteMapProviders="CurrentNavigationSwitchableProvider" RenderCurrentNodeAsLink="false" PathSeparator="" CssClass="s4-breadcrumb" NodeStyle-CssClass="s4-breadcrumbNode" CurrentNodeStyle-CssClass="s4-breadcrumbCurrentNode" RootNodeStyle-CssClass="s4-breadcrumbRootNode" NodeImageOffsetX=0 NodeImageOffsetY=289 NodeImageWidth=16 NodeImageHeight=16 NodeImageUrl="/_layouts/15/images/fgimg.png?rev=40" HideInteriorRootNodes="true" SkipLinkText="" /> </asp:Content>
<asp:Content ContentPlaceholderID="PlaceHolderMain" runat="server">
	<div class="sassy-nav-button">
		<button type="button" class="sassy-toggle collapsed" data-toggle="collapse" data-target="#DeltaTopNavigation" aria-expanded="false">
        	<span class="icon-bar"></span>
        	<span class="icon-bar"></span>
        	<span class="icon-bar"></span>
      	</button>
	</div>
	
	<div class="row">
		<div class="col-md-12">
			<div class="jbc-pageimage">
				<WebPartPages:WebPartZone id="g_D82265B6E37E4C6984C0C394AA49949D" runat="server" title="Page Image zone"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
			</div>
		</div>
	</div>
	<div class="row row-no-padding">
		<div class="col-md-3">
			<div class="jbc-graybox jbc-contactzone">
				<h2 class="ms-webpart-titleText"><nobr><span>Contact Information</span></nobr></h2>
				<div id="general" class="paragraph">
					<div class="adress" class="paragraph">
						<i class="fa fa-home"></i>
						<div class="sub-paragraph">
							<div id="street"></div>
							<div id="town"></div>
							<div id="country"></div>
						</div>
					</div>
					<div id="phoneblock">
						<i class="fa fa-phone"></i>
						<div id="phone" class="sub-paragraph"></div>
					</div>
				</div>
				<div id="gerant" class="paragraph">
					<h5>Gerant</h5>
					<div>
						<i class="fa fa-envelope"></i><div id="name" class="sub-paragraph"><a id="mail" href=""></a></div>
						<i class="fa fa-phone"></i><div id="phone" class="sub-paragraph"></div>
					</div>
				</div>
				<div id="districtmanager" class="paragraph">
					<h5>District Manager</h5>
					<div>
						<i class="fa fa-envelope"></i><div id="name" class="sub-paragraph"><a id="mail" href=""></a></div>
						<i class="fa fa-phone"></i><div id="phone" class="sub-paragraph"></div>
					</div>
				</div>
				<div id="vm" class="paragraph">
					<h5>Visual Merchandiser</h5>
					<div>
						<i class="fa fa-envelope"></i><div id="name" class="sub-paragraph"><a id="mail" href=""></a></div>
						<i class="fa fa-phone"></i><div id="phone" class="sub-paragraph"></div>
					</div>
				</div>
				
				<WebPartPages:WebPartZone id="g_D82265B6E37E4C6984C0C394AA49949E" runat="server" title="Contact Info zone"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
			</div>
		</div>
		<div class="col-md-6">
			<div class="">
				<WebPartPages:WebPartZone id="g_D82265B6E37E4C6984C0C394AA49949F" runat="server" title="Google map zone"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
			</div>
		</div>
		<div class="col-md-3">
			<div class="jbc-yellowbox">
				<WebPartPages:WebPartZone id="g_D82265B6E37E4C6984C0C394AA49949G" runat="server" title="Contact zone"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-md-6">
			<div class="">
				<WebPartPages:WebPartZone id="g_D82265B6E37E4C6984C0C394AA49949H" runat="server" title="Documents zone"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
			</div>
		</div>
		<div class="col-md-6">
			<div class="">
				<WebPartPages:WebPartZone id="g_D82265B6E37E4C6984C0C394AA49949I" runat="server" title="Newsfeed zone"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
			</div>
		</div>
	</div>
    <footer id="jbc-footer">
		<div id="marginrow"></div>
		<div id="footerrow">
			<div id="left-links">
				<a href="https://www.jbc.be/" target="_blank">E-Shop</a>
				<a href="http://jobs.jbc.be" target="_blank">Jobs</a>
				<a href="https://jbcbe.sharepoint.com/about/Pages/Contacts-JBC-HQ.aspx" target="_blank">Contact us</a>			
			</div>
			<div id="social">
				<a href="https://www.facebook.com/jbcfashion" class="social-fb" target="_blank"><i class="fa fa-facebook"></i></a>
				<a href="https://twitter.com/jbcfashion" class="social-twit" target="_blank"><i class="fa fa-twitter"></i></a>
				<a href="https://www.pinterest.com/jbcfashion/" class="social-pin" target="_blank"><i class="fa fa-pinterest-p"></i></a>
				<a href="https://instagram.com/jbcfashion/" class="social-inst" target="_blank"><i class="fa fa-instagram"></i></a>
				<a href="https://www.jbc.be/nl/jbc/jbc-app" class="social-app" target="_blank"><img src="https://jbcbe.sharepoint.com/_catalogs/masterpage/JBC/IMG/app.png" style="margin-top:-5px;" /></i></a>
                <div id="text">
				    Centrum-Zuid 3401, 3530 Houthalen
			    </div>
			</div>
            <div id="logo">
                <img src="https://jbcbe.sharepoint.com/_catalogs/masterpage/JBC/IMG/logo-wit.png" class="img-responsive logo" alt="JBC" />
            </div>
			
		</div>
	</footer>
</asp:Content>
