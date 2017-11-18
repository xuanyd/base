<template>
  <section>
    <el-col :span = '24' class = 'toolbar' style='padding-bottom: 0px'>
      <el-form :inline='true' :model='filters'>
      	<el-form-item>
      	  <el-input v-model='filters.name' placeholder='姓名'></el-input>
      	</el-form-item>
      	<el-form-item>
      		<el-button type='primary' v-on:click='getusers'>查询</el-button>
      	</el-form-item>
      	<el-form-item>
      		<el-button type='primary' v-on:click='handlerAdd'>新增</el-button>
      	</el-form-item>
      </el-form>
    </el-col>

    <el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column prop="name" label="ID" width="120">
			</el-table-column>
			<el-table-column prop="sex" label="用户名" width="100" :formatter="formatSex">
			</el-table-column>
			<el-table-column prop="age" label="角色" width="100" >
			</el-table-column>
			<el-table-column prop="birth" label="状态" width="120" >
			</el-table-column>
			<el-table-column prop="addr" label="添加时间" min-width="180" >
			</el-table-column>
      </el-table-column>
      <el-table-column prop="addr" label="备注" min-width="180" >
      </el-table-column>
			<el-table-column label="操作" width="150">
				<template scope="scope">
					<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

    <el-col :span='24' class='toolbar'>
      <el-button type='danger' @click='batchRemove' :disabled='this.sels.length===0'>批量删除</el-button>
      <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
			</el-pagination>
    </el-col>
  </section>
</template>

<script>
  // import util from '../../common/js/util'
  import { getUserListPage } from '../api/api'

  export default {
    data () {
      return {
        filters: {
          name: ' '
        },
        listLoading: false,
        sels: [], //  列表选中列
        total: 0
      }
    },
    methods: {
      formatSex: function (row, column) {
        return row.sex === 1 ? '男' : row.sex === 0 ? '女' : '未知'
      },
      getusers () {
        let param = new URLSearchParams()
        param.append('page', this.page)
        param.append('name', this.filters.name)
        this.listLoading = true
        getUserListPage(param).then((res) => {
        })
      },
      handlerAdd () {

      },
      batchRemove () {},
      handleCurrentChange () {}
    }
  }
</script>