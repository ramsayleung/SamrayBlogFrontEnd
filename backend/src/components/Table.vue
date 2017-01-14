<template>
  <section class="content">
    <div class="box">
      <div class="box-header">
        <h3 class="box-title">Data Table With Full Features</h3>
      </div>
      <!-- /.box-header -->
        <div class="box-body">
<vuetable
                    api-url="http://vuetable.ratiw.net/api/users"
                    table-wrapper=".box-body"
                    :fields="columns"
                    :item-actions="itemActions"
                    pagination-path=""
                    pagination-component="vuetable-pagination"
                ></vuetable>
        </div>
      </div>
      <!-- /.box-body -->
    </div>
    <!-- /.box -->
    </div>
    <!-- /.col -->
    </div>
  </section>
</template>
<script>
  export default{
  data(){return {
                columns: [
                    'name',
                    'nickname',
                    'email',
                    'birthdate',
                    'gender',
                    '__actions'
                ],
                itemActions: [
                { name: 'view-item', label: '', icon: 'glyphicon glyphicon-zoom-in', class: 'btn btn-info', extra: {'title': 'View', 'data-toggle':"tooltip", 'data-placement': "left"} },
                { name: 'edit-item', label: '', icon: 'glyphicon glyphicon-pencil', class: 'btn btn-warning', extra: {title: 'Edit', 'data-toggle':"tooltip", 'data-placement': "top"} },
                { name: 'delete-item', label: '', icon: 'glyphicon glyphicon-remove', class: 'btn btn-danger', extra: {title: 'Delete', 'data-toggle':"tooltip", 'data-placement': "right" } }
            ]
            }},
            methods: {
                viewProfile: function(id) {
                    console.log('view profile with id:', id)
                }
            },
            events: {
                'vuetable:action': function(action, data) {
                    console.log('vuetable:action', action, data)
                    if (action == 'view-item') {
                        this.viewProfile(data.id)
                    }
                },
                'vuetable:load-error': function(response) {
                    console.log('Load Error: ', response)
                }
            }
  }
 </script>
