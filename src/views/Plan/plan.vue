<template>
  <div id="plan">
      <h1>账号管理</h1>
      <el-button type="primary" icon="el-icon-plus" size='small'>新建账号</el-button>
      <!-- 搜索账号模板 -->
      <div style="margin: 25px 0">
        <el-input placeholder="请输入关键字查询" v-model="input" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="账号名称">
            <el-option label="zwx" value="1"></el-option>
            <el-option label="zs" value="2"></el-option>
            <el-option label="lisi" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <!-- 账号信息管理模板 -->
      <el-table
        ref="multipleTable"
        :data="tableData3"
        tooltip-effect="dark"
        style="width: 100%"
        stripe
        max-height='350'
        @selection-change="handleSelectionChange">

        <el-table-column
          type="selection"
          fixed
          width="45">
        </el-table-column>

        <el-table-column
          label="账号"
          prop='ID'
          fixed
          width="80">
        </el-table-column>

        <el-table-column
          prop="type"
          label="类型"
          width="55">
        </el-table-column>

        <el-table-column
          prop="address"
          label="地址"
          show-overflow-tooltip>
        </el-table-column>

        <el-table-column
          prop="emile"
          label="邮箱"
          width="120">
        </el-table-column>

        <el-table-column
          prop="role"
          label="角色"
          width="60">
        </el-table-column>

        <el-table-column
          prop="client"
          label="所属客户"
          width="85">
        </el-table-column>

        <el-table-column
          prop="creator"
          label="创建人"
          width="80">
        </el-table-column>

        <el-table-column
          prop="date"
          label="创建日期"
          width="100">
        </el-table-column>

        <el-table-column
          prop="change-date"
          label="最新修改日期"
          width="120">
        </el-table-column>

        <el-table-column label="操作" fixed="right">
          <template slot-scope="scope">
            <i
              class="el-icon-edit-outline"
              @click="handleEdit(scope.$index, scope.row)"></i>
            <i
              class="el-icon-delete"
              @click="handleDelete(scope.$index, scope.row)"></i>
          </template>
        </el-table-column>

      </el-table>
      <!-- 分页器模板 -->
      <div class="block">
    <el-pagination
      :current-page="currentPage1"
      :page-sizes="[6, 20, 50, 100]"
      :page-size="6"
      background
      layout="sizes, prev, pager, next, jumper"
      :total="tableData3.length">
    </el-pagination>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: '',
      input: '',
      tableData3: [],
      currentPage1: 1
    }
  },
  methods: {
    toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
  },
  mounted () {
    this.$http.post('/dsp-admin/userInfo', {})
    .then(res => {
      this.tableData3 = res;
    })
  }
}
</script>

<style>
#plan{
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 0 20px;
}
#plan h1{
  height: 60px;
  line-height: 60px;
}
.el-input-group__prepend{
  width: 80px;
}
</style>
