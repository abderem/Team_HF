           Ext.define('HajjFlowApp.view.Upcoming', {
                      extend: 'Ext.Panel',
                      xtype: 'upcoming',
                      
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
                      items: [
                              {
                              docked: 'top',
                              xtype: 'titlebar',
                              title: 'Lost People',
                              style:'padding-top: 10px;'
                              
                              },
                              {
                              xtype: 'list',
                              flex: 1,
                              name : 'name',
                              id	 : 'name',
                              label: 'Name',
                              store: {
                              fields: ['first_name','age','group_name','group_contact','report_officer','location'],
                              data: [
                                     {first_name: 'Awais Ali',age: '23',group_name: 'Hajj travel',group_contact: '009665342443',report_officer: 'Abdullah',location: 'Minna'},
                                     {first_name: 'Saad Maten',age: '33',group_name: 'Notes',group_contact: '009665342443',report_officer: 'Muhammad Suleman',location: 'Mazdalfa'},
                                     {first_name: 'Notes',age: '65',group_name: 'Notes',group_contact: '009665342443',report_officer: 'Muhammad Tarik',location: 'Haram'},
                                     ]
                              },

                              itemTpl: '<font size="2"><table border=0 ><tr><td rowspan=3><img src="resources/user-icon.png" style="height:65%" /></td><td><b>&nbsp;&nbsp;&nbsp;{first_name} - Age:{age}</b></td></tr><tr><td>&nbsp;&nbsp;&nbsp;Group Name: {group_name} - Contact:{group_contact}</td></tr><tr><td>&nbsp;&nbsp;&nbsp;Report Officer: {report_officer}</td></tr> <tr><td>&nbsp;&nbsp;&nbsp;Last Seen at {location}</td></tr>  </table></font>',
                              listeners: {
                                    select: function(view, record) {
                                    //Ext.Msg.alert('Selected!', 'You selected ' + record.get('name'));
                                    }
                                }
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
                                      text: 'Back',
                                      style: 'width:70%;height:50px;',
                                      ui:'decline',
                                      handler: function () {
                                      Ext.Viewport.removeAll(true, true);
                                      Ext.Viewport.add(Ext.create('HajjFlowApp.view.Main'));
                                      Ext.Viewport.setActiveItem(Ext.getCmp('main'));
                                      }
                                      },{xtype:'spacer'}
                                      ]
                              }
                      ]
                      
                      }
                      });
