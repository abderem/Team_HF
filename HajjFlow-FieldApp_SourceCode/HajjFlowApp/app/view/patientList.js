           Ext.define('HajjFlowApp.view.patientList', {
                      extend: 'Ext.Panel',
                      xtype: 'patientlist',
                      
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
                              title: 'Patient List',
                              style:'padding-top: 10px;'
                              
                              },
                              {
                              xtype: 'list',
                              flex: 1,
                              name : 'slist',
                              id	 : 'slist',
                              masked: {
                              xtype: 'loadmask',
                              message: 'Loading...'
                              },
                              store: {
                              name : 'lstore',
                              id	 : 'lstore',
                              fields: ['first_name','email','phone_no','date_of_birth','mrn','last_name','user_id'],
                              proxy: {
                              type: 'ajax',
                              url: ScheduleApp2.view.Globals.url+'MobileSearchPatients',
                              reader: {
                              type: 'json',
                              rootProperty: 'search_results'
                              }
                              },
                              //autoLoad: true,
                              listeners: {
                                                            }
                              },
                              
                              items:[
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
                                             {xtype:'spacer'},{
                                             xtype: 'button',
                                             text: 'Back',
                                             style: 'width:70%;height:50px;',
                                             ui:'decline',
                                             handler: function () {
                                             Ext.Viewport.removeAll(true, true);
                                             Ext.Viewport.add(Ext.create('ScheduleApp2.view.searchPatient'));
                                             Ext.Viewport.setActiveItem(Ext.getCmp('searchpatient'));
                                             }
                                             },{xtype:'spacer'}
                                             ]
                                     }

                                     ],
                              //itemTpl: '<center><font size="6">Patient Name: {first_name}  {last_name}</font></center>',
                               itemTpl:'&nbsp;Name: {first_name}  {last_name}</b><br>&nbsp;Date of Birth: {first_name}<br>&nbsp;Date of Birth: {date_of_birth}<br>&nbsp;MRN: {mrn}<br>&nbsp;Email: {email}<br>&nbsp;Phone: {phone_no}',
                              listeners: {
                                select: function(view, record) {
                                 ScheduleApp2.view.Globals.uid=record.get('user_id');
                              ScheduleApp2.view.Globals.compname=record.get('first_name')+' '+record.get('last_name');
                                //Ext.Msg.alert('Selected!', 'You selected ' + record.get('user_id'));
                              Ext.Viewport.removeAll(true, true);
                              Ext.Viewport.add(Ext.create('ScheduleApp2.view.selectDate'));
                              Ext.Viewport.setActiveItem(Ext.getCmp('selectdate'));

                                }
                              }
                        }
                              ],
                      listeners: {
                     

                      painted: function() {
                      Ext.getCmp('slist').getStore().getProxy().setExtraParams({
                                    first_name : ScheduleApp2.view.Globals.search_fname,
                                                                               last_name : ScheduleApp2.view.Globals.search_lname,
                                                                               date_of_birth : ScheduleApp2.view.Globals.search_dob
                                     });
                      Ext.getCmp('slist').getStore().load();
                      Ext.getCmp('slist').refresh();
                      Ext.repaint();
                      }
                      },
                      
                      
                      }
                      });
