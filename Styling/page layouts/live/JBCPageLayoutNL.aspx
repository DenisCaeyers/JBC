<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=16.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" %>
    <%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
        <%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
            <%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
                <%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
                    <asp:Content ContentPlaceholderID="PlaceHolderAdditionalPageHead" runat="server">
                        <SharePointWebControls:CssRegistration name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>"
                            runat="server" />
                        <SharePointWebControls:CssRegistration name="<% $SPUrl:~sitecollection/_catalogs/masterpage/JBC/CSS/jbc-HeaderDoubleColumnPageLayout.css %>"
                            After="corev15.css" runat="server" />
                        <SharePointWebControls:CssRegistration name="<% $SPUrl:~sitecollection/_catalogs/masterpage/JBC/CSS/jbc-StorePageLayoutNew.css %>"
                            After="corev15.css" runat="server" />
                            <div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/nl_NL/sdk.js#xfbml=1&version=v2.6";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

                        <!-- TODO Change to local files -->
                        <script src="https://code.jquery.com/jquery-2.1.4.min.js" type="text/javascript"></script>
                        <script src="https://jbcbe.sharepoint.com/sites/stores/_catalogs/masterpage/JBC/JS/bootstrap.js"></script>
<script src="https://jbcbe.sharepoint.com/sites/stores/_catalogs/masterpage/JBC/JS/jbc-store.js" type="text/javascript"></script>
                        <PublishingWebControls:EditModePanel runat="server">
                            <!-- Styles for edit mode only-->
                            <SharePointWebControls:CssRegistration name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/editmode15.css %>"
                                After="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>"
                                runat="server" />
                        </PublishingWebControls:EditModePanel>
                        <SharePointWebControls:FieldValue id="PageStylesField" FieldName="HeaderStyleDefinitions" runat="server" />
                    </asp:Content>
                    <asp:Content ContentPlaceholderID="PlaceHolderPageTitle" runat="server">
                        <SharePointWebControls:FieldValue id="PageTitle" FieldName="Title" runat="server" />
                    </asp:Content>
                    <asp:Content ContentPlaceholderID="PlaceHolderPageTitleInTitleArea" runat="server">
                        <SharePointWebControls:FieldValue FieldName="Title" runat="server" />
                    </asp:Content>
                    <asp:Content ContentPlaceHolderId="PlaceHolderTitleBreadcrumb" runat="server">
                        <SharePointWebControls:ListSiteMapPath runat="server" SiteMapProviders="CurrentNavigationSwitchableProvider" RenderCurrentNodeAsLink="false"
                            PathSeparator="" CssClass="s4-breadcrumb" NodeStyle-CssClass="s4-breadcrumbNode" CurrentNodeStyle-CssClass="s4-breadcrumbCurrentNode"
                            RootNodeStyle-CssClass="s4-breadcrumbRootNode" NodeImageOffsetX=0 NodeImageOffsetY=289 NodeImageWidth=16
                            NodeImageHeight=16 NodeImageUrl="/_layouts/15/images/fgimg.png?rev=40" HideInteriorRootNodes="true"
                            SkipLinkText="" /> </asp:Content>
                    <asp:Content ContentPlaceholderID="PlaceHolderMain" runat="server">
                        <div class="sassy-nav-button">
                            <button type="button" class="sassy-toggle collapsed" data-toggle="collapse" data-target="#DeltaTopNavigation" aria-expanded="false">
        	<span class="icon-bar"></span>
        	<span class="icon-bar"></span>
        	<span class="icon-bar"></span>
      	</button>
                        </div>
                        <div id="tabzones">
                            <div class="row">
                                <div class="col-md-12 jbc-pageimage">
                                    <WebPartPages:WebPartZone id="Header_zone" runat="server" title="Koptekst">
                                        <ZoneTemplate></ZoneTemplate>
                                    </WebPartPages:WebPartZone>
                                </div>
                            </div>
                            <div class="panel">
                                <div class="row collapse" id="Seizoensdocumenten">
                                    <div class="col-md-12 jbc-pageimage">
                                        <WebPartPages:WebPartZone id="Seizoensdocumenten_zone" runat="server" title="Seizoensdocumenten">
                                            <ZoneTemplate></ZoneTemplate>
                                        </WebPartPages:WebPartZone>
                                    </div>
                                </div>


                                <div class="row collapse" id="Kalender">
                                    <div class="col-md-12 jbc-pageimage">
                                        <WebPartPages:WebPartZone id="Kalender_zone" runat="server" title="Kalender">
                                            <ZoneTemplate></ZoneTemplate>
                                        </WebPartPages:WebPartZone>
                                    </div>
                                </div>

                                <div class="row collapse" id="Trainingsdocumenten">
                                    <div class="col-md-12 jbc-pageimage">
                                        <WebPartPages:WebPartZone id="Trainingsdocumenten_zone" runat="server" title="Trainingsdocumenten">
                                            <ZoneTemplate></ZoneTemplate>
                                        </WebPartPages:WebPartZone>
                                    </div>
                                </div>

                                <div class="row collapse" id="Procedures">
                                    <div class="col-md-12 jbc-pageimage">
                                        <WebPartPages:WebPartZone id="Procedures_zone" runat="server" title="Procedures">
                                            <ZoneTemplate></ZoneTemplate>
                                        </WebPartPages:WebPartZone>
                                    </div>
                                </div>

                                <div class="row collapse" id="Berichten">
                                    <div class="col-md-12 jbc-pageimage">
                                        <WebPartPages:WebPartZone id="Berichten_zone" runat="server" title="Berichten">
                                            <ZoneTemplate></ZoneTemplate>
                                        </WebPartPages:WebPartZone>
                                    </div>
                                </div>

                                <div class="row collapse" id="Management">
                                    <div class="col-md-12 jbc-pageimage">
                                        <WebPartPages:WebPartZone id="Management_zone" runat="server" title="Management">
                                            <ZoneTemplate></ZoneTemplate>
                                        </WebPartPages:WebPartZone>
                                    </div>
                                </div>

                                <div class="row collapse" id="Tickets">
                                    <div class="col-md-12 jbc-pageimage">
                                        <WebPartPages:WebPartZone id="Tickets_zone" runat="server" title="Tickets">
                                            <ZoneTemplate></ZoneTemplate>
                                        </WebPartPages:WebPartZone>
                                    </div>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-6 jbc-pageimage">
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
                                    <WebPartPages:WebPartZone id="Info" runat="server" title="Contact Info zone">
                                        <ZoneTemplate></ZoneTemplate>
                                    </WebPartPages:WebPartZone>
                                </div>
                                <div class="col-md-6 jbc-pageimage">
                                    <WebPartPages:WebPartZone id="Feed" runat="server" title="Feed">
                                        <ZoneTemplate></ZoneTemplate>
                                    </WebPartPages:WebPartZone>
                                </div>
                            </div>
                        </div>
                    </asp:Content>