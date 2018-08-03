Ext.define('ScheduleApp2.view.selectDate', {
                      extend: 'Ext.Panel',
                      xtype: 'selectdate',
                      
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
                              style:'padding-top: 10px;'
                              
                              },
                              {
                              xtype: 'list',
                              name : 'lname',
                              id	 : 'lname',
                              masked: {
                              xtype: 'loadmask',
                              message: 'Loading...'
                              },
                              //label: 'Name',
                              itemTpl: '{show_date}<div style="height:90%;position: absolute;right: 100px;top: 4px;margin-top: auto;" btnType="morn" class="x-button x-button-{morning}"><span class="x-button-label"><morn>Morning</morn></span></div><div style="height:90%;position: absolute;right: 10px;top: 4px;margin-top: auto;"  btnType="even" class="x-button x-button-{evening}"><span class="x-button-label"><even>Evening</eve></span></div>',
                              listeners: {
                              itemtap: function(list, index, item, record, senchaEvent) {
                             // alert("I am here");
                             // var tappedItem = e.target.name;
                              //alert(senchaEvent.event.target.nodeName);
                              btntype = senchaEvent.event.target.nodeName;
                              //alert(e.target.name);
                              if(btntype == 'MORN')
                              {
                              ScheduleApp2.view.Globals.shift='1';
                              ScheduleApp2.view.Globals.compdate=record.get('show_date');
                              ScheduleApp2.view.Globals.adate=record.get('date');
                              Ext.Viewport.removeAll(true, true);
                              Ext.Viewport.add(Ext.create('ScheduleApp2.view.selectTime'));
                              Ext.Viewport.setActiveItem(Ext.getCmp('selecttime'));
                              }
                              else if(btntype == 'EVEN')
                              {
                              ScheduleApp2.view.Globals.shift='2';
                              ScheduleApp2.view.Globals.compdate=record.get('show_date');
                              ScheduleApp2.view.Globals.adate=record.get('date');
                              Ext.Viewport.removeAll(true, true);
                              Ext.Viewport.add(Ext.create('ScheduleApp2.view.selectTime'));
                              Ext.Viewport.setActiveItem(Ext.getCmp('selecttime'));
                              }else{
                              ScheduleApp2.view.Globals.shift='0';
                              ScheduleApp2.view.Globals.compdate=record.get('show_date');
                              ScheduleApp2.view.Globals.adate=record.get('date');
                              Ext.Viewport.removeAll(true, true);
                              Ext.Viewport.add(Ext.create('ScheduleApp2.view.selectTime'));
                              Ext.Viewport.setActiveItem(Ext.getCmp('selecttime'));
                              }
                             // ScheduleApp2.view.Globals.compdate=record.get('show_date');
                              //ScheduleApp2.view.Globals.adate=record.get('date');
                             // Ext.Msg.alert('Selected!', 'You selected ' + e.target.name);
                              //Ext.Viewport.removeAll(true, true);
                              //Ext.Viewport.add(Ext.create('ScheduleApp2.view.selectTime'));
                              //Ext.Viewport.setActiveItem(Ext.getCmp('selecttime'));
                              }
                              }
                              ,
                              store: {
                              fields: ['show_date','date','morning','evening'],
                              proxy: {
                              type: 'ajax',
                              url: ScheduleApp2.view.Globals.url+'MobileGetAvailableDates',
                              reader: {
                              type: 'json',
                              
                              rootProperty: 'available'
                              }
                              },
                              autoLoad: true,
                              listeners: {
                              load: function(store,records,success,operation){
                              //this.setMasked(false);
                                var reader = store.getProxy().getReader(),
                              response = operation.getResponse();
                              //alert(records.responseText);
                              //alert(store);
                              //alert(reader.getResponseData(response).available);
                              }
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
                                      Ext.Viewport.add(Ext.create('ScheduleApp2.view.Main'));
                                      Ext.Viewport.setActiveItem(Ext.getCmp('main'));
                                      }
                                      },{xtype:'spacer'}
                                      ]
                              }
                              
                    ]
                      }
                      //]
                      
                      //}
                      });
