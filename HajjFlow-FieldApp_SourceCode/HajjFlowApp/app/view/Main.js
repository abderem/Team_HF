
Ext.define('HajjFlowApp.view.Main', {
                      extend: 'Ext.Panel',
                      xtype: 'main',
                      
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
                              title: 'Hajj Flow App',
                              style:'padding-top: 10px;'
                              
                              },
                              {
                              xtype: 'textfield',
                              name : 'phone',
                              id	 : 'phone',
                              //label: 'Cell',
                              placeHolder: 'Scan RFID',
                              component: {type: 'tel'},
                              listeners: {
                              keyup: function( fld, newValue, oldValue, opts) {
                              
                                        if(fld.getValue().length==10){
                              
                                            searchPatient();
                              
                                        }
                                    }
                                }
                              },                              {
                              id:'showdata',
                              name:'showdata',
                              html:''
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
                              style: 'height:40%;',
                              
                              items: [
                                      {xtype:'spacer'},{
                                      xtype: 'button',
                                      text: 'Contact Group Leader',
                                      style: 'width:70%;height:50px;',
                                      ui:'action',
                                      handler: function () {
                                      //Ext.Viewport.removeAll(true, true);
                                     // Ext.Viewport.add(Ext.create('HajjFlowApp.view.searchPatient'));
                                     // Ext.Viewport.setActiveItem(Ext.getCmp('searchpatient'));
                                      }
                                      },{xtype:'spacer'},{
                                      xtype: 'button',
                                      text: 'Medical Assistance',
                                      style: 'width:70%;height:50px;',
                                      ui:'decline',
                                      handler: function () {
                                        //Ext.Viewport.removeAll(true, true);
                                       // Ext.Viewport.add(Ext.create('HajjFlowApp.view.addPatient'));
                                        //Ext.Viewport.setActiveItem(Ext.getCmp('addpatient'));
                                        }
                                      },{xtype:'spacer'},{
                                      xtype: 'button',
                                      id:'btnRet',
                                      name:'btnRet',
                                      text: 'Report Lost',
                                      style: 'width:70%;height:50px;',
                                      ui:'decline',
                                      //disabled: true,
                                      handler: function () {
                                     //// Ext.Viewport.removeAll(true, true);
                                     // Ext.Viewport.add(Ext.create('HajjFlowApp.view.selectDate'));
                                     // Ext.Viewport.setActiveItem(Ext.getCmp('selectdate'));
                                      }
                                      },{xtype:'spacer'},{
                                      xtype: 'button',
                                      text: 'Report Found',
                                      style: 'width:70%;height:50px;',
                                      ui:'confirm',
                                      //disabled: true,
                                      handler: function () {
                                      //Ext.Viewport.removeAll(true, true);
                                      //Ext.Viewport.add(Ext.create('HajjFlowApp.view.Viewport'));
                                      //Ext.Viewport.setActiveItem(Ext.getCmp('app_viewport'));
                                      }
                                      },{xtype:'spacer'},{
                                      xtype: 'button',
                                      text: 'Lost People List',
                                      style: 'width:70%;height:50px;',
                                      //ui:'confirm',
                                      handler: function () {
                                      Ext.Viewport.removeAll(true, true);
                                      Ext.Viewport.add(Ext.create('HajjFlowApp.view.Upcoming'));
                                      Ext.Viewport.setActiveItem(Ext.getCmp('upcoming'));
                                      }
                                      },{xtype:'spacer'}
                                      ]
                              }
                              
                              ],
           
                      }
                      });

function searchPatient(){
    
    Ext.get('showdata').setHtml('<br><br><b>Information</b><img src="resources/user-icon.png" alt="Smiley face" height="42" width="42"><p style="background-color:white;"><b>&nbsp;Name:&nbsp;Muhammad Arshad</b><br>&nbsp;Emergency Contact Number: 0096653929344<br>&nbsp;Blood Group: O-<br>&nbsp;Nationality: Pakistani</p>');
    
    
}

