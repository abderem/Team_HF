           Ext.define('ScheduleApp2.view.addPatient', {
                      extend: 'Ext.Panel',
                      xtype: 'addpatient',
                      
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
                              title: 'Add Patient',
                              style:'padding-top: 10px;'
                              
                              },
                              {
                              xtype: 'textfield',
                              name : 'newfname',
                              id	 : 'newfname',
                              label: 'First Name',
                              },
                              {
                              xtype: 'textfield',
                              name : 'newmname',
                              id	 : 'newmname',
                              label: 'Middle Name',
                              },{
                              xtype: 'textfield',
                              name : 'newlname',
                              id	 : 'newlname',
                              label: 'Last Name',
                              },{
                              xtype: 'textfield',
                              name : 'newphone',
                              id	 : 'newphone',
                              label: 'Phone',
                              placeHolder: '1231231234',
                              component: {type: 'tel'},
                              },{
                              xtype: 'emailfield',
                              name : 'newemail',
                              id	 : 'newemail',
                              label: 'Email',
                              placeHolder: 'email@example.com'
                              },{
                              xtype: 'datepickerfield',
                              name : 'newdob',
                              id	 : 'newdob',
                              label: 'Date of Birth',
                              dateFormat: 'm/d/Y',
                              placeHolder: 'Select Date',
                              picker: { yearFrom: 1901 }
                              
                              },

                              {
                              xtype: 'container',
                              docked: 'bottom',
                              flex: 2,
                              layout: {
                              type: 'vbox',
                              align: 'middle'
                              //pack:'center'
                              },
                              style: 'height:20%;',
                              
                              items: [
                                    {xtype:'spacer'},{
                                      xtype: 'button',
                                      text: 'Save & Add Schedule',
                                      style: 'width:70%;height:50px;',
                                      ui:'confirm',
                                      handler: function () {
                                     verifyFieldsAddPatient()
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

function verifyFieldsAddPatient(){
    if(Ext.getCmp('newfname').getValue()=="")
    {
        Ext.Msg.alert('Alert', 'Please enter first name', function()
                      {
                      Ext.getCmp('newfname').focus();
                      }
                      );
    }else if(Ext.getCmp('newlname').getValue()=="")
    {
        Ext.Msg.alert('Alert', 'Please enter last name', function()
                      {
                      Ext.getCmp('newlname').focus();
                      }
                      );
    }else if(Ext.getCmp('newemail').getValue()=="" && Ext.getCmp('newphone').getValue()=="")
    {
        if(Ext.getCmp('newemail').getValue()==""){
        Ext.Msg.alert('Alert', 'Please enter email', function()
                      {
                      Ext.getCmp('newemail').focus();
                      }
                      );
        }else if(Ext.getCmp('newphone').getValue()=="")
        {
            Ext.Msg.alert('Alert', 'Please enter phone', function()
                          {
                          Ext.getCmp('newphone').focus();
                          }
                          );
        }
    }else {
        ScheduleApp2.view.Globals.new_patient= '1';
        ScheduleApp2.view.Globals.new_fname= Ext.getCmp('newfname').getValue();
        ScheduleApp2.view.Globals.new_mname= Ext.getCmp('newmname').getValue();
        ScheduleApp2.view.Globals.new_lname= Ext.getCmp('newlname').getValue();
        ScheduleApp2.view.Globals.new_phone= Ext.getCmp('newphone').getValue();
        ScheduleApp2.view.Globals.new_email= Ext.getCmp('newemail').getValue();
        //alert(Ext.util.Format.date(Ext.getCmp('newdob').getValue(),'m/d/Y'));
        ScheduleApp2.view.Globals.new_dob= Ext.util.Format.date(Ext.getCmp('newdob').getValue(),'m/d/Y');
        Ext.Viewport.removeAll(true, true);
        Ext.Viewport.add(Ext.create('ScheduleApp2.view.selectDate'));
        Ext.Viewport.setActiveItem(Ext.getCmp('selectDate'));
    }
}

