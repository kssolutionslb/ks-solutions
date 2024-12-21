import{a as F}from"./chunk-3SSBONDS.js";import{a as M}from"./chunk-RN7YLSYN.js";import{a as _}from"./chunk-YG3ZRH6R.js";import{a as I}from"./chunk-WJCZMWTI.js";import"./chunk-HMNUYURD.js";import{a as E}from"./chunk-WQQRSZMJ.js";import{M as v,_ as k,ba as C,sa as N}from"./chunk-TNID6TGJ.js";import"./chunk-CARY4E7O.js";import"./chunk-COU37GAH.js";import{Fa as f,Hb as g,N as t,Nb as S,Ub as w,a as r,bc as x,ea as p,ka as c,n as l,o as s,oa as u,sb as m,uc as b,vc as y,y as d,zb as h}from"./chunk-ZZEMHH24.js";var a=(()=>{class n{constructor(){this._networkService=c(C),this._screens=new s([]),this.screens$=this._screens.asObservable(),this.screensLov$=this._screens.asObservable().pipe(d(e=>e.filter(i=>i._id)))}getAllScreens(){this._networkService.get(_.SCREENS.screen).pipe(t(1)).subscribe({next:e=>{e&&e.data&&this._screens.next(e.data)}})}addScreen(e){return this._networkService.post(_.SCREENS.screen,e)}updateScreen(e){return this._networkService.patch(_.SCREENS.screen,e,e._id)}deleteScreen(e){this._networkService.delete(_.SCREENS.screen,void 0,e._id).pipe(t(1)).subscribe({next:()=>{this._updateMenus(e,"delete")}})}_updateMenus(e,i){F.UpdateArrayBehaviorSubject(this._screens,e,i)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=p({token:n,factory:n.\u0275fac})}}return n})();var P=["icon_Loading","icon_accessibility","icon_plus_circle","icon_plus","icon_minus_circle","icon_minus","icon_alert","icon_allocate","icon_user_placeholder","icon_angle_up","icon_angle_down","icon_angle_left","icon_angle_right","icon_appointments_grey","icon_archive_download","icon_archive_remove","icon_archive","icon_export","icon_import","icon_arrow_up","icon_arrow_down","icon_arrow_left","icon_arrow_right","icon_arrow_level_up","icon_arrow_level_down","icon_arrow_level_left","icon_arrow_level_right","icon_arrow_up_and_down","icon_attach","icon_backward","icon_forward","icon_briefcase","icon_calendar","icon_calendar_2","icon_call_batch_grouper","icon_camera","icon_cancel_in_circle","icon_card","icon_cash_allocation","icon_celsius","icon_check_eligibility","icon_check_in_circle","icon_check_list","icon_check","icon_claim","icon_clear","icon_clipboard_check","icon_clock_alt","icon_close","icon_columns_view","icon_configuration","icon_delete","icon_document_chart_bar","icon_document_download","icon_document_text","icon_document_upload","icon_document","icon_dollar","icon_download_circle","icon_download","icon_duplicate_batch","icon_duplicate","icon_edit","icon_error_triangle","icon_excel","icon_exchange_rate","icon_exchange","icon_expiring_soon_unselected","icon_eye_off","icon_eye","icon_fax","icon_filter_horizontal","icon_filter_vertical","icon_finished","icon_flag","icon_folder","icon_font_size","icon_funnel","icon_funnel_filled","icon_generate","icon_grid_view","icon_hand_raised","icon_heart","icon_heart_filled","icon_help","icon_home","icon_home_filled","icon_image","icon_infinite","icon_info_circle_fill","icon_information_in_circle","icon_item_audit","icon_kan_ban_view","icon_key","icon_language_globe","icon_link","icon_list_bullet","icon_location","icon_location_filled","icon_lock_open","icon_lock","icon_mail_opened","icon_mail","icon_map","icon_medical_file","icon_menu_grid","icon_money","icon_more_horizontal","icon_more_vertical","icon_new_claim","icon_new_note","icon_no_connection","icon_note","icon_notification_off","icon_notification_on","icon_notification","icon_pdf_download","icon_pdf","icon_pencil","icon_pending","icon_phone","icon_powerpoint","icon_print","icon_profile","icon_refresh","icon_report_menu","icon_report","icon_reports","icon_reset_password","icon_resize","icon_retry","icon_rotate_left","icon_rotate_right","icon_save","icon_search","icon_advanced_search","icon_send","icon_settings","icon_settings_filled","icon_share","icon_sign_in","icon_star","icon_star_filled","icon_stop","icon_success","icon_swatch","icon_target_1","icon_target_2","icon_task_list","icon_thumb_down","icon_thumb","icon_time1","icon_time2","icon_transactions","icon_translate","icon_translate_2","icon_un_allocate","icon_unlink","icon_unlock","icon_up_exchange","icon_upload","icon_use_guide","icon_user_add","icon_user_delete","icon_user_group","icon_user_identification","icon_user_management","icon_user","icon_users","icon_valid","icon_wallet","icon_word","icon_zoom_in","icon_zoom_out","icon_double_arrow_up","icon_double_arrow_down","icon_phone_filled","icon_lebanon","icon_usa","icon_france","icon_person","icon_person_filled","icon_person_circle","icon_persons","icon_persons_filled","icon_delete_2","icon_delete_filled","icon_menu","icon_x","icon_x_lg","icon_x_circle","icon_warning","icon_warning_circle","icon_warning_triangle","icon_warning_square","icon_info","icon_refresh_2","icon_notification_filled","icon_moon","icon_moon_filled","icon_sun","icon_sun_filled","icon_moon_star","icon_moon_star_filled","icon_fb","icon_messenger","icon_wp","icon_instagram","icon_twitter","icon_color","icon_color_filled","icon_color_bucket","icon_logout","icon_print_filled","icon_x_file","icon_x_file_filled","icon_w_file","icon_w_file_filled","icon_pdf_2","icon_pdf_filled","icon_file","icon_file_filled","icon_file_graph","icon_graph_up","icon_check_squared","icon_check_circle","icon_check_double","icon_message","icon_message_filled","icon_cash_stack","icon_cash_coin","icon_currency_exchange","icon_list_ul","icon_move","icon_split","icon_cloud_download","icon_cloud_upload","icon_pin","icon_calculator","icon_play","icon_grid_3x3","icon_block","icon_bookings","icon_houses","icon_reviews"];function R(n,D){if(n&1&&w(0,"ks-basic-grid",0),n&2){let e=x();g("config",e.gridConfig)("refresh$",e.refresh$)}}var ee=(()=>{class n{constructor(){this._destroyRef=c(f),this._navService=c(E),this._dialog=c(k),this._screenService=c(a),this._currentScreen=I("screens_listing"),this._data=[],this.refresh$=new l}ngOnInit(){this._navService.updateNav({show:!0,back:!1,title:this._currentScreen.screenName,buttons:[{label:{text:"Create New"},prefixIcon:{icon:"icon_plus_circle"},hide:!this._currentScreen.insert,onClick:()=>{this._openMenu()}}]}),this._screenService.getAllScreens(),this._initializeGrid(),this._screenService.screens$.pipe(v(this._destroyRef)).subscribe(e=>{this._data=e,this.refresh$.next({data:this._data})})}_initializeGrid(){this.gridConfig={data:m([]),defaultPagination:100,maxTableHeight:M.maxTableHeightWithSearch,noDataMessage:{text:"No Screens Found"},features:{showSearch:!0},elevation:2,columns:[{field:"name",title:"Name",type:"string"},{field:"screenName",title:"Screen Name",type:"string",extraStyles:{"min-width":"170px"}},{field:"fullPath",title:"Full Path",type:"string",extraStyles:{"min-width":"170px"}},{field:"groupName",title:"Group Name",type:"string",extraStyles:{"min-width":"170px"}},{field:"isSideMenu",title:"Side Menu",type:"chip",extraStyles:{"min-width":"100px"},position:"p-start",truthy:{false:"No",true:"Yes"},setChipClass:e=>e.isSideMenu===!0?"rounded rounded-5 px-3 py-1 text-bg-success cs-w-120":"rounded rounded-5 px-3 py-1 text-bg-danger cs-w-120"},{field:"icon",title:"Icon",type:"string",extraStyles:{width:"150px"}},{field:"createdAt",title:"Created At",type:"date",dateFormat:"dd/MM/yyyy - HH:mm:ss a",extraStyles:{"min-width":"170px"}},{field:"updatedAt",title:"Last Updated At",type:"date",dateFormat:"dd/MM/yyyy - HH:mm:ss a",extraStyles:{"min-width":"170px"}}],actionsColumn:{enabled:this._currentScreen.update||this._currentScreen.delete,maxButtons:window.innerWidth<700?1:void 0,maxWidth:window.innerWidth<700?void 0:"110px",minWidth:window.innerWidth<700?void 0:"110px",buttons:[{prefixIcon:{icon:"icon_edit"},label:{text:"Edit"},onClickFn:e=>this._openMenu(e),isVisibleFn:()=>this._currentScreen.update,matType:"mat-icon-button"},{prefixIcon:{icon:"icon_delete",color:"red"},label:{text:"Delete"},onClickFn:e=>this._deleteInventory(e),isVisibleFn:()=>this._currentScreen.delete,matType:"mat-icon-button"}]}}}_openMenu(e){let i={title:{text:e?"Edit Screen":"Add Screen"},form:{value:e,fields:[{name:"name",type:"text",label:{text:"Name"},required:!0,readonly:!!e,preventSpace:!0},{name:"screenName",type:"text",label:{text:"Screen Name"},required:!0},{name:"fullPath",type:"text",label:{text:"Full Path"},required:!0},{name:"groupName",type:"text",label:{text:"Group Name"}},{name:"icon",type:"autocomplete",label:{text:"Icon"},options:P.map(o=>({name:o,value:o})),required:!0},{name:"isSideMenu",label:{text:"Include In Side Menu"},type:"checkbox"}]},beforeCloseObservable:o=>e?this._screenService.updateScreen(r(r({},e),o)):this._screenService.addScreen(o),getAfterSuccessResponse:o=>{o.data&&this._screenService._updateMenus(o.data,e?"edit":"add")}};this._dialog.openFormPopup(i,"1000px")}_deleteInventory(e){let i={title:{text:"Confirm Delete"},message:{text:"Are you sure you want to delete this screen?"}};this._dialog.openConfirmPopup(i).afterClosed().pipe(t(1)).subscribe(o=>{o&&e?._id&&this._screenService.deleteScreen(e)})}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=u({type:n,selectors:[["ks-solutions-screens-listing"]],standalone:!0,features:[b([a]),y],decls:1,vars:1,consts:[[3,"config","refresh$"]],template:function(i,o){i&1&&h(0,R,1,2,"ks-basic-grid",0),i&2&&S(o.gridConfig?0:-1)},dependencies:[N],changeDetection:0})}}return n})();export{ee as ScreensComponent};
