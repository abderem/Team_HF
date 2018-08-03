           Ext.define('ScheduleApp2.view.selectTime', {
                      extend: 'Ext.Panel',
                      xtype: 'selecttime',
                      
                      requires: [
                                 'Ext.TitleBar',
                                 'Ext.form.FieldSet',
                                 'Ext.field.Text',
                                 'Ext.field.Password',
                                 'Ext.field.Select',
                                 'Ext.MessageBox'
                                 ],
                      
                      config: {
                      layout: 'card',
                      
                      styleHtmlContent: true,
                      items: [
                              {
                              docked: 'top',
                              xtype: 'titlebar',
                              title: 'Availability',
                              style:'padding-top: 10px;',
                              items : [
                                       {
                                       //text : 'Home',
                                       align : 'right',
                                       id:'signupbutton',
                                       iconCls:'home',
                                       handler: function () {
                                       //location.href="Signup.html";
                                       Ext.Viewport.removeAll(true, true);
                                       Ext.Viewport.add(Ext.create('ScheduleApp2.view.Main'));
                                       Ext.Viewport.setActiveItem(Ext.getCmp('main'));
                                       }
                                       }]
                              },
                              {
                              xtype: 'list',
                              flex: 1,
                              name : 'tlist',
                              id	 : 'tlist',
                              masked: {
                              xtype: 'loadmask',
                              message: 'Loading...'
                              },
                              store: {
                              name : 'lstore',
                              id	 : 'lstore',
                              fields: ['start_time','end_time','unavailable_reason','is_available'],
                              proxy: {
                              type: 'ajax',
                              url: ScheduleApp2.view.Globals.url+'MobileGetAvailableTimeslots',//'http://13.229.48.187:8080/MobileGetAvailableTimeslots?schedule_date=06/27/2018',
                              reader: {
                              type: 'json',
                              rootProperty: 'time_slots'
                              }
                              },
                              //autoLoad: true,
                              listeners: {
                              beforeload: function(store, operation, options){
                              //store.getProxy().url = "http://13.229.48.187:8080/MobileGetAvailableTimeslots?schedule_date="+ScheduleApp2.view.Globals.adate;
                              },
                              load: function(store,records,success,operation){
                              var reader = store.getProxy().getReader(),
                              response = operation.getResponse();
                              }
                              }
                              },
                              
                              items:[   {
                                     xtype: 'titlebar',
                                     docked: 'top',
                                     id:'ntbar',
                                     title: '<span style="color:black" id="namediv" name="namediv"></span>'
                                     }, {
                                     xtype: 'titlebar',
                                     docked: 'top',
                                     id:'tbar',
                                     title: '<span id="datediv" name="datediv"></span>'
                                     },
                                     
                                     {
                                     xtype: 'container',
                                     docked: 'bottom',
                                     flex: 2,
                                     layout: {
                                     type: 'vbox',
                                     align: 'middle',
                                     pack:'center'
                                     },
                                     style: 'height:20%;',
                                     
                                     items: [
                                             {
                                             xtype: 'button',
                                             id:'btnConf',
                                             name:'btnConf',
                                             text: 'Confirm Appointment',
                                             style: 'width:70%;height:50%',
                                             ui:'confirm',
                                             disabled: true,
                                             handler: function () {
                                             Ext.Viewport.setMasked({
                                                                    xtype: 'loadmask',
                                                                    message: 'Please wait',
                                                                    indicator: true
                                                                    });
                                        if(ScheduleApp2.view.Globals.new_patient=='0'){
                                            // alert(ScheduleApp2.view.Globals.adate);
                                             //alert(ScheduleApp2.view.Globals.atime);
                                             var url=ScheduleApp2.view.Globals.url+'MobileBookReturnAppointment?user_id='+ ScheduleApp2.view.Globals.uid+'&date_of_appointment='+ScheduleApp2.view.Globals.adate+'&start_time='+ScheduleApp2.view.Globals.atime;
                                             //alert(url);
                                             Ext.Ajax.request({
                                                              url  	: url,
                                                              useDefaultXhrHeader: false,
                                                              cors: true,
                                                              method :'GET',
                                                              defaultHeaders : 'application/json',
                                                              //params: Param,
                                                              success: function(response, opts) {
                                                              Ext.Viewport.setMasked(false);
                                                              //alert(response.responseText);
                                                              var obj = Ext.decode(response.responseText);
                                                              if(obj.success==1)
                                                              {
                                                              Ext.Msg.alert('Information', 'Appointment Booked', function()
                                                                            {
                                                                            Ext.getCmp('btnConf').disable();
                                                                            //Ext.Viewport.removeAll(true, true);
                                                                            //Ext.Viewport.add(Ext.create('ScheduleApp2.view.Main'));
                                                                            //Ext.Viewport.setActiveItem(Ext.getCmp('main'));
                                                                            }
                                                                            );
                                                              Ext.getCmp('btnConf').disable();
                                                              }else{
                                                              Ext.Msg.alert('Alert', 'Server error. Please try again.', function()
                                                                            {
                                                                            //Ext.getCmp('name').focus();
                                                                            }
                                                                            );
                                                              }
                                                              
                                                              },
                                                              failure: function(response, opts) {
                                                              Ext.Viewport.setMasked(false);
                                                              Ext.Msg.alert('Alert', 'Check your connection and try again.', function()
                                                                            {
                                                                            //Ext.getCmp('name').focus();
                                                                            }
                                                                            );
                                                              }
                                                              });
                                             }else{//new patient book appointment case
                                             var Param = 'first_name='+ScheduleApp2.view.Globals.new_fname
                                             + '&last_name='+ScheduleApp2.view.Globals.new_lname
                                             + '&email='+ScheduleApp2.view.Globals.new_email
                                             + '&phone='+ScheduleApp2.view.Globals.new_phone
                                             + '&date_of_birth='+ScheduleApp2.view.Globals.new_dob
                                             + '&date_of_appointment='+ScheduleApp2.view.Globals.adate
                                             + '&start_time='+ScheduleApp2.view.Globals.atime
                                             + '&middle_name='+ScheduleApp2.view.Globals.new_mname;
                                             var url=ScheduleApp2.view.Globals.url+'MobileBookNewAppointment';
                                             //alert(url);
                                             Ext.Ajax.request({
                                                              url  	: url,
                                                              useDefaultXhrHeader: false,
                                                              cors: true,
                                                              method :'GET',
                                                              defaultHeaders : 'application/json',
                                                              params: Param,
                                                              success: function(response, opts) {
                                                              Ext.Viewport.setMasked(false);
                                                              //alert(response.responseText);
                                                              var obj = Ext.decode(response.responseText);
                                                              if(obj.success==1)
                                                              {
                                                              Ext.Msg.alert('Information', 'Appointment Booked', function()
                                                                            {
                                                                           // Ext.Viewport.removeAll(true, true);
                                                                            //Ext.Viewport.add(Ext.create('ScheduleApp2.view.Main'));
                                                                        //Ext.Viewport.setActiveItem(Ext.getCmp('main'));
                                                                            }
                                                                            );
                                                              Ext.getCmp('btnConf').disable();
                                                              }else{
                                                              Ext.Msg.alert('Alert', obj.error_message, function()
                                                                            {
                                                                            //Ext.getCmp('name').focus();
                                                                            }
                                                                            );
                                                              }
                                                              
                                                              },
                                                              failure: function(response, opts) {
                                                              Ext.Viewport.setMasked(false);
                                                              Ext.Msg.alert('Alert', 'Check your connection and try again.', function()
                                                                            {
                                                                            //Ext.getCmp('name').focus();
                                                                            }
                                                                            );
                                                              }
                                                              });

                                             }
                                             //Ext.Viewport.removeAll(true, true);
                                             //Ext.Viewport.add(Ext.create('PIU.view.Login'));
                                             //Ext.Viewport.setActiveItem(Ext.getCmp('Login'));
                                             }
                                             
                                             },
                                             {xtype:'spacer'},{
                                             xtype: 'button',
                                             text: 'Back',
                                             style: 'width:70%;height:50px;',
                                             ui:'decline',
                                             handler: function () {
                                             Ext.Viewport.removeAll(true, true);
                                             Ext.Viewport.add(Ext.create('ScheduleApp2.view.selectDate'));
                                             Ext.Viewport.setActiveItem(Ext.getCmp('selectdate'));
                                             }
                                             },{xtype:'spacer'}
                                             ]
                                     }

                                     ],
                              itemTpl: '<center><font size="4">{start_time} - {end_time} <span style="display:{is_available}">{unavailable_reason}</span></font></center>',
                              listeners: {
                                itemtap: function(list, index, item, record, senchaEvent) {
                                    if(record.get('is_available')=='block'){
                                        Ext.Msg.alert('Information',record.get('unavailable_reason'), function()
                                            {
                                            //Ext.getCmp('name').focus();
                                            }
                                            );
                              Ext.getCmp('btnConf').disable();
                                    }else{
                                        Ext.getCmp('btnConf').enable();
                                        ScheduleApp2.view.Globals.atime=record.get('start_time');
                                //Ext.Msg.alert('Selected!', 'You selected ' + record.get('name'));
                                    }
                                }
                              }
                        }
                              ],
                      listeners: {
                      painted: function() {
                      document.getElementById("namediv").textContent=ScheduleApp2.view.Globals.compname;
                      document.getElementById("datediv").textContent=ScheduleApp2.view.Globals.compdate;
                      //alert( ScheduleApp2.view.Globals.shift);
                      if(ScheduleApp2.view.Globals.new_patient=='0'){
                        Ext.getCmp('tlist').getStore().getProxy().setExtraParams({
                                                                               schedule_date : ScheduleApp2.view.Globals.adate,
                                                                               shift : ScheduleApp2.view.Globals.shift,
                                                                               patient_type : 2
                                                                               });
                      }else{//New patient case
                        Ext.getCmp('tlist').getStore().getProxy().setExtraParams({
                                                                               schedule_date : ScheduleApp2.view.Globals.adate,
                                                                               shift : ScheduleApp2.view.Globals.shift,
                                                                               patient_type : 1
                                                                               });
                      }
                      //Ext.getCmp('tlist').getStore().getProxy().url = "http://13.229.48.187:8080/MobileGetAvailableTimeslots?schedule_date="+ScheduleApp2.view.Globals.adate;
                      //alert( Ext.getCmp('tlist').getStore().getProxy().url);
                      Ext.getCmp('tlist').getStore().load();
                      // Ext.getCmp('tlist').getStore().read();
                      Ext.getCmp('tlist').refresh();
                      Ext.repaint();
                      }
                      },
                      
                      
                      }
                      });
