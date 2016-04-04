$(document).ready(function () {
    SP.UI.MicroFeed.SPMicroFeed.microfeed.changeView(1);
    setTimeout(function(){
        $("#ms-microfeed-titleViewSelectorPivotContainer_surfaceopt0").addClass("ms-pivotControl-surfacedOpt").removeClass("ms-pivotControl-surfacedOpt-selected");
        $("#ms-microfeed-titleViewSelectorPivotContainer_surfaceopt1").addClass("ms-pivotControl-surfacedOpt-selected").removeClass("ms-pivotControl-surfacedOpt");
     }, 1500);
});      