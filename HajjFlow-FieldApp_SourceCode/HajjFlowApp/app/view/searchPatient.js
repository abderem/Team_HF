
Ext.define('ScheduleApp2.view.searchPatient', {
                      extend: 'Ext.Panel',
                      xtype: 'searchpatient',
                      
                      requires: [
                                 'Ext.TitleBar',
                                 'Ext.form.FieldSet',
                                 'Ext.field.Text',
                                 'Ext.field.Password',
                                 'Ext.field.Select',
                                 'Ext.MessageBox'
                                 ],
                      
                      config: {
                      layout: 'vbox',
                      
                      styleHtmlContent: true,
                      items: [
                              {
                              docked: 'top',
                              xtype: 'titlebar',
                              title: 'Availability',
                              style:'padding-top: 10px;'
                              
                              },
                              {
                              xtype: 'textfield',
                              name : 'sfname',
                              id	 : 'sfname',
                              label: 'First Name',
                              
                              },{
                              xtype: 'textfield',
                              name : 'slname',
                              id	 : 'slname',
                              label: 'Last Name',
                              
                              },{
                              xtype: 'datepickerfield',
                              name : 'sdob',
                              id	 : 'sdob',
                              label: 'Date of Birth',
                              picker: { yearFrom: 1901 }
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
                                      {xtype:'spacer'},{
                                      xtype: 'button',
                                      text: 'Search',
                                      style: 'width:70%;height:50px;',
                                      ui:'confirm',
                                      handler: function () {
                                      //alert(Ext.getCmp('sdob').getValue());
                                      ScheduleApp2.view.Globals.search_fname= Ext.getCmp('sfname').getValue();
                                      ScheduleApp2.view.Globals.search_lname= Ext.getCmp('slname').getValue();
                                      ScheduleApp2.view.Globals.search_dob= Ext.util.Format.date(Ext.getCmp('sdob').getValue(),'m/d/Y');
                                        Ext.Viewport.removeAll(true, true);
                                        Ext.Viewport.add(Ext.create('ScheduleApp2.view.patientList'));
                                        Ext.Viewport.setActiveItem(Ext.getCmp('patientlist'));
                                        }
                                      },{xtype:'spacer'},{
                                      xtype: 'button',
                                      text: 'Back',
                                      style: 'width:70%;height:50px;',
                                      ui:'decline',
                                      handler: function () {
                                      Ext.Viewport.removeAll(true, true);
                                      Ext.Viewport.add(Ext.create('ScheduleApp2.view.Main'));
                                      Ext.Viewport.setActiveItem(Ext.getCmp('main'));
                                      }
                                      },{xtype:'spacer'}
                                      ]
                              }
                              
                      ]
                      
                      }
                      });

